# MS5 SoT: State Management SOP (Context Usage)

**Status:** Active  
**Last Updated:** February 2026  
**Purpose:** Define when to use `useGlobal`, `useSession`, or `useCharacter` to avoid state-vibe confusion and prop-drilling. Ensures AI and developers place state in the correct context.

---

## 0. This file Update Instructions

- **StateManagementSOP.md Updates:** All updates to this file MUST be ADDITIVE and NON-DESTRUCTIVE.

---

## 1. useGlobal (GlobalContext)

- **Source:** `turbo/src/client/react/GlobalContext.tsx`.
- **Internal composition:** persistent selection/hydration lives in `turbo/src/client/react/hooks/useGlobalSelectionState.ts`; `GlobalContext` remains the public provider surface.
- **Rule:** App-wide **identity** and **UI chrome**. Anything that is not scoped to a single session or a single character sheet belongs here when it affects the whole app or top-level navigation.
- **Use for:**
  - **Auth:** `currentUser`, `userDbId`, `currentUsername`, `currentPlayerName`, `setCurrentUser`.
  - **Session identity (current session/club):** `activeSessionId`, `activeSessionName`, `isGmMode`, `updateSessionId`; `activeClubId`, `activeClubName`, `updateClub`; `lobbySelectedSessionId`, `lobbySelectedSessionName`, `updateLobbySelectedSession`.
  - **Navigation:** `activeView`, `setActiveView`.
  - **Modals and toasts:** `showPrompt`, `showModal`, `showDoubleInputPrompt`, `closeModal`, `addMessage`, `removeMessage`, `clearWaitMessages`; `modalProps`, `setModalProps`.
  - **Sidebar:** `showSidebar`, `openContextMenu`, `closeContextMenu`, `contextMenu`.
  - **Pending flows:** `pendingCharacterOpen`, `setPendingCharacterOpen`; `activeCharacterId`, `updateCharacterId`; `activeAdventureId`, `updateAdventureId`.
  - **GM UI state:** `gmActiveTab`, `setGmActiveTab`, `gmSelectedAreaId`, etc.
  - **AE Encounters selection:** `aeSelectedAreaId`, `aeSelectedEncounterId` live in GlobalContext; Adventure Editor persists them per adventure in localStorage (`ms5_ae_selection_<adventureId>`) and restores when returning to the Encounters tab (hydration in AdventureEditor; default first area + first encounter when none saved or invalid). Changing the selected Area auto-selects that area's first encounter (if any).
  - **Socket:** `useSocket()` from same provider (socket instance for emitting events).
- **Google auth lifecycle note:** `LoginScreen.tsx` still owns the unauthenticated UI surface and posts the Google credential to `/google-login`, but page-global Google Identity Services initialization now lives in `turbo/src/client/react/features/auth/googleIdentityClient.ts`. This keeps GIS `initialize()` idempotent across login-screen remounts while leaving auth state ownership in `GlobalContext`.
- The root master entry at `/` is **not** a replacement for Turbo `GlobalContext`; it only selects and proxies into child runtimes.
- **Flex counterpart note:** the isolated Flex runtime now uses Flex-local `GlobalContext.tsx` plus `flex/src/client/react/features/auth/googleIdentityClient.ts` for the same login/reauth ownership pattern. Compatibility wrappers like `FlexGlobalContext.tsx` re-export that surface for older Flex-local entrypoints.
- **Do not use for:** Session payload data (e.g. clonedAdventureData), roll history, presence, or character sheet data — use `useSession` or `useCharacter` instead.

---

## 2. useSession (SessionProvider)

- **Source:** `turbo/src/client/react/features/session/SessionProvider.tsx`. Session context is available only when **both** `activeSessionId` is non-null **and** the user is logged in (`currentUser` non-null). The internal provider mounts only after login so that session-scoped socket emissions (e.g. `request_session_presence`, `join_session_room`) are never sent before auth is resolved; this avoids the "Authentication required" modal race on first load.
- **Rule:** **Session-scoped** and **live** data shared across character views or GM. Single source of truth for real-time session state.
- **Use for:**
  - **Session identity:** `sessionId` (redundant with GlobalContext but session-scoped for convenience).
  - **Session payload:** `sessionData` (includes `clonedAdventureData` for GM; from `receive_session_data` / `receive_session_update`).
  - **Presence:** `playerPresence` (CharacterPresence[] for NishTracker, PartyLog).
  - **Rolls:** `rollResults` (Map<charId, RollResult[]>), `clearRollHistory`, `appendRoll`, `seedRollHistory`, `requestPresenceRefresh`.
  - **Encounter (session-wide):** `activeEncounter`, `encounterName`, `isEncounterActive`, `globalMultipliers`, `lastPublishedAt` — consumed by CharacterContext and GM; SessionProvider is the owner, CharacterContext syncs for the open sheet.
- **Consumers:** NishTracker, PartyLog, CharacterRollLog, CharacterContext (for encounter/multipliers), GmScreen, GmAdventureLoader, GmGameTimePanel.
- **Do not use for:** Character document (inventory, attributes, name) or character-only UI state — use `useCharacter` inside a CharacterProvider.

---

## 3. useCharacter (CharacterContext)

- **Source:** `turbo/src/client/react/features/character/CharacterContext.tsx`. **Must be used within CharacterProvider** (which wraps a single character sheet; one provider per open character tab).
- **Internal composition:** encounter sync/runtime helpers live in `turbo/src/client/react/features/character/useCharacterEncounterSync.ts` and `turbo/src/client/react/features/character/useHudActionState.ts`; `CharacterContext` remains the public sheet API.
- **Rule:** **Single character sheet** and its **encounter context** for that sheet. All character document state and sheet-specific actions live here.
- **Use for:**
  - **Character document:** `character` (identity, attributes, weapons, armor, powers, skillSets, rollLog, meta state, etc.); `setCharacter`, `patchCharacter`, `updateAttributes`, `updateWeapons`, `updateArmor`, `updatePowers`, `updateSkillSets`, `updateRollLog`.
  - **Encounter context (for this sheet):** `encounterMonsters`, `globalMultipliers`, `isEncounterActive`, `encounterName` (synced from SessionProvider); `setEncounterMonsters`, `toggleEncounter`.
  - **Actions:** `updateCharacterItem`, `addCharacterItem`, `requestPowerLevelUp`; morph/ability picker: `openMorph`, `closeMorph`, `openAbilityPicker`, `closeAbilityPicker`, `setNoApModal`, `setAssignAttributesModalOpen`; gameplay: `resolveAndSpendActions`, `resolveAndSpendMeta`, `resolveAndSpendMetaCombined`, `setActionKeys`, `toggleAction`, `resetActions`, `usePower`, `setConcentration`, `spendMeta`, `channelMeta`, `resetMeta`, `floodMeta`.
  - **UI state (sheet-local):** `activeTab`, `setActiveTab`, `rollLogOpen`, `setRollLogOpen`, `activeAbilityTab`, `setActiveAbilityTab`, morph state, modals (noApModal, assignAttributesModalOpen), `concentration` (PAG duration display).
- **Consumers:** DossierView, GameSheetView, AdvancementView, PartyLog (when rendered inside sheet), CharacterHud, AttributeList, AbilityCard, CharacterWeaponList, CharacterPowerList, CharacterArmorList, CharacterSkillList, MorphPanel, useAdvancement, etc.
- **Do not use for:** Session list, club list, GM clone data, or app-level modals — use `useGlobal` or `useSession`.

---

## 4. Minimal Prop Contract (Character Views)

- **Rule:** Character sheet views (Dossier, Advancement, Game Sheet, Party Log) MUST get their data from **CharacterContext** (`useCharacter`) and, where needed, **SessionProvider** (`useSession`) and **GlobalContext** (`useGlobal`). The router shell (CharacterSheet.tsx) MUST NOT pass character data or modal open/close state as props; it only passes routing-related props (e.g. `sessionId` to Party Log) where necessary.
- **Rationale:** Centralized state and no prop-drilling; one source of truth per concern. See [SessionArchitecture.md](SessionArchitecture.md) §4.I (Minimal Prop Contract for Character Views).

---

## 5. Cross-References

- [SessionArchitecture.md](SessionArchitecture.md): SessionProvider lifecycle, minimal prop contract (§4.I), consumer integration pattern.
- `turbo/src/client/react/GlobalContext.tsx`: GlobalContextType and provider.
- `turbo/src/client/react/features/session/SessionProvider.tsx`: SessionContextType and provider.
- `turbo/src/client/react/features/character/CharacterContext.tsx`: CharacterContextType and CharacterProvider.

---

## 6. Flex Runtime Clone Counterpart [ADDED - Mar 2026]

- Flex now mirrors the same three-layer state split in Flex-local files:
  - app-wide state in `flex/src/client/react/GlobalContext.tsx`
  - session-wide live state in `flex/src/client/react/features/session/SessionProvider.tsx`
  - character-sheet-local state in the copied Flex-local character domain
- The important boundary is runtime locality: Flex should preserve these ownership rules inside `flex/` without depending on Turbo runtime files as implementation imports.
