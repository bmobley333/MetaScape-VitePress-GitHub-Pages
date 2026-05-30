# Using the Turbo Web App

The **MetaScape Turbo Web App** is an advanced digital character sheet and real-time game state tracker. It automates Multi-Turbo rating calculations, action cost tracking, and random loot rolls.

---

## 📱 Dashboard Overview

* **Tiers & Ratings**: Input your attribute tiers (S, A, B, C, D, F). The app automatically calculates and scales your numeric roll ratings based on your level.
* **GP & ArfP Balance**: Log your Gear Points (GP) and Artifact Points (ArfP) to buy equipment and mystical artifacts.
* **Encounter State Tracker**: Instantly switches between **Combat Encounter** and **Roleplay**. Transitions automatically reset your per-encounter uses and refresh action boxes.

---

## 🔷 The AMP Action Panel

Your round actions (Attack, Move, Partial) are represented by active HUD toggles.

* **Primary Power Activation**: Clicking a Power Card automatically spends its Action cost (A, M, or P) on your HUD and consumes 1 of its per-encounter or per-day uses. It then posts the full power text and roll buttons to the shared Roll Log.
* **Cost Suppression Logic**: When you click the inline buttons inside a posted power card or log entry to roll attack/damage, the app opens the **Morph Drawer** with cost suppression active. This allows you to roll without double-spending actions or uses.

---

## 📦 Loot Engine Integration

Your companion sheet integrates directly with the server-side loot engine (`lib/lootEngine.ts`).

1. **Loot Selection**: Open the **Loot** tab to request random loot drops or query specific loot tables.
2. **Alphabetical Sorting**: The client sorts all server-provided loot tables alphabetically, making lists easy to scan.
3. **Roll Log Formatting**: Items rolled through the loot table appear in the logs with designated emojis (e.g. ⚔️ for weapons, 🧥 for armor, 🧰 for gear).
