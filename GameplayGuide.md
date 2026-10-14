# Authoria - Requiem Reforged — Gameplay Guide

Welcome to **Authoria - Requiem Reforged**, built on **Requiem 6.0.2**. Start with setup, then use the grouped reference sections as questions arise.
## Contents

- [1. Set up and start your game](#1-set-up-and-start-your-game)
  - [Customization and launch](#customization-and-launch)
  - [Creating your character](#creating-your-character)
  - [First-session settings and controls](#first-session-settings-and-controls)
  - [Saving and loading](#saving-and-loading)
- [2. Character and progression](#2-character-and-progression)
  - [Understanding Requiem](#understanding-requiem)
  - [Character foundations](#character-foundations)
  - [Leveling and perks](#leveling-and-perks)
  - [Vampires and werewolves](#vampires-and-werewolves)
- [3. Survival and crafting](#3-survival-and-crafting)
  - [Food in Authoria](#food-in-authoria)
  - [Survival, exposure, and injuries](#survival-exposure-and-injuries)
  - [Crafting and equipment services](#crafting-and-equipment-services)
- [4. Combat, magic, and recovery](#4-combat-magic-and-recovery)
  - [Combat](#combat)
  - [Magic in Authoria](#magic-in-authoria)
  - [Bard gameplay](#bard-gameplay)
  - [Death and recovery](#death-and-recovery)
- [5. Travel and exploration](#5-travel-and-exploration)
  - [Travel, housing, and services](#travel-housing-and-services)
  - [Quests and exploration](#quests-and-exploration)
  - [Legacy of the Dragonborn](#legacy-of-the-dragonborn)
  - [Modded and custom followers](#modded-and-custom-followers)
- [6. Appearance and adult content](#6-appearance-and-adult-content)
  - [Presentation and adult content](#presentation-and-adult-content)

## 1. Set up and start your game

Follow this route for a new character:

1. Read [Understanding Requiem](#understanding-requiem), then choose a general build.
2. Choose your [customizations and difficulty](#customization-and-launch) in MO2, then launch.
3. Finish [character initialization](#creating-your-character), spend your three starting perks, and choose a start.
4. Review [first-session settings and controls](#first-session-settings-and-controls); settings changes are optional.
5. Choose your [saving routine](#saving-and-loading), including profile setup if using SSSO3.
6. Prepare [food](#food-in-authoria), water, rest, warm gear, and a route to shelter before travelling farther. Look for [early jobs](#early-game-jobs-and-bounties) and check each destination before accepting.

### Customization and launch

#### Choosing your customizations

In **Mod Organizer 2 (MO2)**, look for the **Customization** separator in the left panel. The groups below it contain the available customization options.

**Choose your customizations before starting a new character.** Changes outside the Difficulty separator are not safe for an existing playthrough: they require a new save. Requiem Lite can be enabled at any time; follow the difficulty instructions below when switching an existing character to Easy Mode.

> The screenshot is slightly outdated, but the structure for optional mods is the same.

<img width="1041" height="423" alt="Customization groups in Mod Organizer 2" src="https://github.com/user-attachments/assets/8c8adb60-2a4a-4f76-9843-c96be1680dd1" />

<details>
<summary><strong>Customization options</strong></summary>

| Group | What to do |
| --- | --- |
| Controller Setup | Enable every mod in this group if you plan to use a controller. |
| RaceMenu Presets | Add the character presets you want to use here. |
| ENB Presets | Choose your preferred ENB preset. When switching away from Cabbage ENB, disable Cabbage ENB and clear MO2's Overwrite folder. |
| ReShade | Enable everything in this group if you want to use ReShade. |
| Weaker Followers | Reduce follower damage if you plan to use multiple modded followers. See the recommendations below. |
| Authoria - Slower Leveling | Enable for slower early leveling. Off by default; choose before starting a new game. Find it under **Slower Levelling** in MO2's User Customization area. See [Leveling and perks](#leveling-and-perks) for details. |
| Crafting pulls resources from containers | Enable for shared crafting storage. Already preconfigured. **Warning: this can be heavy on performance.** |

Recommended follower damage reductions:

| Number of followers | Reduction |
| --- | --- |
| 1–2 | 25% |
| 3 | 50% |
| More than 3 | 75% |

</details>

#### Choosing your difficulty

**Easy Mode is strongly recommended for your first Requiem playthrough.** It slows survival needs, increases the damage you deal, reduces the damage you take, and adjusts the economy and stamina costs.

To start a new character in Easy Mode:

1. Before starting your character, enable both **[Requiem Lite](https://www.nexusmods.com/skyrimspecialedition/mods/120272)** and **Authoria - Easy Mode Settings** in MO2.
2. During character initialization, choose the **Easy** options when prompted.
3. Open the **Mod Configuration Menu (MCM)** in game, find **Requiem Lite**, and enable it.

**Already finished initialization?** You can enable Requiem Lite at any time; you do not need to start a new character to switch to an easier difficulty.

1. Exit Skyrim completely.
2. Enable **Requiem Lite** in MO2.
3. Relaunch the game and load your save.
4. Open **MCM Recorder** in the MCM and manually run the **`AUTORIA_EASY`** recording to apply Authoria's Easy Mode settings.
5. Open **Requiem Lite** in the MCM and enable it manually. MCM Recorder does not enable it for you.

**[Engaging Combat - Keep Combat Dynamic at Higher Levels](https://www.nexusmods.com/skyrimspecialedition/mods/132625?tab=description)** can be enabled or disabled before or during your playthrough.

#### Launching the game

Once you have finished choosing your options, select **Authoria - Requiem Reforged** in MO2's top-right dropdown and run the game.

### Creating your character

#### Plan your build

Choose a main way to fight and the skills you want to support it. Read [Character foundations](#character-foundations) for race, birthsign, and religion choices before committing.

#### Complete the starting-room setup

After you select your race, a series of messages guides you through initialization.

> **You cannot move during initialization.** Follow the prompts and wait for the final message; repeatedly pressing keys will not speed up setup.

The sequence is:

1. The first welcome message appears.
2. **[Starting Choices](https://www.nexusmods.com/skyrimspecialedition/mods/62901)** runs.
3. **[SkySigns](https://www.nexusmods.com/skyrimspecialedition/mods/147884)** runs; choose your birthsign.
4. **[Devotion](https://www.nexusmods.com/skyrimspecialedition/mods/185531)** runs; each race has custom settings, so consult the mod's articles for guidance.
5. Choose your difficulty.
6. The final message appears and movement becomes available.

**Spend your starting perks before heading out.** Requiem gives you **three free perk points** at the start of a new game. Use them on the skills your character will rely on instead of saving them for later. Early perks can make a major difference to your ability to fight and use those skills.

#### Choosing a start with Alternate Perspective

Authoria uses **Alternate Perspective** as its alternate-start mod. You can begin exploring Skyrim without starting the main quest.

In the starting room, interact with the **golden dragon statue** to choose where your adventure begins. **If you are new to Authoria, choose the start at the end of Helgen.** It gives you a familiar place to learn the new mechanics before heading farther into the world.

If you leave the starting room and want to begin the main quest later, return to **Helgen** and find the golden dragon **behind the inn**. You can reach it by climbing in from outside or by using the locked door in the inn's basement. Interact with the dragon to start the main quest.

You can also speak to the innkeeper and rent the best room, but that route can be bugged. Use the golden dragon if the innkeeper option does not work.

### First-session settings and controls

Press **F11** at any time to view keybinds.

**Authoria's MCM and SKSE Menu Framework settings are already configured.** Adjusting them is completely optional; use the options below only if you want to personalize your experience.

#### Useful MCM settings

The **Mod Configuration Menu (MCM)** contains settings for individual mods.

| Mod | Settings you can adjust |
| --- | --- |
| [Select Your Season](https://www.nexusmods.com/skyrimspecialedition/mods/64278) | Choose the season you start in. |
| [SunHelm](https://www.nexusmods.com/skyrimspecialedition/mods/39414) | Adjust hunger, thirst, and fatigue rates. |
| [Frostfall](https://www.nexusmods.com/skyrimspecialedition/mods/671) | Adjust the cold rate. |
| [SmoothCam](https://www.nexusmods.com/skyrimspecialedition/mods/41252) | Choose a camera preset in the Presets tab. |
| [TK Dodge](https://www.nexusmods.com/skyrimspecialedition/mods/56956) | Assign your dodge key or disable the perk requirement. |
| [Fast Travel Cost](https://www.nexusmods.com/skyrimspecialedition/mods/20200) | Adjust the cost of fast travel. |
| Requiem | Adjust damage dealt and received, or toggle septim and quiver weight. |

#### Power attack and parry settings (F3)

Open **SKSE Menu Framework** with **F3** to configure:

- **[Simple Power Attack](https://www.nexusmods.com/skyrimspecialedition/mods/175093):** assign your power attack key.
- **[Dual Wield Parrying SKSE](https://www.nexusmods.com/skyrimspecialedition/mods/175387?tab=description):** assign your parry key.

#### Body presets with OBody

After completing character setup, press **O** and choose a body preset. You can change presets as often as you like. If clothing or armor does not resize correctly, try unequipping and re-equipping it.

To change an NPC's body preset, target them at close range and press **O**.

NPCs receive random body presets when first encountered, so the same NPC may look different between playthroughs.

### Saving and loading

**Always exit Skyrim completely and relaunch it before loading a save.** Launch through Authoria's MO2 setup, then select the save from the main menu. Returning to the main menu without closing the game does not fulfill this step.

#### Optional, recommended: SSSO3

**[Skyrim Save System Overhaul 3 (SSSO3)](https://www.nexusmods.com/skyrimspecialedition/mods/122343) is optional, but recommended.**

Authoria includes the **[SSSO 3 Save Monitoring Utility](https://www.nexusmods.com/skyrimspecialedition/mods/133502)** to prepare your character's save profile automatically. Preparing the profile and enabling SSSO3 are separate steps.

#### Automatic profile setup

1. Create your character and finish initialization. Use a character name other than **Prisoner**; the monitoring utility skips that name.
2. Make a normal manual save through the game's menu.
3. Exit Skyrim completely.
4. Relaunch the game through Authoria's MO2 setup and load that save.
5. Open SSSO3's MCM and enable it.

The monitoring utility does not always work. If SSSO3 cannot recognize your character's profile or cannot be enabled, use the manual setup below.

<details>
<summary><strong>Manual profile setup if automatic setup fails</strong></summary>

1. Make a normal save, then exit Skyrim.
2. Open the save folder used by your active MO2 profile. Find the save you just made.
3. Identify the player ID in its filename using the [author's highlighted example](https://staticdelivery.nexusmods.com/mods/1704/images/70179/70179-1656195972-1044798596.jpeg). Copy the entire highlighted portion, including underscores—not the whole filename.
4. In MO2, open SSSO3's installed mod folder and locate **SSSOConf**.
5. Duplicate **playerid.txt**. Name the copy exactly after your character, including spaces, followed by `.txt` (for example, `Groin the Pig.txt`).
6. Open the copy. Replace `noset` with your player ID, preserving the surrounding JSON formatting. Save it.
7. Relaunch Skyrim, load your save, and enable SSSO3 in its MCM.

For unsupported characters in your name, or failed name validation, the author provides **Bypass Check**: name the duplicate **bypass.txt** instead and select that option in the MCM.

Source: [SSSO3 author's setup instructions](https://www.nexusmods.com/skyrimspecialedition/mods/122343).

</details>

#### Saving with SSSO3

Once SSSO3 is enabled, press **Backslash (`\`)** to request a manual save. This is the button above Enter on the intended keyboard layout.

Use SSSO3 for ongoing save management once enabled; its author advises against mixing it with the base game's save system. 

#### If you choose not to use SSSO3

Follow these saving and loading precautions:

- **Do not save during combat.** Wait until the fight has ended.
- **Do not save during scripted scenes.** Let the scene finish before saving.
- **Do not save immediately after moving between cells or worldspaces**, such as entering a building or moving to another area. Allow the transition and any associated activity to finish first.

Ignoring these precautions can cause lighting problems and other incorrect game states to persist in your save. Make them part of your normal saving and loading routine.

## 2. Character and progression

### Understanding Requiem

Authoria uses **Requiem - The Roleplaying Overhaul** as its foundation. Requiem changes how the world, combat, equipment, skills, and resources work. You begin as an inexperienced adventurer, and learning which fights you can handle is part of the game. Authoria changes some Requiem rules further, so use the sections later in this guide for Authoria-specific exceptions.

**What to expect as a beginner:**

| Change | What it means for you |
| --- | --- |
| **The world does not reliably scale to you.** | A dangerous location may remain dangerous even if you find it early. If enemies overwhelm you, leave, improve your gear and skills, and return later. |
| **Your first perks matter.** | Skill levels alone do not grant every practical ability. Read the first perks in the skills you plan to use; they can remove important restrictions or make your equipment effective. |
| **Stamina is a combat resource.** | Attacking, blocking, movement, and equipment choices affect how much you can do before you tire. Do not spend your entire stamina bar closing the distance to an enemy. Keep enough to defend yourself or escape. |
| **Heavy and light armor play differently.** | Heavy armor offers stronger physical protection, especially against arrows, but its weight makes movement and stamina management harder. Light armor offers less protection while letting you move more freely. Both benefit from their early perks; armored spellcasters also need to consider spell costs. |
| **Enemy defenses matter.** | The same weapon or spell will not work equally well on every target. Pay attention to armor, resistances, and enemy type. Carry another way to deal damage when your usual approach is ineffective. |

> **Heavy armor note:** The first Heavy Armor perk prevents stamina drain while **walking**. It does **not** prevent the drain while **running**.

The world can punish a straightforward charge. Before entering a fight, look at the number and type of enemies, make space to retreat, and use cover against ranged attacks. Time your attacks instead of swinging continuously; a missed swing still leaves you exposed. If your attacks barely hurt a target, that is useful information: try another weapon, spell, or tactic, or come back later. A retreat is normal progress in Requiem.

**Prepare before a fight:** carry supplies for your build and eat a suitable [meal](#food-in-authoria). If stamina drops low, make room to recover.

**Learn enemy types gradually.** Practice on small threats before taking on groups of bandits. A lone wolf and a pack are very different fights. Bandit archers can punish exposed approaches, so use cover and close the distance carefully. Watch for large predators while crossing open country: their attacks can knock you down. As you venture farther, prepare for specific defenses and hazards, such as poison from Falmer, fire against regenerating trolls, and suitable weapons or spells against undead. Do not treat this as a strict level order; your build and Authoria's changes will affect what you can handle.

**Check the Bestiary when an enemy surprises you.** Authoria includes **[The Dragonborn's Bestiary](https://www.nexusmods.com/skyrimspecialedition/mods/123521)**, which records information about creatures you encounter, including their resistances and weaknesses. Reading an entry can help you choose a better weapon, spell, or defense for the next fight. Coverage of some creatures in modded worldspaces is still a work in progress, so an entry may be missing or incomplete.

**Some activities require training.** For example, Requiem's lockpicking uses **expertise** to determine which lock difficulty you can attempt; a higher Lockpicking skill alone does not automatically open every tier. If a lock is out of reach, look for the relevant perk, another source of expertise, or another route.

Authoria uses **Requiem 6.0.2** and adds its own combat, leveling, and difficulty rules, explained below. Use Authoria's in-game descriptions for exact values, racial abilities, food effects, and controls. For more detail on Requiem, see the [beginner video](https://www.youtube.com/watch?v=fG7D8meR0cY) (which covers an older version in another modlist) and the [Requiem mod page](https://www.nexusmods.com/skyrimspecialedition/mods/60888).

#### Requiem artifacts

Requiem gives many unique weapons, armor pieces, and other artifacts special effects. Check the in-game description for Authoria's version.

<details>
<summary><strong>Spoilers: external artifact reference</strong></summary>

[Requiem's Artifacts reference](https://github.com/ProbablyManuel/requiem/blob/main/components/documentation/src/Artifacts.md) lists item names and effects. Consult it if you want to look up a discovery; Authoria may change some details.

</details>

### Character foundations

#### Race selection: Races Redone

Authoria uses **Requiem - Races Redone**. Your race affects more than appearance: races have different starting attributes, skill strengths, resistances, and abilities. Races Redone also ties some starting skills to practical proficiencies, such as being able to try certain actions without the usual first perk. You do not need to memorize the numbers, but read the description of the race you want before committing to a build. The [Races Redone article](https://www.nexusmods.com/skyrimspecialedition/articles/6669) has the full breakdown.

#### Birthsigns and standing stones

Authoria uses **Birthsigns Redone**. Your **birthsign** gives a lasting passive bonus chosen during character setup; activating a **standing stone** later can grant a separate power.

Some signs are straightforward bonuses, while others have significant drawbacks that shape a build. Once you choose a birthsign in Authoria, you can only switch to another sign in the same group. Read the options carefully during setup. The [Birthsigns Redone article](https://www.nexusmods.com/skyrimspecialedition/articles/6668) lists the effects of each sign and stone.

#### Religion: Devotion

Authoria uses **Devotion** for religion. Your race affects the religious paths available to you, and your actions during play can influence your standing with a deity or pantheon. Daedric patrons can offer benefits with a cost. You do not need to manage every detail at character creation: Devotion also responds to how you play. Read your in-game choices and consult the [Devotion mod page and articles](https://www.nexusmods.com/skyrimspecialedition/mods/185531) when you want to understand a particular path.

### Leveling and perks

#### Character experience

Authoria uses **[Experience](https://www.nexusmods.com/skyrimspecialedition/mods/17751)**. You gain **character XP** from quests, discovering and clearing places, defeating enemies, and some other activities such as reading and lockpicking. Using a skill raises that **skill**, but does not directly award character XP. Character levels give perk points; the skill's level determines which perks you can buy. You need both to advance a build.

Authoria's current leveling balance makes the first character levels arrive sooner and speeds up skill practice, especially later on. It also caps trainable skill levels according to your **character level**. The cap rises by about 1.75 skill levels per character level, starting near 16; racial bonuses can shift the exact result.

For a focused character, the usual perk thresholds of **25, 50, 75, and 100** become reachable at roughly character levels **6, 20, 34, and 48**. These are landmarks, not minimums for every race or skill.

**Optional: slower leveling.** If you want a slower pace, enable **Authoria - Slower Leveling** in the **Slower Levelling** section of MO2's User Customization area (off by default). Choose before you start a new game. Character levels then take about **40% more XP** than the default (roughly +50% early, +30% late), close to the pace of ARR 2.5.2. Skill practice slows down to match. The skill cap still follows your character level, so the perk landmarks above stay the same; each level just takes longer to reach.

If a skill stops improving despite continued use, check whether it has reached your current cap. Training cannot raise it further until your character levels up. Play quests, explore, or practice another useful skill instead of grinding the capped one.

**Skill books:** Authoria's shipped skill-book rules, based on [Reading Is Good](https://www.nexusmods.com/skyrimspecialedition/mods/42026), replace the usual instant **+1 skill level** with a permanent **4% bonus to that skill's XP gain** for each distinct book, up to five books or **20%** per skill. Reading remains worthwhile even when a skill is capped.

Followers do not reduce your character XP from kills. You can bring a companion without slowing the XP awarded for the content you complete together.

#### Unarmed progression

Authoria has a custom **Hand to Hand** perk tree adapted from [Hand to Hand - An Adamant Addon](https://www.nexusmods.com/skyrimspecialedition/mods/59790). It follows that mod's perk tree, but Authoria changes some values. Check the in-game perk descriptions for the exact effects in this list.

Unarmed skill increases by hitting enemies while unarmed, using vanilla-style skill leveling.

<details>
<summary><strong>Spoilers: unarmed perks and their effects</strong></summary>

| Perk | What it helps with |
| --- | --- |
| **Pugilist** | Increases unarmed strike damage. |
| **Heavy Blows** | Adds Stamina and, with further investment, Magicka damage to unarmed hits. |
| **Rapid Strikes** | Makes unarmed attacks faster. |
| **Brace** | Reduces incoming weapon and spell damage while both hands are empty. |
| **Brawler's Stance** | Makes unarmed power attacks cheaper and improves their stagger. |
| **Overwhelm** | Increases unarmed power-attack damage. |
| **Knockdown Punch** | Gives unarmed power attacks a chance to knock enemies down. |
| **Fists of Fury** | Rewards repeated unarmed attacks against the same target. |

Several perks have multiple ranks. This table describes their purpose without using the original mod's numbers, because Authoria has its own balance.

</details>

### Vampires and werewolves

#### Playing a vampire

Requiem makes vampirism a powerful but demanding choice. You can contract **Sanguinare Vampiris** while fighting vampires; if it is not cured during its incubation period, it develops into vampirism after roughly three in-game days. The Dawnguard questline offers another route to becoming a **Vampire Lord**. Check your active effects after a vampire fight if you did not intend to turn.

Vampires gain supernatural abilities but must manage feeding and hostile environments. In Requiem, sunlight drains attributes over time, and holy ground such as temples suppresses vampire powers and causes harm. Authoria lets **hooded vampires** avoid the sun's effects. A hooded vampire enemy can still be dangerous in daylight. Authoria's vampire enemies are strong **mid- to late-game encounters**; do not approach a lair as an early-game bandit camp.

Authoria removes blood elixirs from enemy drops. Instead, [Vampire Feeding Tweaks](https://www.nexusmods.com/skyrimspecialedition/mods/47225) gives vampires more direct ways to feed. To try feeding from a **recently killed enemy**, use **Shift+Q** while targeting the body. Feeding on a corpse is not guaranteed to fully satisfy hunger; the mod can give only a small restorative sip. Its page also describes feeding from vulnerable or unaware living targets.

Treat **silver**, **sun-enchanted weapons and gear**, and even **sun-themed healing spells** as hazards when you are a vampire. Do not assume an item or spell is safe because it normally helps a living character.

**Seeking a cure:** Authoria includes [Seeking the Cure](https://www.nexusmods.com/skyrimspecialedition/mods/85923), which changes *Rising at Dawn* into a one-time story. As a vampire, ask **Urag at the College of Winterhold** about a cure or visit **Falion's house in Morthal** directly.

<details>
<summary><strong>Spoilers: Seeking the Cure outcome</strong></summary>

Falion's ritual ultimately fails, so **do not plan on it curing your character**. Decide whether you want to remain a vampire before committing to a character built around it.

</details>

#### Playing a werewolf

You can become a werewolf through the **Companions** questline.

<details>
<summary><strong>Spoilers: Companions transformation</strong></summary>

The Companions route involves a beast-blood ritual.

</details>

Requiem's werewolf system remains in place in Authoria without notable custom changes. Lycanthropy provides benefits even in human form, including extra health, stamina, and carrying capacity, while increasing spell costs and making poison more dangerous. Beast form is a strong melee option, but its poison weakness is more severe. Plan around that vulnerability rather than treating transformation as an answer to every fight.

## 3. Survival and crafting

### Food in Authoria

Authoria replaces Requiem's food system with the **3Tweaks food system**. This is the **only 3Tweaks change** ported into the list; advice about 3Tweaks' other systems does not apply just because the food system is present.

Meals give lasting benefits, so keep one suited to your character active when you travel or fight. A stamina-focused meal can help a physical fighter, while another meal may better serve a mage. Snacks give smaller, shorter benefits. **Food effects in the same category do not stack:** eating another meal replaces your current meal's effects. Check the food's in-game description before eating, especially if you already have a useful meal active.

For exact effects and recipes, see the [3BFTweaks food documentation](https://sites.google.com/view/3bftweaksrequiem/character/food?authuser=0).

### Survival, exposure, and injuries

#### Hunger, thirst, cold, and camping

Authoria uses [SunHelm](https://www.nexusmods.com/skyrimspecialedition/mods/39414) to track hunger, thirst, and fatigue. Eat, drink, and sleep during longer journeys instead of waiting for penalties to become severe. SunHelm also offers disease and survival features; Authoria applies small balance changes to fit Requiem. The food **benefits** described in [Food in Authoria](#food-in-authoria) come from 3Tweaks, while SunHelm handles the need to eat.

[Frostfall](https://www.nexusmods.com/skyrimspecialedition/mods/671) makes exposure to cold a practical travel concern. Weather, wetness, clothing, shelter, and time spent outside matter, and Authoria's setup accounts for the seasons. Prepare warm gear and a route to shelter before a long trip through cold regions. [Campfire](https://www.nexusmods.com/skyrimspecialedition/mods/667) lets you gather fuel, build fires, and set up tents so you can warm up, cook, and rest away from an inn. These systems work together: a camp can turn a risky journey into a manageable one.

#### Hunting and fishing

With [Simple Hunting Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/95943), taking the **pelt** from a dead animal skins it. If you want to carry the whole animal instead, target its body and press **Shift+Q**; Authoria's [Carry Your Carcasses](https://www.nexusmods.com/skyrimspecialedition/mods/62628) setup lets you take it with you for later processing or sale. Choose before looting the pelt if you want the intact carcass.

Fishing uses three complementary mods. [Simple Fishing Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/103440) improves first- and third-person fishing and replaces repetitive fishing-quest dialogue; its optional bait requirement can be managed in its MCM. [Fancy Fishing](https://www.nexusmods.com/skyrimspecialedition/mods/89352) adds convenience settings and a catch minigame, which **Authoria enables by default**. Check its MCM to change the fishing challenge.

#### Wounds

Authoria uses [Wounds - Simplified](https://www.nexusmods.com/skyrimspecialedition/mods/147567). A hard fight can leave injuries such as bruises, cuts, broken bones, or a concussion, with penalties beyond the health you lost. Check your active effects after combat; simply refilling health may not resolve an injury. The simplified system allows injuries to heal over time and provides cure-injury and cure-infection potions, while infection can prevent natural healing. In Authoria, the vanilla **Close Wounds** spell replaces the mod's custom injury-healing spell.

If you do not want injuries in your playthrough, set **injury chance to 0%** in the Wounds MCM.

#### Dirt and blood

[Dirt and Blood](https://www.nexusmods.com/skyrimspecialedition/mods/38886) makes your character visibly dirty over time and bloodied after fights; NPCs can also show blood. This is mainly a visual immersion feature. Authoria adds a bathing hotkey, but using it is optional: **swimming or standing in the rain cleans you just as effectively** in this list. You do not need to stop adventuring just to use a bathing animation.

You can also ask an innkeeper for a paid bath through [Simple Inn Bath](https://www.nexusmods.com/skyrimspecialedition/mods/49014). This is a roleplaying option, not a requirement for staying clean.

### Crafting and equipment services

#### Learning Smithing from books

Authoria includes **[Requiem - Reading Teaches Smithing Perks](https://www.nexusmods.com/skyrimspecialedition/mods/160683)**. When you **read** a Requiem smithing book and have the required Smithing skill level, it automatically unlocks the matching perk. Simply carrying the book is not the same as reading it. If your skill is still too low, keep the book and read it again after you reach the requirement.

**Daedric armor can only be crafted at night**, even after you learn Daedric Smithing. If the recipe is missing during the day, try the forge again at night.

The table below gives **one example location** for each book, confirmed for Authoria. Some books can also be bought from merchants or found elsewhere.

<details>
<summary><strong>Spoilers: smithing books and where to find them</strong></summary>

| Smithing perk | Book to read | Example location |
| --- | --- | --- |
| Craftsmanship | **The Craftsman's Manual** | Often carried by blacksmiths or sold by general goods merchants. |
| Advanced Light Smithing | **An Introduction to Scale Armors** | On a table at the forge in **Embershard Mine**. |
| Elven Smithing | **About Elven Craftsmanship** | Often sold by **Calcelmo** in Understone Keep, Markarth. |
| Dwarven Smithing | **The Art of Dwarven Blacksmithing** | On a stone table near Calcelmo's arcane enchanter in Understone Keep, Markarth. |
| Orcish Smithing | **An Almanac of Orcish Blacksmithing** | On a table in a wooden storage shed at **Cracked Tusk Keep**. |
| Nordic Smithing | **Art of the Nordic Blacksmiths** | Sold by **Eorlund Gray-Mane** at the Skyforge in Whiterun. |
| Morrowind Smithing | **Blacksmithing of Morrowind** | Sold by **Brand-Shei** in Riften. |
| Arcane Craftsmanship | **Arcane Craftsmanship** | Reward from **Balimund** in Riften for completing *Stoking the Flames*. |
| Glass Smithing | **An Introduction to Malachite** | On a table in **Steamscorch Mine**. |
| Ebony Smithing | **Harder than Steel - How to Work with Ebony** | On a shelf in a wooden storage shed at **Narzulbur**. |
| Draconic Blacksmithing | **The Compendium of Draconic Armor** | On a table in **Sky Haven Temple**, reached during *Alduin's Wall*. |
| Daedric Smithing | **Daedric Craftsmanship** | In a Master-locked chest at the **Shrine of Mehrunes Dagon**, reached during *Pieces of the Past*. |

</details>

#### Crafting clothing with looms

Authoria uses **[Threads of the North](https://www.nexusmods.com/skyrimspecialedition/mods/175676)**, which lets you craft clothing at **looms** instead of looking for clothing recipes at a forge or tanning rack. You can find looms in cities and several towns, including Riverwood. **Most clothing recipes become available with Craftsmanship**, the first Smithing perk. At a loom, you can also turn linen wraps into thread spools used by clothing recipes.

#### Smithing services and enchanting limits

With [Honed Metal](https://www.nexusmods.com/skyrimspecialedition/mods/61015), you can pay a blacksmith to **craft or improve equipment** instead of investing in every Smithing perk yourself. A smith's skill affects what they can make and how well they can improve it; a more capable smith may cost more. Authoria rebalances these prices. **Honed Metal's enchanting services are disabled** in this list, so visit a smith for equipment work, not an enchanter for a paid enchantment.

For balance, armor pieces that use **nonstandard body slots** cannot be enchanted. If an accessory or extra armor layer does not appear as an enchanting option, its slot may be intentionally excluded.

#### Making arrows on the road

[Fletching - Craft Arrows Anywhere](https://www.nexusmods.com/skyrimspecialedition/mods/55212) lets you make arrows while traveling through its **Fletching** power, without returning to a forge. You still need the materials. Authoria adjusts the recipes to match Requiem's crafting balance.

## 4. Combat, magic, and recovery

### Combat

Authoria's combat overhaul uses:

- **MCO**
- **TK Dodge**
- **Sekiro Combat S**
- **Stances NG**

#### Unlocking dodge

Dodging unlocks with **Dodging** in the **Evasion** tree for light-armor users, or **Relentless Onslaught** in the **Heavy Armor** tree for heavy-armor users. Until you take the relevant perk, you cannot dodge in normal mode. This requirement does not apply in Easy Mode. You can also disable the perk requirement in TK Dodge's MCM.

#### Blocking and timed blocks

Authoria uses **Sekiro Combat S** for timed blocking. This ability unlocks with **Experienced Blocking**, the **second perk in the Block tree**. You can still use ordinary blocking before taking that perk.

The timing is demanding: a successful timed block has a **0.1-second window**. Treat it as a skill to practice, rather than something you need to rely on in your melee fights.

#### Bow Rapid Combo V3

Authoria includes [Bow Rapid Combo V3](https://www.nexusmods.com/skyrimspecialedition/mods/89308), which adds faster bow attacks and a charged **Power Shot**. Its rapid shot uses the **bow-bash input**. In Authoria, this quick-shot ability unlocks with the **Quick Shot** perk; the charged ability unlocks with the **Power Shot** perk. If an action does not work, check that you have its perk before changing controls.

For Power Shot, keep charging until the visual effect appears, then release. The mod's white effect marks a critical shot; charging to the red effect makes that critical hit stronger. **Bow melee attacks with daggers are disabled.**

#### Switching stances

Press **X** to cycle through stances. Stances only change your **moveset**; switching between them grants no other gameplay benefit.

For dodge, power attack, and parry configuration, see [First-session settings and controls](#first-session-settings-and-controls).

### Magic in Authoria

#### Requiem - Magic Redone

**[Requiem - Magic Redone](https://www.nexusmods.com/skyrimspecialedition/mods/59302)** is the foundation for spellcasting in Authoria. It expands and rebalances Requiem's spells and perk trees, including spell strength, Magicka costs, casting times, staves, scrolls, and enchantments. The five schools have more distinct choices:

| School | Beginner's view |
| --- | --- |
| **Alteration** | Defensive and utility magic: protection, resistance, movement, and effects such as opening or crossing obstacles. |
| **Conjuration** | Bound equipment, raising the dead, and summoning Daedra, spirits, or undead. Different summon paths favor different strengths. |
| **Destruction** | Elemental damage and other offensive magic. Match the damage type to the target's resistances. |
| **Illusion** | Manipulating perception and behavior, with shadow-themed options. Resistance and target type matter. |
| **Restoration** | Healing and cures, wards, and offensive tools against undead and other enemies. |

Choose an early school or two and read their **specialization perks** before buying many tomes. Perks can improve a particular damage element, summon family, or spell category, so two mages in the same school need not play alike. A spell's cost, casting time, and effect can differ from vanilla Skyrim or a spell pack's standalone page. 

Some self- and target-cast versions can be learned together from one tome; check what the tome teaches before buying another copy.

**Illusion works differently from base Requiem:** Magic Redone removes its special upkeep and empowering rules. You pay a normal casting cost, can gain dual-casting through a perk, and must contend with targets that resist mind-affecting spells. If a control spell fails, improve your Illusion skill or perks, use a more suitable spell, or choose a different target.

**Restoration is more than healing:** its sun and turning spells are useful against undead, while poison spells target the living. Wards block incoming magic and provide physical protection; [360 Ward](https://www.nexusmods.com/skyrimspecialedition/mods/156225) extends their coverage around you.

##### Staves and scrolls

**Staves and scrolls have their own progression.** Magic Redone adds staff, wand, battlestaff, and scroll versions of many spells. Staves can reduce the cost of spells from their school while wielded; wands are lighter but have fewer charges and do not give that cost reduction.

To craft a staff or scroll, you generally need to know its spell and invest in the relevant **Enchanting perks**. Staves are made at a forge; a portable scroll-crafting tool is sold by mage merchants. Magic-school perks and Enchanting can also improve these items. For the full spell, perk, and crafting breakdown, use the [Magic Redone mod page](https://www.nexusmods.com/skyrimspecialedition/mods/59302) and its linked documentation; **Authoria's in-game descriptions take precedence** where its balance differs.

#### Additional spell packs

Authoria also includes broad spell packs—[Apocalypse](https://www.nexusmods.com/skyrimspecialedition/mods/1090) adds spells across the schools, while [Triumvirate](https://www.nexusmods.com/skyrimspecialedition/mods/39170) builds themed druid, shadow mage, warlock, cleric, and shaman styles. More focused packs add blood, frost, holy, sound, weapon-enchantment, and nature-themed magic. Authoria rebalances these additions around **Requiem - Magic Redone**; their individual pages describe the original spells, but the in-game versions govern your playthrough.

<details>
<summary><strong>Included spell packs and what they add</strong></summary>

| Pack | Theme |
| --- | --- |
| [Abyssal Tides Magic](https://www.nexusmods.com/skyrimspecialedition/mods/97892) | Forbidden, dark magic. |
| [Ancient Blood Magic II](https://www.nexusmods.com/skyrimspecialedition/mods/115106) | Blood-themed spells. |
| [Winter Wonderland Magic](https://www.nexusmods.com/skyrimspecialedition/mods/93871) | More frost spells. |
| [Constellation Magic](https://www.nexusmods.com/skyrimspecialedition/mods/92104) | Cosmic-themed fire magic. |
| [Dark Hierophant Magic](https://www.nexusmods.com/skyrimspecialedition/mods/108499) | Advanced shadow-and-light spells. |
| [Holy Templar Magic](https://www.nexusmods.com/skyrimspecialedition/mods/113360) | Offensive Restoration magic. |
| [Obscure Magic](https://www.nexusmods.com/skyrimspecialedition/mods/103805) | A varied set of spells across several schools. |
| [Sonic Magic (Sonic Blast)](https://www.nexusmods.com/skyrimspecialedition/mods/76360) | Sound-based disarms, stuns, and disorientation. |
| [Runemaster Magic](https://www.nexusmods.com/skyrimspecialedition/mods/145420) | Spells that enchant weapons. |
| [Wildwaker Magic](https://www.nexusmods.com/skyrimspecialedition/mods/123549) | Botanical magic. |

</details>

#### Learning a spell

With [Immersive Spell Learning - DESTified](https://www.nexusmods.com/skyrimspecialedition/mods/45514), finding a spell tome begins a **study session** rather than instantly teaching the spell. Study time depends on the spell and your character; a comfortable place to sit and enough time to rest make learning easier to plan. Progress on a tome can carry over to another copy of the same book, but starting a **different** tome before finishing may discard the earlier study progress. Finish one spell before switching to another, and account for the time and survival needs that study consumes.

### Bard gameplay

Authoria combines [Skyrim's Got Talent](https://www.nexusmods.com/skyrimspecialedition/mods/50357), [Become a Bard](https://www.nexusmods.com/skyrimspecialedition/mods/2303), and [Bards Reborn](https://www.nexusmods.com/skyrimspecialedition/mods/47994) with custom tweaks. The result is a gradual bard path: you start as an inexperienced performer, practice each instrument, and can work toward studying at the Bards College. Performance also contributes to **Speech** progression. Some followers react to your music, and Authoria lets you move while playing.

To begin, **select an instrument in your inventory** or use Authoria's instrument hotkey. The generic instrument power has been removed. Playing improves your talent with that instrument. At the **maximum Skyrim's Got Talent level**, you can choose a song through Become a Bard's song menu. Authoria removes Skyrim's Got Talent's gameplay buffs and debuffs; learn **Bards Reborn spellsongs** from its spellbooks for musical effects instead. Activating an instrument shows the spellsongs you have learned, bypassing the usual instrument-skill check for those spellsongs.

**Spy quest start:** Reach **mastery level 50** with any instrument.

<details>
<summary><strong>Spoilers: bard progression and unlocks</strong></summary>

**Progression landmarks in Authoria:**

| Goal | Requirement |
| --- | --- |
| Pass the Bards College instrument performance tests | Raise **any one instrument above level 26**. |
| Craft songbooks | Join the **Bards College** and have **more than 46 talent**. Placed songbooks have been disabled, so learn them through the available crafting route. |
| Unlock spellsong recipes | Reach **level 86** with any instrument. |

Learning a **Become a Bard songbook** can make its song available to choose when your skill is high enough. You do not have to wait until maximum talent to start learning songs; maximum talent opens the broader Become a Bard selection. Authoria's songbook rules above take precedence over the requirements on the individual mod pages.

</details>

### Death and recovery

Authoria uses [Shadow of Skyrim](https://www.nexusmods.com/skyrimspecialedition/mods/65136) as an **alternative death** system. In most areas, defeat sends you to a nearby safe place, often just outside the dungeon where you fell. Some in-game time passes, and you leave **some gold** at the place of your defeat. You can return to collect it if the route is safe enough. The mod's Nemesis system and its associated debuffs are disabled in Authoria, so you do not need to hunt a rival or remove a lasting penalty after each defeat.

Some areas cannot use this recovery flow. This includes certain **VICN quest worldspaces** and places that display a warning about death. There, dying returns you to the **main menu** instead of respawning. Keep a suitable save before entering those areas and follow the [saving and loading guidance](#saving-and-loading) when you resume.

## 5. Travel and exploration

### Travel, housing, and services

#### Getting around Skyrim

**Map fast travel costs gold** in Authoria through [Fast Travel Cost](https://www.nexusmods.com/skyrimspecialedition/mods/20200). If you would rather travel through the world, [Carriage and Ferry Travel Overhaul (CFTO)](https://www.nexusmods.com/skyrimspecialedition/mods/8379) expands the carriage network to more settlements and adds ferries along northern shores, Solstheim, and some lakes. Ask a carriage driver or ferryman for the destinations available from that stop; ferries serve places along their waterway rather than every inland town.

[FROTT](https://www.nexusmods.com/skyrimspecialedition/mods/118890) adjusts CFTO's **carriage fares** according to route distance, obstacles, and the state of the civil war. A route may become cheaper after the road is made safer. FROTT does not recalculate ferry fares in the same way.

At many inns, [Wait Carriage in Inns](https://www.nexusmods.com/skyrimspecialedition/mods/83044) offers another option: ask the **innkeeper** to call a carriage, sit and wait for the driver, then speak to the driver and pay for your destination. Authoria adjusts these inn-carriage prices to match its FROTT-balanced carriage economy. This option is especially useful when you are far from a normal carriage stop.

#### Travel tools

With [Auto Move](https://www.nexusmods.com/skyrimspecialedition/mods/42845), place a marker on your map and press **Right Ctrl** to have your character move toward it hands-free. This is travel through the world, so remain attentive to enemies, terrain, and exposure.

[Paraglider - ONE](https://www.nexusmods.com/skyrimspecialedition/mods/134795) let you glide from high places after acquiring the paraglider. Authoria uses the introduction in which a person falls near **Falkreath**. Read his journal for the lead.

<details>
<summary><strong>Spoilers: paraglider location and use</strong></summary>

The paraglider is on the mountain above **Angi's Camp**. The base mod uses the interact key while falling to deploy it. Practice somewhere forgiving before relying on it over a lethal drop.

</details>

For light while traveling, Authoria combines [Lights On](https://www.nexusmods.com/skyrimspecialedition/mods/85575) with [Handheld Lanterns - HDT-SMP](https://www.nexusmods.com/skyrimspecialedition/mods/135973). With a basic lantern in your inventory, press **L** to turn its light on or off. You can craft Authoria's handheld lantern variant at a forge **when you have a lantern in your inventory**.

#### Buying a home

Save substantially more gold before planning to buy a house. Authoria raises house prices above Requiem's usual costs, generally into the **50,000–80,000 septim** range. Check the actual price with the seller before making it a short-term goal.

### Quests and exploration

Authoria expands many familiar quests as well as adding new ones. A familiar objective may now have another solution, and some quests have new conditions before they appear. **Requiem 6.0.2 also changes some vanilla quest requirements**; do not assume a quest is broken just because its usual prompt has not appeared. Some starts trigger only after you change location or level up, so meeting a requirement may not produce an immediate notification.

#### Early-game jobs and bounties

For manageable work before major questlines, check the noticeboards from [Missives](https://www.nexusmods.com/skyrimspecialedition/mods/17576) in Skyrim's hold capitals. They offer local deliveries, gathering, hunting, retrieval, and combat jobs. **Read the destination and objective before accepting:** a delivery may be easy, while an enemy camp may be beyond your current build.

[Headhunter - Bounties Redone](https://www.nexusmods.com/skyrimspecialedition/mods/51847) changes how combat bounties are completed. Defeating a target is not always enough: search the body for proof to turn in, or, for some weakened bandit leaders, capture and deliver the target to a guard.

#### Riverwood and early favors

- **The Golden Claw:** Ask Lucan Valerius at the Riverwood Trader about the stolen claw. The shop is visibly [in disarray after the robbery](https://www.nexusmods.com/skyrimspecialedition/mods/63631); you can offer to help clean it.

  - <details>
    <summary><strong>Spoilers: The Golden Claw choices and rewards</strong></summary>

    Once you recover the claw, you can [return it and later buy it from Lucan](https://www.nexusmods.com/skyrimspecialedition/mods/24689), or [lie and keep it](https://www.nexusmods.com/skyrimspecialedition/mods/50581), giving up Lucan's reward and goodwill.

    </details>

- **Local favors:** Speak directly to residents to ask for work; several favors **no longer start just because you enter an area**. [Small favors have separate journal entries](https://www.nexusmods.com/skyrimspecialedition/mods/73903), so accepting one need not crowd out another. [More miscellaneous jobs count as favors](https://www.nexusmods.com/skyrimspecialedition/mods/121610) when you are helping people toward a hold's thaneship.

#### Start gates that may surprise you

These are **quest start requirements**, not recommended levels for winning the fights. Several Daedric quests still need their usual book, rumor, visitor, or location trigger after you reach the level.

**In My Time of Need:** Finish the main quest **Dragon Rising** before this quest becomes available. The Alik'r world encounter has no conditions and can occur before the quest unlocks.

| Quest | When its usual start becomes available in Authoria |
| --- | --- |
| *Missing in Action* | Level **15**; the Whiterun argument scene is delayed. |
| *Boethiah's Calling*, *The Break of Dawn*, *The Cursed Tribe*, *The Only Cure*, *The House of Horrors*, and *Deathbrand* | Level **20**, plus the quest's usual trigger and any additional conditions described below. |
| *The Whispering Door* | Level **20**, unchanged from vanilla; ask about the rumors described below. |
| *Discerning the Transmundane* | Level **20** for the independent start, with its usual quest-stage requirement. The main quest can also lead you to Septimus. |
| *A Daedra's Best Friend* | Level **25** before Barbas's quest begins. |
| *Dawnguard* | Level **30** before guards begin mentioning the Dawnguard. |
| *The Gray Cowl of Nocturnal* | Level **15**; theft or pickpocketing can trigger the quest. |
| Certain jarl or steward bounties | Level **20** or **30**, depending on the bounty quest; ask the jarl or steward for work. |

*Dragonborn* can also be started by going to **Solstheim**. *The Ebony Warrior* starts at **level 50**, with alternate completion-based triggers below.

<details>
<summary><strong>Spoilers: quest-completion start gates</strong></summary>

| Quest | Completion-based start requirements |
| --- | --- |
| *Dragonborn* (cultist ambush) | Requires the usual progress in *The Throat of the World* (quest stage 160 or later), plus either completion of *Dragonslayer* or already being on Solstheim. |
| *The Ebony Warrior* | Level **50**, **or** complete *Dragonslayer*, Dawnguard's *Kindred Judgment*, or *At the Summit of Apocrypha*. |

</details>

The entries below explain the added choices for several of these quests.

#### Factions, main quest, and civil war

- **College of Winterhold:** Ask Faralda at the bridge to join.

  - <details>
    <summary><strong>Spoilers: College quest progression</strong></summary>

    After *First Lessons*, [seven short lessons from the College's teachers](https://www.nexusmods.com/skyrimspecialedition/mods/66666) come before *Under Saarthal*. They can be completed in any order, so the main College story is not stuck when Tolfdir does not immediately send you to the excavation.

    </details>

- **Thieves Guild:** Find Brynjolf in Riften's marketplace. [He no longer recruits every newcomer on sight](https://www.nexusmods.com/skyrimspecialedition/mods/33256). Check the mod's MCM for the requirements to start *A Chance Arrangement*.

  - <details>
    <summary><strong>Spoilers: Thieves Guild progression and main-quest workaround</strong></summary>

    Later, *Dampened Spirits* and *Scoundrel's Folly* require radiant jobs for Delvin or Vex. Check the mod's MCM for the job requirements; failing the earlier guild quest can double the requirement for *Dampened Spirits*. If the main quest sends you to Riften for *A Cornered Rat* before you qualify for Brynjolf's help, ask **Keerava at the Bee and Barb** instead. [Val Serano](https://www.nexusmods.com/skyrimspecialedition/mods/103669) adds dialogue and alternate choices during the guild story, particularly around the Nightingales and Skeleton Key; take him along if you want to see those scenes.

    </details>

- **Dark Brotherhood or Penitus Oculatus:** The rumor about a boy performing the Black Sacrament leads to Aventus Aretino in Windhelm and *Innocence Lost*.

  - <details>
    <summary><strong>Spoilers: Dark Brotherhood choices and Penitus Oculatus recruitment</strong></summary>

    At Honorhall Orphanage in Riften, you can [investigate Grelod and have her arrested](https://www.nexusmods.com/skyrimspecialedition/mods/80974) rather than kill her, but that route closes the normal way into the Dark Brotherhood. If you instead begin the Brotherhood story and choose to destroy it, [speak to Commander Maro](https://www.nexusmods.com/skyrimspecialedition/mods/21061) afterward to join the Penitus Oculatus; complete *The Jagged Crown* first if his follow-up is unavailable.

    </details>

- **Diplomatic Immunity:** Wait for the main quest to send you to the Thalmor Embassy. Attacking it early can disrupt the main quest.

  - <details>
    <summary><strong>Spoilers: Diplomatic Immunity alternate route</strong></summary>

    You can [assault it](https://www.nexusmods.com/skyrimspecialedition/mods/104936) instead of entering through the party.

    </details>

- **Paarthurnax:** Main-quest choices are described below.

  - <details>
    <summary><strong>Spoilers: main-quest decision</strong></summary>

    Later in the main quest, the Blades ask you to kill him. [Additional dialogue and choices](https://www.nexusmods.com/skyrimspecialedition/mods/51711) let you refuse and still work with the Blades, so you do not have to decide immediately from the vanilla quest prompt.

    </details>

- **The Jagged Crown and the Skyforge:** The Civil War leads you to the crown through your chosen faction.

  - <details>
    <summary><strong>Spoilers: Civil War outcome and Skyforge additions</strong></summary>

    [Ulfric or Elisif later wears it](https://www.nexusmods.com/skyrimspecialedition/mods/28962). Joining the Companions at Jorrvaskr introduces the Skyforge, where [Eorlund and the Companions have more related dialogue and crafting details](https://www.nexusmods.com/skyrimspecialedition/mods/144420).

    </details>

- **Companions initiation:** Join at **Jorrvaskr**.

  - <details>
    <summary><strong>Spoilers: Companions initiation step</strong></summary>

    When *Take Up Arms* sends you to Vilkas, the sparring step is optional in Authoria. Speak with **Kodlak or Vilkas** to continue if you do not want to spar.

    </details>

- **Dragons in the open world:** Encounter timing depends on main-quest progress.

  - <details>
    <summary><strong>Spoilers: random dragon encounter timing</strong></summary>

    Random dragon encounters and location-based dragon attacks become available after the main quest's *A Blade in the Dark* and stop late in *Dragonslayer*. Location-based attacks do not retain vanilla's level-10 minimum. Choosing an alternate start and postponing the main quest therefore also postpones these encounters.

    </details>

#### Daedric quests and the Saints and Seducers

- **Saints and Seducers:** This is a longer Shivering Isles story in place of the Creation Club's short quest. To [start the expanded version](https://www.nexusmods.com/skyrimspecialedition/mods/72772), reach level **20**, finish *The Mind of Madness*, then sleep for **six in-game hours** or leave and re-enter Solitude. The original Creation Club start is not the reliable guide here.
- **The Whispering Door:** From **level 20**, ask Hulda at the Bannered Mare about rumors in Dragonsreach, then speak with Balgruuf's son Nelkir.

  - <details>
    <summary><strong>Spoilers: The Whispering Door choices</strong></summary>

    [Expanded conversations](https://www.nexusmods.com/skyrimspecialedition/mods/76606) let you involve Balgruuf and decide what to do with the Ebony Blade instead of simply taking it.

    </details>

- **The Cursed Tribe:** Largashbur, southwest of Riften, no longer provides a simple automatic start. Once you are at least **level 20** and are an Orc or have earned **Blood-Kin** status, [ask the chief of another Orc stronghold](https://www.nexusmods.com/skyrimspecialedition/mods/171220) about Largashbur, read the letter, and go there.

  - <details>
    <summary><strong>Spoilers: The Cursed Tribe alternate solution</strong></summary>

    Knowing *Bane of the Undead* opens an alternate way to lift Yamarz's curse.

    </details>

- **The Only Cure:** From **level 20**, find Kesh at the Shrine of Peryite near Bthardamz, northeast of Markarth.

  - <details>
    <summary><strong>Spoilers: The Only Cure investigation and choices</strong></summary>

    [His journal and new choices](https://www.nexusmods.com/skyrimspecialedition/mods/57683) allow you to investigate the plague and deal with it without pledging yourself to Peryite.

    </details>

- **The House of Horrors:** Requiem delays this quest until **level 20**. Then speak with Vigilant Tyranus outside Markarth's Abandoned House.

  - <details>
    <summary><strong>Spoilers: The House of Horrors alternate route</strong></summary>

    The [expanded quest](https://www.nexusmods.com/skyrimspecialedition/mods/57285) gives you a route to resist Molag Bal rather than follow his orders.

    </details>

- **The Taste of Death:** Brother Verulus at Markarth's Hall of the Dead leads into the investigation.

  - <details>
    <summary><strong>Spoilers: The Taste of Death choices</strong></summary>

    [Additional choices](https://www.nexusmods.com/skyrimspecialedition/mods/123173) let you turn against Eola and the cult instead of completing Namira's ritual.

    </details>

- **Discerning the Transmundane:** Its independent start is delayed until **level 20**. Find Septimus Signus at his outpost north of the College, or follow the main quest there.

  - <details>
    <summary><strong>Spoilers: Discerning the Transmundane later objective</strong></summary>

    If your character is an Altmer, Bosmer, Dunmer, or Orc, you can [use the Essence Extractor on yourself](https://www.nexusmods.com/skyrimspecialedition/mods/69861) when Septimus asks for that race's blood.

    </details>

#### City and wilderness quests

- **Markarth — The Forsworn Conspiracy:** Enter the city and watch the market: [Weylin starts farther from his victim](https://www.nexusmods.com/skyrimspecialedition/mods/108015), giving you a better chance to stop the attack. Investigate after Eltrys contacts you.

  - <details>
    <summary><strong>Spoilers: The Forsworn Conspiracy story turns and consequences</strong></summary>

    The [expanded conspiracy](https://www.nexusmods.com/skyrimspecialedition/mods/161913) offers ways to protect Eltrys, avoid the framed prison sentence, and make different choices about Madanach. **Killing Thongvor can block the Stormcloaks questline**, so consider that choice before committing.

    </details>

- **Markarth — The Heart of Dibella:** The familiar route begins by intruding into the Temple of Dibella. Alternatively, [become Thane of the Reach and sleep](https://www.nexusmods.com/skyrimspecialedition/mods/94863); a courier's invitation then provides a respectful way in.
- **Riften — Caught Red Handed:** Speak with Svana at Haelga's Bunkhouse.

  - <details>
    <summary><strong>Spoilers: Caught Red Handed choices</strong></summary>

    You now have [more ways to handle her dispute with Haelga](https://www.nexusmods.com/skyrimspecialedition/mods/65708), including refusing the original plan to humiliate Haelga.

    </details>

- **The Rift — Infiltration:** Find Stalleo outside Treva's Watch and hear his plan to retake the fort.

  - <details>
    <summary><strong>Spoilers: Infiltration choices</strong></summary>

    [Talk to the people involved](https://www.nexusmods.com/skyrimspecialedition/mods/114054) before deciding how to deal with its occupants; the original single route is no longer your only option.

    </details>

- **The Rift — Nilheim:** Telrav asks for help on the road below Nilheim.

  - <details>
    <summary><strong>Spoilers: Nilheim reveal and choices</strong></summary>

    [You can question his story](https://www.nexusmods.com/skyrimspecialedition/mods/53792), investigate the fort, or confront the ambush without walking into it first.

    </details>

- **Windhelm — The White Phial:** Ask Nurelion at his alchemy shop about the legendary phial.

  - <details>
    <summary><strong>Spoilers: The White Phial follow-up</strong></summary>

    After the initial expedition, [his illness is depicted through new dialogue and behavior](https://www.nexusmods.com/skyrimspecialedition/mods/152547); the quest's usual follow-up still applies.

    </details>

- **Solitude — Sybille Stentor:** Talk with Melaran or Odar in the Blue Palace to begin [an unmarked investigation](https://www.nexusmods.com/skyrimspecialedition/mods/109265) into Sybille's secret.

  - <details>
    <summary><strong>Spoilers: Sybille Stentor investigation decision</strong></summary>

    Decide whether to expose her after gathering evidence.

    </details>

- **Riften — Face Sculptor:** Find Galathil in the Ragged Flagon after gaining access through the Ratway. Besides ordinary appearance changes, [she can make you unrecognizable](https://www.nexusmods.com/skyrimspecialedition/mods/110116), which can clear existing bounties for an additional fee.
- **Solitude — Lights Out!:** Speak with **Jaree-Ra near the docks** about his plan for the Icerunner.

  - <details>
    <summary><strong>Spoilers: Lights Out! choices and evidence locations</strong></summary>

    You can [investigate and save the ship](https://www.nexusmods.com/skyrimspecialedition/mods/34681) instead of causing the wreck. For an alternative route, look for evidence in **Broken Oar Grotto** and bring it to **Captain Aldis**, or confront Jaree-Ra. **Ahtar**, Solitude's headsman, can point you toward the grotto.

    </details>

- **Solstheim — A New Debt:** After **Mogrul** confronts you in Raven Rock, you have [more ways to deal with his demand](https://www.nexusmods.com/skyrimspecialedition/mods/148427) than paying or fighting.

  - <details>
    <summary><strong>Spoilers: A New Debt solutions</strong></summary>

    Evidence from his thugs can persuade **Adril Arano** to arrest him after *Served Cold*; strong Illusion, Speech, or **Bend Will** can open other solutions.

    </details>

- **Ivarstead — Philter of the Phantom:** Optional exploration interaction; location and use below.

  - <details>
    <summary><strong>Spoilers: Philter of the Phantom location and interaction</strong></summary>

    Explore Shroud Hearth Barrow for the potion, then [use it to play a ghostly prank](https://www.nexusmods.com/skyrimspecialedition/mods/32256) around the village. This is a small extra interaction rather than a major tracked quest.

    </details>

#### Exploration details

**Explore cleared places again later.** With [Skyrim Realistic Conquering](https://www.nexusmods.com/skyrimspecialedition/mods/26396), guards or other friendly occupants can move into certain cleared forts and dungeons instead of leaving them permanently empty or hostile. Authoria uses the **10-day delay** version, so the change is not immediate and does not apply to every location.

**Look for keys before spending lockpicks.** [Locked Chests Have Keys](https://www.nexusmods.com/skyrimspecialedition/mods/74565) places a hidden key for the majority of locked chests in the game. Search the room and nearby people or containers when a lock exceeds your current expertise. Lockpicking remains another way in.

**Dispose of items at the Aetherium Forge carefully.** [Aetherium Forge Destroys Items](https://www.nexusmods.com/skyrimspecialedition/mods/114021) lets you throw unwanted items into the forge's lava to destroy them. Treat that disposal as permanent; check that the item is truly expendable before dropping it.

#### Additional questlines and worldspaces

The groups below suggest **when to try** each adventure, not a promise that every enemy scales to your level. Authoria rebalances their combat and rewards for Requiem, so retreat and return later if an encounter overwhelms you. A stated level or completed quest is a **start requirement** only where the entry says so. These stories can also send you into separate worldspaces; prepare supplies and make a suitable save before a long trip.

##### Explore as you travel

- **[Beyond Skyrim: Bruma](https://www.nexusmods.com/skyrimspecialedition/mods/10917):** Cross the **Pale Pass** border south of Skyrim to explore County Bruma in Cyrodiil. This is a broad region of settlements, local quests, Ayleid ruins, and wilderness rather than one linear quest. You can visit without waiting for a courier; judge individual fights by what you encounter.
- **[Unmarked Locations Pack — All In One](https://www.nexusmods.com/skyrimspecialedition/mods/113660):** Adds more than 150 small places and discoveries across Skyrim, Solstheim, Blackreach, Sovngarde, the Soul Cairn, the Forgotten Vale, and Apocrypha. These are discoveries made by wandering, not a questline to activate or clear in order.

##### Midgame journeys and contained adventures

- **[Sirenroot — Deluge of Deceit](https://www.nexusmods.com/skyrimspecialedition/mods/70917):** Speak to **Frissa Black-Briar at Elgrim's Elixirs in Riften** and join the diving team near Merryfair Farm. This is a choice-driven, puzzle-heavy expedition through submerged Ayleid ruins; allow time to finish a long dungeon rather than treating it as a quick gathering job.
- **[Siege at Icemoth](https://www.nexusmods.com/skyrimspecialedition/mods/109541):** Go west from Northwatch Keep to the **Old Wooden Jetty** on Skyrim's far northwest shore. Read the waterlogged journal on the dead mercenary there to begin the quest and make the boat usable. The trip leads to hostile northern isles and a fort under siege.
- **[Wyrmstooth](https://www.nexusmods.com/skyrimspecialedition/mods/45565):** At **level 15** and after *The Way of the Voice*, change location to start the dragon hunt. **Theodyn Bienne** and **Lurius Liore** move to the **Bannered Mare in Whiterun**; Theodyn can also approach you on a later visit to a town or city. The voyage leads to an island with more to explore after its main story.
- **[Moonpath to Elsweyr](https://www.nexusmods.com/skyrimspecialedition/mods/4341):** After *The Way of the Voice*, find the **Khajiit caravan at Greenwood in Bruma** to begin the journey south. Authoria uses this Bruma-connected start, so do not look for the caravan outside Falkreath. Expect a sequence of distinct Elsweyr environments and Khajiiti stories.
- **[The Gray Cowl of Nocturnal — 10th Anniversary Edition](https://www.nexusmods.com/skyrimspecialedition/mods/141327):** A theft or pickpocket can trigger the call of the Cowl from **level 15** in Authoria. This is built around thief skills and a journey to the Alik'r Desert; the author recommends **level 30–35** for a comfortable run, especially for its tougher side bosses.
- **[Quest — Baba Yaga and the Labyrinth](https://www.nexusmods.com/skyrimspecialedition/mods/84492):** Ask the **Bee and Barb's innkeeper in Riften** about the walking hut, then find it east of Lake Geir. This is a compact, strange maze and witch story with exploration and puzzles. Bring a modest party into its cramped interiors.
- **[The Frozen Heart](https://www.nexusmods.com/skyrimspecialedition/mods/159911):** Buy the **Snow Elf Mirror (Labyrinthian Passages)** from **Belethor in Whiterun** and inspect its back. Learn at least one word each of **Slow Time** and **Fire Breath** before starting; both shouts are needed for progress.

##### Late-game challenges and long stories

- **[Gravewind](https://www.nexusmods.com/skyrimspecialedition/mods/129582):** Enter the abandoned homestead **northwest of Roadside Ruins in Falkreath**. Its horror-themed journey traps you once it begins, so prepare before entering; the author recommends roughly **level 25 or higher**, and Authoria's Requiem balance may demand more. Followers can struggle to navigate it.
- **[The Rot Below](https://www.nexusmods.com/skyrimspecialedition/mods/169298):** At **level 30**, find **Elroy's Journal 1** in a court wizard's room and read it to begin.

  - <details>
    <summary><strong>Spoilers: The Rot Below setting and enemies</strong></summary>

    This plague-ridden underground city culminates in demanding lich fights; level 30 opens the quest rather than guaranteeing readiness.

    </details>

- **[The Tools of Kagrenac](https://www.nexusmods.com/skyrimspecialedition/mods/14168):** Finish the College of Winterhold side story *Arniel's Endeavor* and the main quest *The Way of the Voice*. This is best treated as a later College adventure.

  - <details>
    <summary><strong>Spoilers: The Tools of Kagrenac reward and precise trigger</strong></summary>

    *Arniel's Endeavor* provides **Keening**. Keep it in your inventory; a courier's letter arrives a couple of days later and starts the hunt for the other legendary tools through large dungeons.

    </details>

##### Short stories by Nimwraith

These are mostly encounters and conversations rather than new provinces. Their placement here does **not** imply a common level gate; take them as you find them, and save the combat-heavy ones for a capable character.

| Quest | First lead |
| --- | --- |
| [Whispers of the Depths](https://www.nexusmods.com/skyrimspecialedition/mods/127087) | Meet retired Argonian sailor **Slays-Many-Beasts at Solitude's docks**. |
| [A Friend in Mead](https://www.nexusmods.com/skyrimspecialedition/mods/150999) | Speak to **Walks-Distant-Sands at Dead Man's Drink in Falkreath**. |
| [War's Folly](https://www.nexusmods.com/skyrimspecialedition/mods/165699) | **Join either Civil War faction**, then meet preacher **Sandor in Solitude**. |
| [Above All Else](https://www.nexusmods.com/skyrimspecialedition/mods/152267) | Find **Dar'balag**, a vampiric Khajiit, at the first location shown on the mod page's map image. |
| [Once We Were Here](https://www.nexusmods.com/skyrimspecialedition/mods/149820) | Speak to Snow Elf scholar **Sillas at the Altar of Xrib**. |
| [Before the End](https://www.nexusmods.com/skyrimspecialedition/mods/142238) | Speak with prisoner **Aradell in Solitude's dungeon**. |
| [Bark and Bite](https://www.nexusmods.com/skyrimspecialedition/mods/135087) | Investigate the **Wabbajack totem outside Shor's Stone** or find the talking tree. |
| [Depths of the Soul](https://www.nexusmods.com/skyrimspecialedition/mods/118261) | Meet travelling dungeon merchant **Pike at Silverdrift Lair**. |
| [The Hunt for the Spectre](https://www.nexusmods.com/skyrimspecialedition/mods/105044) | Look for **notices in smaller settlements**, then approach hunter **Ren** at his first location shown on the mod page. |
| [Calling the Watchmaker](https://www.nexusmods.com/skyrimspecialedition/mods/96711) | Seek scholar **Dreynos at his cabin**; the mod page shows its location. |
| [It Came from Akavir](https://www.nexusmods.com/skyrimspecialedition/mods/155449) | Speak to researcher **Amelia at her coastal camp** (shown in the mod page's gallery). |

<details>
<summary><strong>Spoilers: short-story themes and later encounters</strong></summary>

**Before the End** — Aradell's short story concerns his regrets before execution.

**Whispers of the Depths** — Return for later encounters to hear his sea-creature stories; after a farewell, several in-game hours may need to pass.

**A Friend in Mead** — The travelling Argonian courier trades stories with you at inns across Skyrim.

**War's Folly** — His sermons and conversation reflect on the war; he appears after the faction-joining step.

**Above All Else** — His encounters unfold into a darker story about the ancient dead and his ambitions.

**Once We Were Here** — Later meetings at historic places explore the Falmer's past.

**Bark and Bite** — This Witcher-inspired moral choice has two very different outcomes.

**Depths of the Soul** — Buy supplies and speak with him across later encounters to uncover his history; a few in-game hours can pass between meetings.

**The Hunt for the Spectre** — His search for a necromantic killer continues across several encounters and has multiple endings.

**Calling the Watchmaker** — This short, largely conversational story explores creation myths and Sithis without normal quest markers.

**It Came from Akavir** — The short story concerns a Kamal washed ashore and includes combat; the author recommends **level 15 or higher** before trying it.

</details>

For a broader inventory, visit the [Authoria Modlist Grimoire](https://modlistgrimoire.com/modlists/authoria-requiem-reforged) or browse the **Quests and Newlands** category in MO2.

#### The VICN sequence

The four VICN stories form Authoria's late-game arc. **DAc0da → Vigilant → Glenmoril → Unslaad** is a useful story order. These are large, sometimes unsettling adventures with long stretches away from ordinary Skyrim; reaching a start level does not mean your character is ready for every fight.

- **[DAc0da](https://www.nexusmods.com/skyrimspecialedition/mods/134405):** At **level 30 or higher**, the next location change triggers its opening. Follow the new lead in **Solitude**, including **Lokir** and the lighthouse.

  - <details>
    <summary><strong>Spoilers: DAc0da opening and destination</strong></summary>

    The opening includes the Numidium's appearance. The adventure takes you inside the construct and sets up the later VICN stories.

    </details>

- **[Vigilant](https://www.nexusmods.com/skyrimspecialedition/mods/11849):** At **level 30**, finish DAc0da. See the exact prerequisite below. On the next location change, **Altano and Orlando** appear at the **Windpeak Inn in Dawnstar**; speak with Altano to join the Vigil of Stendarr.

  - <details>
    <summary><strong>Spoilers: Vigilant prerequisite quest title</strong></summary>

    DAc0da's final quest is *Censored Fate*.

    </details>

- **[Glenmoril](https://www.nexusmods.com/skyrimspecialedition/mods/32998):** At **level 40 or higher**, the next location change triggers its opening quest. Its first objective is to speak to **Brandt in Lalanoah's House**.

  - <details>
    <summary><strong>Spoilers: Glenmoril story direction</strong></summary>

    The opening is quieter than the dark witch-hunter story that follows.

    </details>

- **[Unslaad](https://www.nexusmods.com/skyrimspecialedition/mods/11789):** When you **level up to 40 or higher**, the doll appears on a ledge **behind the High Hrothgar courtyard gates**. Activate it to enter the first act of Authoria's current VICN finale.

### Legacy of the Dragonborn

[Legacy of the Dragonborn](https://www.nexusmods.com/skyrimspecialedition/mods/11802) makes the **Dragonborn Gallery in Solitude**, beside the Blue Palace, a home for the relics and accomplishments you collect throughout a playthrough. It also adds museum stories, archaeology, an Explorer's Society you can build, and a safehouse with storage and crafting facilities. Think of the museum as a reason to explore Skyrim and Authoria's other questlines, rather than a quest you must finish before doing anything else.

#### Getting started and filling the museum

Visit the gallery and speak to its curator, **Auryen Morellus**. You can join by bringing him **at least three unique items** you have already found or by following his introductory hunt for three items. 

As you adventure, return with displayable finds and use the **automatic display sorter in the curator's office** if you do not want to place each item by hand. 

The safehouse also has a **replica workbench**: for items that support replicas, you can make a museum copy and keep the original for your own use. Museum shipment crates can send finds back from other locations once you set them up in the curator's office.

New displays open more museum events and quests over time. Archaeology gives you another reason to investigate ruins and dig sites, while the Explorer's Society develops into its own questline.

<details>
<summary><strong>Spoilers: Legacy later-story prerequisites</strong></summary>

Some of Legacy's later story depends on Skyrim's main quest and your character becoming Dragonborn. If you chose an [Alternate Perspective](#choosing-a-start-with-alternate-perspective) start that postpones the main quest, you can still begin collecting for the museum and start the main quest when you are ready.

</details>

#### What Authoria changes

- **Artifacts:** Authoria rebalances Legacy artifacts to fit Requiem. Their effects and strength may differ from descriptions written for an unmodified Legacy game; check the item you actually find.
- **Replicas:** Authoria heavily weakens them. Make them to **fill museum displays**, not as substitute combat gear. Keep the original artifact if you want to use its powers; a replica should not be expected to preserve them.

  - <details>
    <summary><strong>Spoilers: artifact retention during quests</strong></summary>

    This also applies when a quest later takes the original away.

    </details>

- **Display milestones:** Auryen's artifact rewards for reaching display counts are replaced with **gold**. Those artifacts still exist, but Authoria moves them onto particular enemies in the world. You do not need the list below to play normally; it is there if you want to track down a specific reward.

  - <details>
    <summary><strong>Former milestone artifacts: carriers and locations (spoilers)</strong></summary>

    Defeat the named carrier to loot the artifact. Some are in difficult areas or other questlines, so their presence here is not an early-game recommendation.

    | Artifact | Carried by | Where to find the carrier |
    | --- | --- | --- |
    | Cleaver of St. Felms | Soran Savayn | Shriekwind Bastion |
    | Gravedigger | High-King Borgas | Korvanjund Crypt (Korvanjund) |
    | Skullcrusher | Grakk the Crusher | Bilegulch Mine |
    | Scourge | Ghunzul | Cracked Tusk Keep |
    | Stendarr's Hammer | Paladin Janus (Soul-Shriven) | Old Temple of the Eight Divines (**Vigilant**) |
    | Staff of Hasedoki | Ildari Sarothril | Highpoint Tower, Solstheim |
    | Hopesfire | Madura Seran | Damphall Mine, Solstheim |
    | Trueflame | High-Cultist Drathyn | Solstheim, outside the Temple of Miraak's secret exit |

    </details>

### Modded and custom followers

Authoria includes several companions with their own dialogue and stories, plus dialogue expansions for Skyrim NPCs. The list rebalances followers and includes some follower quest add-ons. You can meet them as you explore; you do not need to recruit everyone at once. Bringing several followers can make fights much easier, so the optional **Weaker Followers** setting under [Customization and launch](#customization-and-launch) is worth considering for a large party.

- **[Kaidan](https://kaidanmod.com/all-in-one-installer/) — [Pre Thalmor](https://www.nexusmods.com/skyrimspecialedition/mods/166698):** You can first meet him at his old camp on the **northeast shore of Lake Ilinalta**. He is **not** waiting in the Abandoned Prison when you first start a new game. Rumors around Riverwood or Falkreath, or a clue in the Abandoned Prison, can point you there.

  - <details>
    <summary><strong>Spoilers: Kaidan recruitment progression and personal story</strong></summary>

    This early meeting is a prologue: after you speak with him and leave the area, he is eventually captured offscreen. Go to the **Abandoned Prison** to rescue and recruit him, then travel and talk with him to discover his personal story and Immersive Features content. Authoria also includes [Deadlands Expanded](https://www.nexusmods.com/skyrimspecialedition/mods/152623), which expands **Kaidan's Daedric quest** into a larger adventure involving the Deadlands. Follow his personal-story conversations and quest clues after recruiting him; it is part of his story, not a separate place to recruit him.

    </details>

- **[Inigo](https://www.nexusmods.com/skyrimspecialedition/mods/1461):** Find him in **Riften Jail**, in the first cell on the left near Sibbi Black-Briar. Read the letter on the entrance table for context, then speak to him. For his personal mini-quest, ask **“Tell me more about your past”** and keep adventuring together.

  - <details>
    <summary><strong>Spoilers: Inigo personal-quest progression</strong></summary>

    To open his personal mini-quest, ask **“Tell me more about your past”** until he has finished telling it and you know his brother's name; the quest can then begin while you adventure together. His currently released story stops after this introductory quest.

    </details>

- **[Auri — Song of the Green](https://www.nexusmods.com/skyrimspecialedition/mods/11278):** Find **Auri's Pod in Falkreath Hold**; it appears on the map.

  - <details>
    <summary><strong>Spoilers: Auri friendship progression and conversation timing</strong></summary>

    Talk with her about herself and Bosmeri culture as you travel to develop her friendship and complete her short personal quest. More conversations unlock afterward. If a conversation at the camp near Evergreen Grove seems unavailable, try returning between **8 p.m. and midnight**.

    </details>

- **[Ashe — Crystal Heart](https://www.martimiusmods.com/ashe):** Find the white-haired mercenary in **the Winking Skeever, Solitude**, and bring **200 septims** to recruit her. Get to know her through new dialogue topics and follow the journal prompts.

  - <details>
    <summary><strong>Spoilers: Ashe story progression and troubleshooting</strong></summary>

    Early scenes sometimes require sleeping in a bed or allowing about a day to pass. Her longer, choice-driven story begins once she invites you to her home; the [hints-first quest guide](https://www.martimiusmods.com/ashe/walkthrough) can help if you lose the thread.

    </details>

- **[Xelzaz](https://www.nexusmods.com/skyrimspecialedition/mods/62893):** Meet him at the **Southern Morrowind Gate**, east of Dayspring Canyon and northeast of Stendarr's Beacon. A note in Riften's Bee and Barb can mark his location. His first quest, **A Lawman's Ambition**, begins when you recruit him.

  - <details>
    <summary><strong>Spoilers: Xelzaz quest progression</strong></summary>

    His first quest asks you to bring him to the Hammerfell Gate. Your relationship and choices at the gate affect what happens next; further quests open through travel, conversation, and particular locations.

    </details>

- **[Lucien Flavius](https://www.nexusmods.com/skyrimspecialedition/mods/20035):** Find him in **Dead Man's Drink, Falkreath**. He begins as an inexperienced scholar and learns as you travel together. For his personal quests, build your friendship and ask whether there is somewhere he would like to see.

  - <details>
    <summary><strong>Spoilers: Lucien personal-quest progression</strong></summary>

    The first quest starts when he is ready; the second begins after the first is complete and you have recruited him again for several in-game days.

    </details>

- **[Remiel](https://www.nexusmods.com/skyrimspecialedition/mods/51874):** Find her in **the Silver-Blood Inn, Markarth**. Offer to help her enter **Nchuand-Zel** beneath the city.

  - <details>
    <summary><strong>Spoilers: Remiel introductory rewards and later progression</strong></summary>

    Her introductory quest follows the vanilla **Lost Expedition** quest; completing it unlocks her fuller follower dialogue and her Dwemer spider, Scrap. Keep exploring Dwemer ruins with her for further developments.

    </details>

- **[Val Serano](https://www.nexusmods.com/skyrimspecialedition/mods/103669):** Start his pirate story by reading the **message in a bottle on a crate outside White River Watch**, east of Whiterun.

  - <details>
    <summary><strong>Spoilers: Val Serano recruitment and personal-story progression</strong></summary>

    Val is not waiting there to be recruited: follow *Between the Daedra and the Deep Blue Sea* to find him, then continue *He Runs a Tight Shipwreck* to gain his services. Travel and talk with him to advance his longer personal story; friendship and romance are separate choices. If you have begun **Legacy of the Dragonborn**, Auryen can also point you toward this overdue relic hunter. The author's [story walkthrough](https://www.nexusmods.com/skyrimspecialedition/articles/5975) is available if you lose the trail.

    </details>

- **[Serana — Serana Dialogue Add-On](https://www.nexusmods.com/skyrimspecialedition/mods/32161):** Meet her through **Dawnguard's Awakening quest in Dimhollow Crypt**.

  - <details>
    <summary><strong>Spoilers: Serana recruitment progression and shared story prerequisites</strong></summary>

    Follow the early Dawnguard quests to return her home and later recruit her again. Her expanded conversations and optional relationship unfold as you travel and advance Dawnguard, so check in with her between major quest steps. The separate [Ashe & Serana banter patch](https://www.nexusmods.com/skyrimspecialedition/mods/167123) adds conversations that respond to both companions' stories; for the intended introduction, finish Ashe's **A Borrowed Soul** chapter and Serana's early Dawnguard recruitment before expecting their shared story beats.

    </details>

**Dialogue expansions and newly recruitable NPCs.** Authoria includes [anbeegod's Follower Dialogue Expansions](https://www.nexusmods.com/skyrimspecialedition/users/32344400?tab=user+files) for many existing followers and several NPCs who become recruitable after a quest.

<details>
<summary><strong>Spoilers: additional NPC recruitment requirements and quest choices</strong></summary>

For example, [Sapphire](https://www.nexusmods.com/skyrimspecialedition/mods/147428) in **Riften** can join after the Thieves Guild's *Loud and Clear*; [Faralda](https://www.nexusmods.com/skyrimspecialedition/mods/155510) at the **College of Winterhold** can join after *Containment* and her research-notes quest; and [Saadia](https://www.nexusmods.com/skyrimspecialedition/mods/170684) at Whiterun's **Bannered Mare** can join if you complete *In My Time of Need* in her favor. The list also expands existing followers such as **Eola**, **Lydia**, and **Aela**, alongside smaller dialogue expansions for other NPCs.

</details>

## 6. Appearance and adult content

### Presentation and adult content

#### Automatic outfits

Authoria includes [Skyrim Outfit Equipment System NG](https://www.nexusmods.com/skyrimspecialedition/mods/147011), which can change the player’s or selected NPCs’ outfits automatically. You can assign different clothing or armor for places such as cities, inns, and dungeons, or for conditions such as rain, snow, combat, swimming, and sleeping. **Authoria does not preconfigure any of these outfits or switching rules.** If you want to use the system, create your outfits and assign the conditions yourself in its MCM; otherwise, no setup is needed. Unlike the visual-only helmet behavior below, this system equips and unequips the outfit items.

#### Helmet Toggle 2

[Helmet Toggle 2](https://www.nexusmods.com/skyrimspecialedition/mods/100617) automatically changes how helmets and hoods appear on the player and NPCs. Authoria is set up to **hide headgear in safe places and during dialogue**, then show it again when adventuring. This is a visual change: you do not need to manage helmets manually for the effect to work. If you assign a hotkey in Helmet Toggle 2's MCM, you take manual control of the player's helmet and disable that automatic behavior **for your character**.

#### Nudity and OStim scenes

**Authoria includes nudity and optional adult scenes.** They are integrated into particular relationships and dialogue choices rather than interrupting ordinary exploration or combat. Scenes can arise through romance with a small number of followers or through specific conversations, so a player can engage with that content when it fits their character. The intent is for intimacy to feel like part of those stories, not a recurring pop-up or a requirement for progression.

Authoria uses [OStim Standalone](https://www.nexusmods.com/skyrimspecialedition/mods/98163) for these scenes. If your system struggles during one, open **Softbody's MCM** and disable its **special body** option to reduce the load.
