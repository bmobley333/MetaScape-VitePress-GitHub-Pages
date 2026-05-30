This document is the **transition/objectives SoT** for MetaScape 5 (Turbo) becoming the **Flex-Turbo Hybrid** model. It preserves the design intent and migration targets discussed during the transition period, but it is not the day-to-day gameplay authority when `MS5Turbo.md` already defines the active rulebook.

---

# **SoT: MetaScape 5 (MS5) Flex-Turbo Hybrid Transition**

## **1\. Core Objective**

The goal is to merge the high-end mathematical "Heroic Curve" of **Turbo (MS5)** with the streamlined, highly playable, and AI-friendly logic of **Flex (MS4)**. MS5 will become the "advanced big brother" to Flex—keeping the gritty survival and open-ended dice of Turbo while adopting the speed and flexibility of Flex.

## **2\. High-Level Philosophy**

* **Simplicity \= Robustness:** Complex systems emerge from simple fundamental particles.  
* **AI-Native Design:** Rules must be simplified into forms (like one-line powers) that AI can generate and manage at scale.  
* **Game over Simulation:** Move away from "Meta-pool management" and toward "Round-to-round tactical decisions."  
* **Universal Compatibility:** The system must support any genre (Fantasy, Sci-Fi, Cyberpunk) using the same core backbone.

---

## **3\. Attribute & Core Stat Overhaul**

The seven Turbo attributes and three core stats are consolidated into **five Primary Attributes**.

### **The New Five:**

1. **Magic:** Energy, Psionics, Supernatural.  
2. **Might:** Physical strength, Durability, Brutality.  
3. **Mind:** Logic, Will (formerly Will), Knowledge, Awareness (mental).  
4. **Motion:** Speed, Agility, Initiative, Movement, Awareness (physical).  
5. **Moxie:** Stamina, Grit, Vitality governor, Death checks.

### **Mapping for Migration:**

* **Awareness** $\\rightarrow$ Motion or Mind (context-dependent).  
* **Stamina** $\\rightarrow$ Moxie.  
* **Will** $\\rightarrow$ Mind.  
* **Initiative** $\\rightarrow$ Motion.  
* **Movement** $\\rightarrow$ Motion.  
* **Vitality** $\\rightarrow$ Moxie.

---

## **4\. The Core Roll & Tier System**

MS5 will replace the complex Attribute Governor/Tag system with a **Narrative Tiering** model combined with **Flex Reliability**.

### **Tiers (SABCDF)**

* All attributes are assigned to a Tier (S, A, B, C, D, or F).  
* All abilities, skill sets, and gear are assigned to an attribute(s), thus they will roll using that attribute's Tier  
* The Tier determines the base "Turbo Die Curve" used for the roll.

### **Skilled vs. Unskilled (The "Flex" Reliability Logic)**

* **Unskilled:** Roll the Tier Rating once (1-Turbo).  
* **Skilled:** Roll the Tier Rating twice and take the highest (**2H-Turbo**).  
* **Advantage/Disadvantage:** Implemented via rolling the Rating one more time or one less time. If the current roll is 1-Turbo, then "one less time" is 2L-Turbo.  
* Skilled/Unskilled and Advantage/Normal/Disadvantage \- removes the need for complex numerical Morph modifiers.  
* The only modifier kept is the classic \+bonus (technically could be a \+\# or \-\# so could be a penalty as well). 

---

## **5\. The Power System (X-Time)**

The **Meta/Channel/Flood** system is entirely deprecated and replaced by the **Uses** model.

### **Usage Logic:**

* **\#-Day:** Limited uses per long rest. Max 3\.   
* **\#-Enc:** Limited uses per combat encounter. Max 3\.  
* **1-Rnd:** Once per round.  
* **Constant:** Always active.

### **Power Definition:**

* **One-Line Powers:** Powers must be explained in a single, succinct line.  
* **AI Tables:** Powers are generated in bulk tables by AI based on a Class/Race/Background narrative (e.g., "Shanask Sorce Warlock").  
* **Advancement:** Fluid advancement via Player-GM negotiation. Players can improve any aspect of a power (duration, targets, damage) with GM approval, using Flex guidelines.  
* **Point economy:** GP (Gear Points) and ArfP (Artifact Points) are defined in MS5Turbo and CSAdvancement; GP for Gear, ArfP for Artifacts; AP can be converted to either.

---

## **6\. Combat & Defense**

* **Defense Choice:** Every character has access to **Dodge** (Motion) or **Block** (Might/Gear) by default.  
* **Combat Styles:** Hard-coded logic for six distinct styles:  
  1. Single Weapon (Accuracy)  
  2. Multi-Attack (Smaller weapons)  
  3. Dual Wielding (Hybrid)  
  4. Two-Handed (Heavy damage)  
  5. Weapon and Shield (High Block)  
  6. Martial Arts (Speed/Technique)

---

## **7\. Gear, Weapons, & Armor**


* **Attribute Requirements:** To balance heavy gear, high-tier weapons and armor have attribute requirements (e.g., a Might requirement for a Heavy Shield).  
* **Flavor Impact:** Heavier weapons provide higher Blocks; lighter weapons allow for more Multi-attacks. Powers make up the rest of, and often the bulk of, the game impact per weapon type. 

---

## **8\. Durations & Tracking**

The complexity of tracking "\# of rounds" is removed. MS5 adopts Flex durations exactly:

1. **Instant**  
2. **This Round** (Until the end of the current turn)  
3. **1 Round** (Until the start of the next turn)  
4. **For Encounter**  
5. **Permanent**

**Implementation (Phase 3b):** Usage-state spending and the Flex duration set are implemented in code: `use_power` socket handler, encounter-end reset of usedEnc/usedThisRound, and duration normalization in `lib/durationUsageUtils.ts` and formatters.

---

## **9\. Turbo Wins (Retained Features)**

The following elements of the original Turbo system are kept for their depth:

* **The Die Math:** The algorithm-driven 1-to-infinity curve remains the engine for all five roll types: Skill, Attack, Damage, Defense, Armor.  
* **Vitality System:** Gritty wound tracking (1st, 2nd, 3rd degree), bleeding mechanics, and the "Death Check" logic are preserved to maintain high stakes.

---

## **10\. MorphRoll Reduction (Technical Implementation)**

* Trash the "Grand Combine" and almost all individual Morph modifiers.  
* The only "Morph" is a simple \+ or \- bonus.  
* All other situational modifiers are handled by the **Multi-Roll (Skilled/Unskilled and Advantage/Normal/Disadvantage)** system of 6 possibilities, resulting in 1 or more rolls and taking the highest (or lowest) of those rolls as per the rules. 

---

## **11\. Runtime Migration Milestone [UPDATED - Mar 2026]**

The repository has now completed the **Flex-local runtime clone** milestone:

* `flex/` now hosts a full local copy of the Turbo runtime structure across client, server, shared types, schemas, socket handlers, and CSS assets.
* Flex remains an isolated child runtime behind `/flex` and `/flex/socket.io`; this milestone changes implementation coverage, not runtime isolation.
* Future Flex-specific gameplay/math divergence should occur by editing Flex-local copied files, preserving the strangler-fig goal of safe incremental separation from Turbo.

