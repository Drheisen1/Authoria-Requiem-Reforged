# Authoria - Requiem Reforged — Tool Running Guide

This guide will walk you through how to run the tools for **Authoria - Requiem Reforged** in case you modified the list and need to regenerate their outputs.

This guide covers:

- BodySlide and Conversions
- Pandora
- Reqtificator
- NPC Plugin Chooser Tool
- Synthesis
- LOD Tools (ParallaxGen, Grass Cache, xLODGen, TexGen, DynDOLOD)

## Index

- [BodySlide and Conversions](#bodyslide-and-conversions)
  - [Running BodySlide](#running-bodyslide)
  - [Day's UBE Converter](#days-ube-converter)
- [Pandora](#pandora)
- [Reqtificator](#reqtificator)
- [NPC Plugin Chooser Tool](#npc-plugin-chooser-tool)
- [Synthesis](#synthesis)
- [LOD Tools](#lod-tools)
  - [When do I need to rerun these tools?](#when-do-i-need-to-rerun-these-tools-1)
  - [Disclaimer](#disclaimer)
  - [Part 1: Preparation](#part-1-preparation)
  - [Part 2: Running ParallaxGen](#part-2-running-parallaxgen)
  - [Part 3: Running Grass Cache](#part-3-running-grass-cache)
  - [Part 4: Running xLODGen](#part-4-running-xlodgen)
  - [Part 5: Running TexGen and DynDOLOD](#part-5-running-texgen-and-dyndolod)
  - [Part 6: Flat Map Framework](#part-6-flat-map-framework)

---

## BodySlide and Conversions

### When do I need to rerun these tools?

- Run BodySlide if you added armors that support **3BA**, **HIMBO**, or **UBE** to the list.
- You should build meshes in BodySlide **before** running the UBE Converter Tool.
- If the armor mod you added ships with **zeroed** prebuilt meshes, then you don't need to build the meshes again with BodySlide.

### Running BodySlide

> **Tip:** It is highly recommended to create a new output mod dedicated to your BodySlide builds.

1. Click the dropdown menu in MO2, select **Bodyslide**, and hit **Run**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Bodyslide1.png)

2. Click the **Settings** button at the bottom right of the tool, expand the **Advanced** section, point the **Output Path** to your dedicated output mod, then hit **OK**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Bodyslide2.png)

3. Search for the outfit you want to build — in this example, I am building **[ELLE] Lastriem**. Always ensure the two boxes at the bottom left are ticked.

   - If the armor is made for **HIMBO**, make sure to select the **"HIMBO Zero for OBody"** preset before building.

     ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/BodySlide3.png)

   - Click on **Batch Build**, select **only** the armors that are for the HIMBO male body, then press **Build**. If it errors, try again; if it still errors, double-check your output paths.

     ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Bodyslide4.png)

   - If the armor is made for **UBE/3BA**, make sure to select the **"- Zeroed Sliders -"** preset before building, then repeat the same steps.

     ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Bodyslide5.png)

   - Rinse and repeat. Once you are done, exit BodySlide, refresh MO2, and ensure your BodySlide output wins all conflicts.

   > **Note:** You don't need to rerun ParallaxGen, or any other tool, after building outfits in BodySlide.

4. **Bonus:** you can make your Khajiits more furry here!

   - Search for `DFM_` and select the body (**3BA** vs **HIMBO**) based on what you are playing.
   - Select the **"- Zeroed Sliders -"** or **"HIMBO Zero for OBody"** preset based on your choice.
   - Open the **Preview** window and play with the `FM_` sliders until you find what suits you.
     - **IMPORTANT:** any `FM_` slider you change must match between **Low Weights** and **High Weights**.
   - Once you are satisfied, press **Build**.
   - Exit BodySlide, refresh MO2, and make sure your output overwrites everything.

### Day's UBE Converter

- After running the converter, you don't need to rerun any other tool.
- I usually run this as the very last step before compilation.
- Only run this tool if you added an armor set that does **not** have UBE support. Otherwise, you should use a proper UBE conversion and build it in BodySlide.

1. Close MO2.
2. Navigate to your modlist installation directory, and go to `tools\CBBE to UBE`.
3. Open `defaults.json`.
   - Here you can change the profile if you made a new one. You can also change the output mod name if you don't want it to generate into the same one the list comes with, and change the output ESP name. You can leave all of these as they are — you don't need to change them.
   - **Note:** if you didn't make a new profile, you don't need to change anything here, even if you are playing on the main profile.
   - Once you are done, **save and exit**.
4. Run `Authoria-DaysTool.exe`.
5. Copy and paste the path to your MO2 instance — in my case `D:\Wabbajack\Authoria-dev`. This is the path that contains `ModOrganizer.exe`.
6. Press Enter and wait until it's done. Then open MO2, enable your output mod if you created a new one for this, as well as the resulting ESP. The ESP can be placed anywhere in the load order.

> **Note:** You don't need to rerun any tools after using the UBE Converter.

---

## Pandora

### When do I need to rerun this tool?

- Rerun Pandora after you add new animations or behavior files.
- The Nexus page of a mod usually says if it requires Pandora/Nemesis to be rerun.
- Disable the output that comes with the modlist if you are using a different one.

1. From the dropdown menu of MO2, pick and run **Pandora**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Pandora1.png)

2. Go to the settings tab by pressing the gear icon.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Pandora2.png)

3. Set the paths:

   - Set the **Skyrim Data Path** to `%ModlistPath%/Stock Game` and select `SkyrimSE.exe`.
   - Set the **Output Folder** to the mod output you want it to go in:
     - If you created a new output folder: `%ModlistPath%/mods/YourPandoraOutput`
     - If you are reusing the output that comes with the list: `%ModlistPath%/mods/Authoria - Pandora Output`
     - If you are reusing the output that comes with the list on the NSFW profile: `%ModlistPath%/mods/Authoria - Pandora Output - NSFW`

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Pandora4.png)

4. Go back to the main page by clicking on the butterfly, click the checkbox on the top left to select everything, then hit the **Run/Play** button.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Pandora3.png)

5. Wait for it to finish, then exit. Make sure the output mod is enabled, then refresh MO2.

---

## Reqtificator

### When do I need to rerun this tool?

- Rerun the Reqtificator after adding anything that modifies NPCs, containers, leveled lists, weapons, armors — even doors. As a good rule of thumb, **always rerun the Reqtificator after modifying the list**.
- Rerunning the Reqtificator is **NOT save safe**.
  - If you ignore this point, expect all guards to turn into vampires and other madness.
- You should rerun NPC Plugin Chooser and Synthesis if you rerun the Reqtificator. ParallaxGen, xLODGen, TexGen, and DynDOLOD do **not** need to be rerun, however.

1. On the right panel of MO2 (the plugins list), disable all the plugins that are **below** `Requiem for the Indifferent.esp`.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Reqtificator1.png)

2. Pick **Reqtificator** from the dropdown menu of MO2 and run it.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Reqtificator2.png)

3. Tick **ONLY** "Automatically merge actor visuals", then click **Patch**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Reqtificator3.png)

4. Wait for it to finish. It should show a success message once it's done — press **OK** and you are done.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Reqtificator4.png)

5. Re-enable the plugins below the Reqtificator until you reach `Authoria - Output - NPC Appearances.esp`. Keep it **and everything below it** disabled, then continue with the next section.

---

## NPC Plugin Chooser Tool

### When do I need to rerun this tool?

- Rerun this when you want to change the appearance of NPCs, or after rerunning the Reqtificator.

First, you need to understand how Authoria splits the handling of NPC appearances:

- **a) Named NPCs** — these are NPCs that have one specific replacer for them. For example: *Ysolda DF Edit NO SkyPatcher* — this NPC replacer overhauls just Ysolda. For this reason, the mod is enabled, and Ysolda does **not** have a selection in NPC Plugin Chooser 2. This is to avoid copying her assets into the output and to manage disk space.
  - The same applies to *True Sons of Skyrim Refined*, *Men of Skyrim Refined*, and some other NPC replacer packs. If something does not need a selection, it is handled through classic conflict resolution and winning conflicts in MO2's VFS.
- **b) Generic NPCs with multiple possible selections** — most female NPCs that can have multiple selections are disabled and have a selection set through NPC Plugin Chooser 2.
- **c) Face swaps** — NPC Plugin Chooser 2 has a feature to swap the appearance of an NPC with another NPC. This is used heavily in Authoria.

If you still don't understand, just follow these steps — they should walk you through adding an NPC replacer to the list, without any conflict resolution and with a simple tool rerun.

### 1) Adding a new replacer to the list

1. Download and install the replacer into MO2, then **disable it**. For this example, I will go with [this](https://www.nexusmods.com/skyrimspecialedition/mods/50649?tab=files) Sybille Stentor replacer.
2. Select **NPC Plugin Chooser 2** from the dropdown menu of MO2 and run it.
3. Go to the **Settings** tab and ensure the file paths are set correctly. You can also change the output path here — **DO NOT** change the plugin output name.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/NPCPluginChooser1.png)

4. Go to the **Mods** tab and press **Refresh All** — this might take some time.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/NPCPluginChooser2.png)

5. Go to the **NPCs** tab, and click on **Import Selection**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/NPCPluginChooser3.png)

6. Navigate to `%ModlistInstallation%\tools\NPC Plugin Chooser 2-1-6\NPC Merge Profile` and select `Authoria - MyMoreExpandedNpcChoices - Aaron.json`. Press **Yes** to confirm, then **OK**. (At the time of writing this, there are 429 selections.)
7. Search for the NPC you want to replace — in my case it's Sybille — and make your selection. (You can make multiple selections from here.)

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/NPCPluginChooser4.png)

8. Once you are done, go to the **Run** tab and press **Run Patch Generation**. It shouldn't patch more than the NPCs you selected.
9. Close the tool and refresh MO2. Enable your output if you made a new one.
10. Enable the plugin, but don't enable anything under it yet.

### 2) Rerunning the tool after rerunning the Reqtificator

- Follow the exact same steps as above — just don't change the selections after importing the choices JSON.

You can find more info about NPC Plugin Chooser 2 here: <https://github.com/Piranha91/NPC-Plugin-Chooser-2>

---

## Synthesis

### When do I need to rerun this tool?

- As a good rule of thumb, rerun Synthesis after **any** modification to the load order.
- Synthesis requires .NET runtimes.

1. From the dropdown menu of MO2, select and run **Synthesis**.
2. Wait for all the patchers to load. If one of them errors, click on it and switch it (on **both** rows) from **"Profile"** to **"Match"**. Wait for it to successfully load, then change it back to **"Profile"**.
3. Hit the big **Run** button.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Synthesis1.png)

4. Wait for it to finish. If it errors as soon as you run it, close Synthesis and run each patcher group separately.
5. Enable the Synthesis output plugins, then enable all the remaining plugins in MO2 — or continue with the guide below if you want to run LODs.

---

## LOD Tools

This section walks you through generating LODs again after modifying the list. It covers:

- ParallaxGen
- Grass Cache
- xLODGen
- TexGen
- DynDOLOD

### When do I need to rerun these tools?

- When adding mods that replace vanilla meshes and textures, ParallaxGen will most likely need to be rerun. To make sure, you can check the mod you added for conflicts. If it is losing conflicts with the ParallaxGen output, then you will need to rerun ParallaxGen.

  > **Note:** Rerunning ParallaxGen means that xLODGen and DynDOLOD will need to be rerun as well.

- When adding mods that edit the worldspace in Tamriel — you will have to check this in xEdit. In that case, you will need to rerun ParallaxGen, Grass Cache, xLODGen, and DynDOLOD.

### Disclaimer

Running tools for Authoria is very different from the usual process. This is because the list contains **Seasons of Skyrim**, so expect this entire process to take **at least two full days** to complete.

Almost 30–40% of the list's size comes from the outputs. They total around **160 GB**, so plan accordingly.

### Part 1: Preparation

1. You should already have a duplicated profile created, with empty mods for the outputs that correspond to each tool. If you do not have enough space to support having two outputs, feel free to delete the contents of the current outputs and replace them.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20005429.png)

2. Expand the **Flat Map Framework** separator, and disable everything inside it.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20005437.png)

3. Double-check the plugin panel on the right side of MO2. The last plugins in the load order should be the **Synthesis outputs**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20005810.png)

### Part 2: Running ParallaxGen

**Estimated time:** 10–15 minutes

1. From the dropdown menu on the right side of MO2, select **ParallaxGen**, then click **Run**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20010119.png)

2. Make sure the settings match the following screenshot:

   - The **Instance Location (2)** should match your Wabbajack installation directory.
   - For the **Output Directory (3)**, select the empty mod you created for the ParallaxGen output, then click **Start Patching**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20010334.png)

3. After some time, a popup window titled **"set mods"** will appear. Do not change anything, and press **Okay**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20010820.png)

4. A new window will pop up once ParallaxGen completes. Press **OK**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20011136.png)

5. Enable your **ParallaxGen output mod**, and refresh MO2. Two new plugins will appear on the right side of MO2 — one at the top and another at the bottom. Enable both and place them as low as possible in the load order.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20011441.png)
   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20011528.png)

### Part 3: Running Grass Cache

**Estimated time:** 9–15 hours

Grass Cache should rarely need to be rerun, unless you change or add a very large location overhaul, or a mod that changes the landscape drastically.

From the author of **No Grass in Objects**:

> When do I need to regenerate a cache?
>
> If you change grass mods, or change your grass settings excluding grass distance, fade range, DynDOLOD mode, or extended grass distance, you will need to completely regenerate your cache for the changes to take effect.
>
> If you add or remove mods that alter locations, add locations, or alter the landscape, you will need to regenerate a cache either for the changed cells or for the whole worldspace, depending on what is easier for you.

Grass Cache will need to be run **5 times** in total — once for each corresponding season.

1. To get started, follow [this guide](https://www.youtube.com/watch?v=jH7co25_JIo) starting from the **4:33** mark up until **9:50**. In Authoria, the `Grass Bounds.esp` plugin is called `Deez Nuts.esp`.

   > **Warning:** Do not change any **Grass Control INI** settings other than `only-pregenerate-world-spaces` if you do not know what they mean.

2. Once `GrassControl.ini` is sorted, disable the **Grass Cache Helper NG** mod in MO2, then enable the **No Grass In Objects** mod.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20013250.png)

3. Disable the following mods in MO2 to prevent crashing while generating Grass Cache:

   - Auto Parallax
   - Discord Rich Presence
   - TrueHUD → only disabling the plugin on the right panel is enough
   - Skyrim Souls → take note of the plugin load order

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20013539.png)
   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20013609.png)
   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20013641.png)
   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20014008.png)

4. Navigate to the **Data** tab of MO2, and search for `po3_seasonsofskyrim.ini`. Right-click on it and choose **Reveal in Explorer**.

   > **IMPORTANT:** If you added a new worldspace and it has Seasons of Skyrim support, then you should delete `po3_seasonsofskyrim.ini` and let the game generate a new one by launching the game and getting to the main screen.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20014207.png)

5. Open the Seasons of Skyrim INI, and select the season you will generate Grass Cache for. Start with **0 (disabled)**, then save and close the file.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20014319.png)

6. Go back to MO2, click the jigsaw icon on the top right, and press **Precache Grass** to start the process. You will get a notification window — press **Yes**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20014715.png)

7. It will take **2–3 hours** for the process to complete. Once it is done, you will get a notification window saying that Grass Cache has generated successfully. Press **OK**, then navigate to the overwrite directory in MO2. There should be a folder called **"grass"** in your overwrite — move it to **"Authoria - Grass Cache - Default"**.

8. To generate the seasonal Grass Cache, go back to `po3_seasonsofskyrim.ini`, change the **Season Type** to **1 (winter)**, save and exit, then do the exact same process as the two steps above.

9. Once it is done, and after moving the winter Grass Cache to the **"Authoria - Grass Cache - winter"** mod, manually download the [Seasonal Grass Cache File Renamer (like Seasons your Grass)](https://www.nexusmods.com/skyrimspecialedition/mods/142343?tab=files) and place it anywhere **outside** of the Wabbajack installation.

10. Extract the Grass Renamer archive into your winter Grass Cache folder.

    ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20015518.png)

11. Run the Windows batch file, and enter the number that corresponds to the season you just generated (**1 for winter**).

    ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20015715.png)

12. It will take some time to rename every file. Once it is done, press **Enter** to close out of the batch file. The Grass Cache should now have a suffix corresponding to the season you just generated.

    ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20015937.png)

13. Repeat the same process for **Summer, Spring, and Autumn**.

14. Once you are done, re-enable and re-sort all the mods that you previously disabled, then disable **No Grass in Objects** and enable **Grass Cache Helper NG**.

### Part 4: Running xLODGen

**Estimated time:** 4 hours

xLODGen has to be run **two times** — once for the default worldspaces with no seasons, and another time for worldspaces with seasons.

1. First, search for the **"xLODGen Resource - SSE Terrain Tamriel"** mod and enable it.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20020450.png)

2. Then click the gear icon in MO2, navigate to **xLODGen**, and change the output directory of xLODGen there. Click **Apply**, then **OK**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20020646.png)

3. For the first run, we will generate **non-seasonal xLODGen**. Pick **xLODGen** from the dropdown menu of MO2 and run it.

4. Once xLODGen loads up, tick only **"Terrain LOD"**, then configure the settings for every LOD level exactly like the pictures below.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021104.png)
   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021109.png)
   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021115.png)
   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021123.png)

5. Right-click on the checkbox window and press **Select All**, then from the **Seasons** dropdown menu, select only **"Default"**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021516.png)

6. Finally, click **Generate**. Once it is done, it will say **"LOD Generation Done."** Close out of xLODGen.

7. To know which worldspaces are seasonal, open `po3_seasonsofskyrim.ini` and find the **"Valid Worldspaces"** line.

   > **IMPORTANT:** If you added a new worldspace and it has Seasons of Skyrim support, then you should delete `po3_seasonsofskyrim.ini` and let the game generate a new one by launching the game and getting to the main screen.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021844.png)

   Copy these into a blank text document. Keep in mind that not every worldspace here will be in xLODGen, but you have to select every worldspace that appears **both** in that list and in xLODGen. The following is the list for Authoria:

   ```text
   Tamriel
   MarkarthWorld|
   SkuldafnWorld|
   DeepwoodRedoubtWorld|
   JaphetsFollyWorld|
   DLC01FalmerValley|
   DLC1HunterHQWorld|
   DLC2SolstheimWorld|
   PalePass|
   zCOBruiantWorld
   zAoMWitchWorld|
   zAoMVigilantWorld|
   WyrmstoothWorld|
   AXGodsforsakenRockWorld|
   AXOffshoreIslandWorld|
   BSHeartland|
   ```

8. Run xLODGen again, and select the worldspaces that are in `seasonsofskyrim.ini`. Then, from the **Seasons** dropdown, select everything **except Default**, and press **Generate**. (LOD level settings are the same.)

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20022406.png)

9. Once it is done, it will say **"LOD Generation Done."** Close out of xLODGen. Don't forget to **disable** "xLODGen Resource - SSE Terrain Tamriel" and **enable** your output.

### Part 5: Running TexGen and DynDOLOD

**Estimated time:** 6 hours — highly depends on your grass density percentage.

> **IMPORTANT:** DynDOLOD is extremely sensitive in seasonal load orders. The following are steps to ensure DynDOLOD generation completes without errors near finishing:
>
> a) If you added mods, make sure none of them have deleted references, missing scripts, or references in the wrong worldspaces.
>
> b) Navigate to your Wabbajack installation directory and open the `Tools` folder, then the `dyndolod` folder. Right-click on it and pick **Properties**, click on **Compatibility**, and copy the following settings. Then make sure you run MO2 **as administrator**.
>
> ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/dyndolodproperties.png)
>
> c) Before running TexGen or DynDOLOD, turn off **Real-Time Protection** inside Virus & threat protection in the Windows 11 settings.
>
> d) Disable the mod called **"Authoria - Seasons - Snowdrift Fix"** and keep it disabled throughout Part 5.
>
> e) Most importantly, make sure the output of both TexGen and DynDOLOD goes to the **root of the drive** you are using, preferably avoiding the C drive — for example: `D:/Dyndolod Output`.

1. If you reinstalled the Lux patch hub, remove the **Bittercup Tweaks and Enhancements Lux patch** if it got installed.

2. If you are using **Witchy Wilderness**: navigate to your Wabbajack directory, open the `Tools` folder, then `dyndolod > Edit Scripts > Dyndolod > DynDOLOD_SSE.ini`. Apply the following edits to the DynDOLOD INI, then save and exit.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/dyndolodini.png)

3. Back in MO2, pick **TexGen** from the dropdown menu of MO2 and run it. Apply the following settings, and generate.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/texgensettings.png)

4. Once it's done, select **"Exit TexGen"**, navigate to your output folder, and copy all the contents inside of it to your TexGen output mod in MO2. Then refresh MO2.

5. Pick **DynDOLOD** from the dropdown menu of MO2 and run it. Press **Advanced**:

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/DyndolodStart.png)

6. Right-click on the top-left menu and press **"Select All"**, then apply the following settings. You can play with the grass density percentage if you want, but beware that it will increase generation time and output size by a lot. Once you are done, press **Generate**.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/DyndolodSettings.png)

7. Once it's done, navigate to your output folder, and copy all the contents inside of it to your DynDOLOD output mod in MO2. Then refresh MO2.

### Part 6: Flat Map Framework

1. Enable the **"Authoria - Seasons - Snowdrift Fix"** mod.

2. Expand the last separator on the left panel of MO2, enable every mod in there, then sort them like the picture.

   ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/loadorder.png)

And that's it — you can enjoy sexy seasonal LODs now.
