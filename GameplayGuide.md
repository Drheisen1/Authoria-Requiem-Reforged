# Authoria - Requiem Reforged — Gameplay Guide

This guide is your comprehensive companion to the **Authoria - Requiem Reforged** modlist for Skyrim. It provides essential information to help you navigate the early game, understand the systems and mechanics at play, and fully enjoy the carefully curated experience this list offers.

- Remember that you can always check the keybinds by pressing the **F11** key on your keyboard. 
- Extra controller keybinds for combo inputs and wheeler menu can be viewed in the Complete Controller Setup MCM Menu.
---

## Before you begin

Customization:
On the left panel of mo2, you will find a Customization separator followed by things you can customize in the modlist. All customizations **MUST be made on a new save file**! 
  > The image is a bit outdated, the structure for optional mods is the same however.

<img width="1041" height="423" alt="image" src="https://github.com/user-attachments/assets/8c8adb60-2a4a-4f76-9843-c96be1680dd1" />


<details>
<summary><strong>Details on Each Seperator</strong></summary>

**Controller Setup**:
- enable every mod in this separator if you plan on playing with a controller.

**Racemenu Presets**:
- Add the presets you want to use here.

**ENB Presets**:
- Pick your Preferable ENB Preset, Make sure to disable Cabbage ENB then clear overwrite.

**Reshade**:
- Enable everything in this seperator if you want to use Reshade.

**Weaker Followers**:
- Nerfs the damage output from followers, recommended if you plan to play with multiple modded followers.
- 25% -> Recommended if playing with 1-2 Followers.
- 50% -> Recommended if playing with 3 Followers.
- 75% -> Recommended if playing ith >3 Followers.

**Difficulty**:
- To play on Easy Mode *this is VERY recommended if this is your first requiem playthrough* :
  1) Enable both [Requiem lite](https://www.nexusmods.com/skyrimspecialedition/mods/120272), and Authoria - Easy Mode Settings.
  2) Once in Game, Pick the "Easy" Options when you are prompted.
  3) Open the MCM menu, search for "Requiem Lite" and enable it.
      - This will impact survival elements (slower), combat (deal more damage, take less damage), the economy, and stamina costs.
- [Engaging Combat - Keep Combat Dynamic at Higher Levels](https://www.nexusmods.com/skyrimspecialedition/mods/132625?tab=description) 
  - can be enabled/disabled at any time during or before your playthrough.

</details>

Changing anything in the customization tab (except the difficulty separator) is considered **NOT save safe**.

Once you're done, make sure **Authoria - Requiem Reforged** is selected in the top right dropdown in mo2 and run the game.

---

## Gameplay
Authoria - Requiem Reforged uses **Requiem** as its core gameplay overhaul.

If you are new to Requiem, watch this video first:  
https://www.youtube.com/watch?v=fG7D8meR0cY

---

## 🧬 Character Creation & Progression

## Planning Ahead
- It is recommended to have a build in mind before starting character creation, a lot of choices during and after character creation depend on the build you want to play with.

### Race Selection
In addition to Requiem, Authoria uses **Requiem - Races Redone**. Please check its details on its [Nexus page](https://www.nexusmods.com/skyrimspecialedition/articles/6669)    

---

### Initialization (Starting Room Flow)
After selecting your race, you will be prompted with messages that will run you through initialization.

> During this time, you will **not** be able to move, Please don't spam your keyboard.

Flow order:
1. First welcome message
2. **[Starting Choices](https://www.nexusmods.com/skyrimspecialedition/mods/62901)** runs 
3. **[SkySigns](https://www.nexusmods.com/skyrimspecialedition/mods/147884)** runs  (pick your birthsign)
4. **[Devotion](https://www.nexusmods.com/skyrimspecialedition/mods/185531)** runs  (Each race is custom, please read mod articles for more guidance)
5. Difficulty selection.
6. Final message appears → movement enabled.

---

## Religion
Authoria uses Devotion as it's Religion Framework 
https://www.nexusmods.com/skyrimspecialedition/mods/185531

---

## Standing Stones
Authoria uses **[Birthsigns Redone](https://www.nexusmods.com/skyrimspecialedition/articles/6668)**:  
Once you select your birthsign, you can only interchange it with the same group.

---

## Notable MCMs to tweak:
1) [Select your season](https://www.nexusmods.com/skyrimspecialedition/mods/64278): you can select which season to start in in this mcm.
2) [Sunhelm](https://www.nexusmods.com/skyrimspecialedition/mods/39414): you can tweak survival aspects in this mcm (Hunger rate, Thirst rate, and Fatigue rate).
3) [Frostfall](https://www.nexusmods.com/skyrimspecialedition/mods/671): you can tweak Cold rate from this mcm.
4) [Smoothcam](https://www.nexusmods.com/skyrimspecialedition/mods/41252): you can select your prefered smoothcam preset in the Presets tab.
5) [TK Dodge](https://www.nexusmods.com/skyrimspecialedition/mods/56956): to assign your dodge key, you can also disable the perk lock in the mcm.
6) [Fast Travel Cost](https://www.nexusmods.com/skyrimspecialedition/mods/20200): to tweak fast travel cost.
7) [Requiem] : can tweak damage dealt, and recieved from here, as well as toggle septim and/or quiver weight.

## Notable SKSE-Menu-Framework to tweak (F3):
1) [Simple Power Attack](https://www.nexusmods.com/skyrimspecialedition/mods/175093): to assign your power attack key
2) [Dual Wield Parryingf SKSE](https://www.nexusmods.com/skyrimspecialedition/mods/175387?tab=description): to assign your parrying key

---

## Combat
Combat has been completely overhauled with:
- MCO
- TK Dodge
- Sekiro Combat S
- Stances NG

<details>
<summary><strong>Tweaked Combat</strong></summary>
  
- Unarmed: Custom made from scratch (based on adamant) Hand to Hand skill tree.
    - Unarmed is leveled up through hitting enemies while unarmed (vanilla leveling), regardless if you have static skill enabled or not.
- Sekiro Combat S tweaks:
  - timed blocking is gated behind experienced blocking perk in the block perk tree.
  - this will gain more modification in the future
- Stances are rotated through the X button on controller.

</details>

---

## OBody and Character Appearance
- Once you have completed character setup, press **O** (the key under backspace) and select a preset of your choice from the menu that appears.
  - You may change presets as much as you like.
  - If your clothing/armor fails to resize correctly, re-equipping should solve it.

- You can change body shapes for NPCs in the same way:
  - Target them at close range and press **O**
  - NPCs are assigned body shapes randomly from the available presets when first encountered, so the same NPC may look different between playthroughs.

---

## Leveling and Perks
Vanilla leveling has been **enhanced** with:
- **[Experience](https://www.nexusmods.com/skyrimspecialedition/mods/17751)**: EXP gained from exploration, combat, and quests, but not from skills


**Perks**

* Unarmed:
  * Custom made from scratch (based on adamant) Hand to Hand skill tree.
  * Unarmed is leveled up through hitting enemies while unarmed (vanilla leveling), regardless if you have static skill enabled or not.
* To unlock dodging you need the corresponding perks in the Evasion or Heavy Armor perk tree (does not apply to easy mode).

---

## Questing
This list includes vanilla quest expansions as well as quite a few new ones.

Most of these can be explored simply by encountering them through normal gameplay, or you can check the [Modlist Grimoire here](https://modlistgrimoire.com/modlists/authoria-requiem-reforged)

### General Advice
- Many new quests will activate organically during exploration.
- For guidance or spoilers, you can:
  - Check the installed mod list in MO2
  - Look through the **“Quests and Newlands”** category to see what’s been added

<details>
 <summary><strong>List of Major Quests</strong></summary>
Legacy of the Dragonborn<br> 
Beyond Skyrim - Bruma<br>  
Dac0da<br> 
Vigilant<br>
Unslaad<br>
Glenmoril<br>
Wyrmstooth<br>
Olenveld<br>
Sirenroot<br>
Saints and Seducers Extended Cut<br>
Tools of Kagrenac<br> 
The Gray Cowl of Nocturnal - 10th Anniversary Edition<br>
Moonpath to Elsewyr<br>  
</details>

The following are quest tweaks that relate to gameplay:

1) VICN mods’ starting requirements:
- Dac0da -> Be level 30
- Vigilant -> Be level 30 and finish Dac0da
- Glenmoril -> Be level 30, finish Discerning the Transmundane, Waking Nightmare, At the Summit of Apocrypha, Dac0da, and finally vigilant's scared anatomancer quest, then sleep.
- Unsladd -> Be level 40, finish Dragon Slayer quest (Final Vanilla main Quest), Dac0da, Vigilant, and Glenmoril

2) Legacy of the Dragonborn’s replicas have been heavily nerfed.  
They serve the purpose of being used for displays only.  
In the case of an artifact being removed by a quest, the replica will retain the original properties of that artifact.
