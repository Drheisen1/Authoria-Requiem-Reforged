# Authoria — Requiem Reforged — Post-installation & Official Options

Complete these steps after [installation](InstallationGuide.md) and before starting your character. This guide collects first-launch preparation and the optional features included with Authoria.

## Contents

- [Open Mod Organizer 2](#open-mod-organizer-2)
- [Choose your included options](#choose-your-included-options)
- [Choose your difficulty](#choose-your-difficulty)
- [Performance tuning](#performance-tuning-optional)
- [Controller support](#controller-support-optional)
- [Ultrawide support](#ultrawide-support-optional)
- [Launch the game](#launch-the-game)
- [Continue with character setup](#continue-with-character-setup)

## Open Mod Organizer 2

- Navigate to your **Authoria - Requiem Reforged installation folder**.
- Launch **ModOrganizer.exe** (MO2) from that directory.

## Choose your included options

In **Mod Organizer 2 (MO2)**, look for the **Customization** separator in the left panel. The groups below it contain the available customization options.

**Choose your customizations before starting a new character.** Changes outside the Difficulty separator require a new save unless an option has a specifically documented exception. A new game remains preferred for Authoria - Slower Leveling. Requiem Lite can be enabled at any time; follow the difficulty instructions below when switching an existing character to Easy Mode.

> The screenshot is slightly outdated, but the structure for optional mods is the same.

<img width="1041" height="423" alt="Customization groups in Mod Organizer 2" src="https://github.com/user-attachments/assets/8c8adb60-2a4a-4f76-9843-c96be1680dd1" />

<details>
<summary><strong>Customization options</strong></summary>

| Group | What to do |
| --- | --- |
| RaceMenu Presets | Add the character presets you want to use here. |
| ENB Presets | Choose your preferred ENB preset. When switching away from Cabbage ENB, disable Cabbage ENB and clear MO2's Overwrite folder. |
| ReShade | Enable everything in this group if you want to use ReShade. |
| Weaker Followers | Reduce follower damage if you plan to use multiple modded followers. See the recommendations below. |
| Authoria - Slower Leveling | Enable for slower early leveling. See [Leveling and perks](GameplayGuide.md#leveling-and-perks) for details. |
| Crafting pulls resources from containers | Enable for shared crafting storage. Already preconfigured. **Warning: this can be heavy on performance.** |

Recommended follower damage reductions:

| Number of followers | Reduction |
| --- | --- |
| 1–2 | 25% |
| 3 | 50% |
| More than 3 | 75% |

</details>

## Choose your difficulty

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

## Performance tuning (optional)

* We encourage users to enable the optional **Texture Downscaler** mod unless you have at least 16 GB of VRAM. If you have 10 GB of VRAM or less, we consider it a functional *necessity*.
* **Texture Downscaler** can be reinstalled for multiple performance presets.

## Controller support (optional)

Controller support is fully integrated into Authoria — but all related mods are **disabled by default** so players can opt in manually. To enable controller support:

1. Scroll to the **`Controller Setup`** separator in MO2.
2. **Enable all the disabled mods in the separator**:

  ![image](https://github.com/user-attachments/assets/c88e097c-b34c-415c-a39e-d00d28f15776)  

- and that's it.

## Ultrawide support (optional)

Authoria includes support for **21:9** and **32:9**, with a separate MO2 mod for each aspect ratio. The related mods are disabled by default.

1. Find the separator for your monitor's aspect ratio in MO2.
2. Enable all the disabled mod for your aspect ratio.

Use the group matching your display. The 21:9 and 32:9 options are separate mods.

## Launch the game

- Ensure **`Authoria - Requiem Reforged`** is selected as the modlist in the **top-right executable dropdown** in MO2.
- Click **Run** to start the game.

>  **Important Warning: Never Click "Unlock" in MO2**
>
> Do **not** click **"Unlock"** in Mod Organizer 2 while Authoria - Requiem Reforged is launching or running.
>
> **The game may take several minutes to launch depending on your system specs.**  
> That’s normal. Be patient. If it’s taking forever, your PC might just be a potato in disguise. Don’t take it out on MO2.
>
> MO2 will automatically unlock when the game has fully closed.  
> Manually clicking "Unlock" can break the virtual file system, sever mod links, or corrupt your entire install.

## Continue with character setup

Continue with [Creating your character](GameplayGuide.md#creating-your-character). Follow the initialization prompts, spend your starting perks, and choose your start.

Then review [First-session settings and controls](GameplayGuide.md#first-session-settings-and-controls) and [Saving and loading](GameplayGuide.md#saving-and-loading). These sections include the existing MCM adjustments, keybinds, OBody instructions, and SSSO3 setup.

The [Performance Profile Guide](PerformanceProfileGuide.md) is currently a placeholder for Authoria 2.9.10; it does not yet contain configuration instructions.
