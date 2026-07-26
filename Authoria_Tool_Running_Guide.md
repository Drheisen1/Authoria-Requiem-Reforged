# Authoria - Requiem Reforged — Tool Running Guide

This guide will walk you through how to run the tools for **Authoria - Requiem Reforged** in case you modified the list and need to regenerate their outputs.

This guide covers:
- Bodyslide and Conversions
- Pandora
- Reqtificator
- Synthesis
- NPC Plugin Chooser Tool
- LOD Tools (ParallaxGen, Grass Cache, xLODGen, TexGen, DynDOLOD)

## Index
- [Bodyslide and Conversions](#bodyslide-and-conversions)
- [Pandora](#pandora)
- [Reqtificator](#reqtificator)
- [Synthesis](#synthesis)
- [NPC Plugin Chooser Tool](#npc-plugin-chooser-tool)
- [LOD Tools](#lod-tools)
  - [When do I need to rerun these tools?](#when-do-i-need-to-rerun-these-tools)
  - [Disclaimer](#disclaimer)
  - [Part 1) Preparation](#part-1-preparation)
  - [Part 2) Running ParallaxGen](#part-2-running-parallaxgen)
  - [Part 3) Running Grass Cache](#part-3---running-grass-cache)
  - [Part 4) Running xLODGen](#part-4---running-xlodgen)
  - [Part 5) Running TexGen and DynDOLOD](#part-5---running-texgen-and-dyndolod)
  - [Part 6) Flat Map Framework](#part-6---flat-map-framework)

## Bodyslide and Conversions

### When do I need to rerun these tools?
  - Run Bodyslide if you added Armors that support 3BA, HIMBO, or UBE to the list
  - You should build meshes in bodyslide **before** running the UBE Converter Tool
  - If the armor mod you added ships with **zeroed** prebuilt meshes, then you dont need to build the meshes again with bodyslide.

### Running Bodyslide:
  > It is highly recommended to create a new output dedicated to your bodyslides.
  1) Click the drop down menu in mo2, select Bodyslide, and hit run.
      ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Bodyslide1.png)

  2) Click the Settings Button at the bottom right of the tool, expand the "Advanced Section", and point the Output Patch to your dedicated output mod, then hit Ok:
      ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Bodyslide2.png)

  3) Search for the outfit you want to build, in this example, i am building [ELLE] Lastriem, always ensure the two boxes at the bottom left are ticked.
    - If the armor is made for Himbo, make sure to select the "HIMBO Zero for OBody" Preset before bulding.
    ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/BodySlide3.png)

    - Click on Batch Build, and select **only** the armors that are for the HIMBO male body, then Press "Build" , if it errors, try again, if it still errors, double check your output paths.
    ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Bodyslide4.png)

    - If the armor is made for UBE/3BA, make sure to select the "- Zeroed Sliders -" Preset before bulding, then repeat the same steps.
    ![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Bodyslide5.png)

    - Rinse and Repeat, once you are done, exit Bodyslide, Refresh mo2, and ensure your bodyslide output wins all conflicts.

    - You dont need to rerun Parallaxgen, or any other tools after building outfits in bodyslide.
 
  4) Bonus, you can make your khajiits more fury here!
    - Search for DFM_ and select the body (3BA vs HIMBO) based on what you are playing.
    - Select the - Zeroed Sliders - or HIMBO Zero for OBody based on your choice 
    - Open the Preview window and play with the "FM_" Sliders until you find what suits you 
      - **IMPORTANT** any FM_ Slider you change must match for Low Weights and High Weights
    - Once you are satisifed, Press "Build"
    - Exit Bodyslide, Refresh MO2, and make sure you output overwrites everything.

  
### Day's UBE Converter:
  - After running the converter you dont need to rerun any other tool
  - I Usually run this as the very last step before compilation
  - Only run this tool if you added an armorset that doe not have UBE support, otherwise, you should use a proper UBE conversion and build it in bodyslide.

  1) Close mo2
  2) Navigate to you Modlist Installation Directory, and go to tools\CBBE to UBE
  3) Open the defaults.json
    - Here you can change the profile if you made a new one, and you can also change the output mod name if you don't want it to generate into the same one the list comes in, and also change the output esp name, you can leave all these as they are, you dont need to change them.
    - Note: if you didn't make a new profile, you dont need to change anything here, even if you are playing on the main profile.
    - Once you are done, **Save and Exit**
  4) Run "Authoria-DaysTool.exe"
  5) Copy and Paste the path to your mo2 instance, in my case "D:\Wabbajack\Authoria-dev" this is the path that contains ModOrganizer.exe
  6) Press enter, wait till it's done, then Open mo2, enable your mod output if you created a new one for this, as well as the resulting ESP, the esp can be placed anywhere in the load order
  - You don't need to rerun any tools after using the UBE Converter.

## Pandora

### When do I need to rerun these tools?
  - Rerun pandora after you add new animations or behavior files
  - The nexus page of a mod usually says if it requires pandora/nemesis to be rerun



## Reqtificator

*(To be written.)*

## Synthesis

*(To be written.)*

## NPC Plugin Chooser Tool

*(To be written.)*

## LOD Tools

This section walks you through generating LODs again after modifying the list. It covers:
- ParallaxGen
- Grass Cache
- xLODGen
- TexGen
- DynDOLOD

### When do I need to rerun these tools?

- When adding mods that replace vanilla meshes and textures, ParallaxGen will most likely need to be rerun. To make sure, you can check the mod you added for conflicts. If it is losing conflicts with the ParallaxGen output, then you will need to rerun ParallaxGen.

**Note:** Rerunning ParallaxGen means that xLODGen and DynDOLOD will need to be rerun as well.

- When adding mods that edit the worldspace in Tamriel, you will have to check this in xEdit. In that case, you will need to rerun ParallaxGen, Grass Cache, xLODGen, and DynDOLOD.

### Disclaimer

Running tools for Authoria is very different from the usual process. This is because the list contains **Seasons of Skyrim**, so expect this entire process to take at least two full days to complete.

Almost 30–40% of the list's size comes from the outputs. They total around **160 GB**, so plan accordingly.

### Part 1) Preparation

- You should already have a duplicated profile created, with empty mods for the outputs that correspond to each tool. If you do not have enough space to support having two outputs, feel free to delete the contents of the current outputs and replace them.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20005429.png)

- Expand the **Flat Map Framework Separator**, and disable everything inside it.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20005437.png)

- Double-check the plugin panel on the right side of MO2. The last plugins in the load order should be the **Synthesis Outputs**.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20005810.png)

### Part 2) Running ParallaxGen

**Estimated time:** 10–15 minutes

- From the dropdown menu on the right side of MO2, select **ParallaxGen**, then click **Run**.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20010119.png)

- Make sure the settings match the following screenshot.
- The **Instance Location (2)** should match your Wabbajack installation directory.
- For the **Output directory (3)**, select the empty mod you created for the ParallaxGen output, then click **Start Patching**.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20010334.png)

- After some time, a popup window titled **"set mods"** will appear. Do not change anything, and press **Okay**.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20010820.png)

- A new window will pop up once ParallaxGen completes. Press **OK**.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20011136.png)

- Enable your **PG Output Mod**, and refresh MO2. Two new plugins will appear on the right side of MO2, one at the top and another at the bottom. Enable both and place them as low as possible in the load order.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20011441.png)
![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20011528.png)

### Part 3 - Running Grass Cache

**Estimated time:** 9–15 hours

- Grass cache should rarely need to be rerun unless you change or add a very large location overhaul, or a mod that changes the landscape drastically.

From the author of **No Grass in Objects**:

> When do I need to regenerate a cache?
>
> If you change grass mods, or change your grass settings excluding grass distance, fade range, DynDOLOD mode, or extended grass distance, you will need to completely regenerate your cache for the changes to take effect.
>
> If you add or remove mods that alter locations, add locations, or alter the landscape, you will need to regenerate a cache either for the changed cells or for the whole worldspace, depending on what is easier for you.

- Grass cache will need to be run **5 times** in total, once for each corresponding season.

- To get started, follow [this guide](https://www.youtube.com/watch?v=jH7co25_JIo) starting from the **4:33** mark up until **9:50**. In Authoria, the **"Grass Bounds.esp"** plugin is called **"Deez Nuts.esp"**.

- Do not change any **Grass Control INI** settings other than `only-pregenerate-world-spaces` if you do not know what they mean.

- Once `GrassControl.ini` is sorted, disable the **Grass Cache Helper NG** mod in MO2, then enable the **No Grass In Objects** mod.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20013250.png)

- Disable the following mods in MO2 to prevent crashing while generating Grass Cache:
  - Auto Parallax
  - Discord Rich Presence
  - TrueHUD → only disabling the plugin on the right panel is enough
  - Skyrim Souls → take note of the plugin load order

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20013539.png)
![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20013609.png)
![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20013641.png)
![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20014008.png)

- Navigate to the **Data** tab of MO2, and search for `po3_seasonsofskyrim.ini`. Right-click on it and choose **Reveal in Explorer**.

**IMPORTANT:** If you added a new worldspace and it has Seasons of Skyrim support, then you should delete `po3_seasonsofskyrim.ini` and let the game generate a new one by launching the game and getting to the main screen.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20014207.png)

- Open the Seasons of Skyrim INI, and select the season you will generate Grass Cache for. Start with **0 (disabled)**, then save and close the file.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20014319.png)

- Go back to MO2, click the jigsaw icon on the top right, and press **Precache Grass** to start the process. You will get a notification window; press **Yes**.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20014715.png)

- It will take **2–3 hours** for the process to complete. Once it is done, you will get a notification window saying that Grass Cache has generated successfully. Press **OK**, then navigate to the overwrite directory in MO2. There should be a folder called **"grass"** in your overwrite; move it to **"Authoria - Grass Cache - Default"**.

- To generate the seasonal Grass Cache, go back to `po3_seasonsofskyrim.ini`, change the **Season Type** to **1 (winter)**, save and exit, then do the exact same process as the two steps above.

- Once it is done, and after moving the winter Grass Cache to the **"Authoria - Grass Cache - winter"** mod, manually download the [Seasonal Grass Cache File Renamer (like Seasons your Grass)](https://www.nexusmods.com/skyrimspecialedition/mods/142343?tab=files) and place it anywhere outside of the Wabbajack installation.

- Extract the Grass Renamer archive into your winter Grass Cache folder.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20015518.png)

- Run the Windows batch file, and enter the number that corresponds to the season you just generated (**1 for winter**).

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20015715.png)

- It will take some time to rename every file. Once it is done, press **Enter** to close out of the batch file. The Grass Cache should now have a suffix corresponding to the season you just generated.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20015937.png)

- Repeat the same process for **Summer, Spring, and Autumn**.

- Once you are done, re-enable and re-sort all the mods that you previously disabled, then disable **No Grass in Objects** and enable **Grass Cache Helper NG**.

### Part 4 - Running xLODGen

**Estimated time:** 4 hours

- xLODGen has to be run **two times**, once for the default worldspaces with no seasons, and another time for worldspaces with seasons.

- First, search for the **"xLODGen Resource - SSE Terrain Tamriel"** mod and enable it.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20020450.png)

- Then click the gear icon in MO2, navigate to **xLODGen**, and change the output directory of xLODGen there. Click **Apply**, then **OK**.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20020646.png)

- For the first run, we will generate **non-seasonal xLODGen**. Pick **xLODGen** from the dropdown menu of MO2 and run it.

- Once xLODGen loads up, tick only **"Terrain LOD"**, then configure the settings for every LOD level exactly like the pictures below.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021104.png)
![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021109.png)
![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021115.png)
![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021123.png)

- Right-click on the checkbox window and press **Select All**, then from the **Seasons** dropdown menu, select only **"Default"**.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021516.png)

- Finally, click **Generate**. Once it is done, it will say **"Lod Generation Done."** Close out of xLODGen.

- To know what worldspaces are seasonal, open `po3_seasonsofskyrim.ini` and find the **"Valid Worldspaces"** line.

**IMPORTANT:** If you added a new worldspace and it has Seasons of Skyrim support, then you should delete `po3_seasonsofskyrim.ini` and let the game generate a new one by launching the game and getting to the main screen.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20021844.png)

Copy these into a blank text document. Keep in mind that not every worldspace here will be in xLODGen, but you have to select every worldspace that appears both in that list and in xLODGen. The following is the list for Authoria:

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

- Run xLODGen again, and select the worldspaces that are in `seasonsofskyrim.ini`, then from the **Seasons** dropdown select everything **except Default**, and press **Generate**.  
  (LOD level settings are the same.)

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/Screenshot%202026-04-04%20022406.png)

- Once it is done, it will say **"Lod Generation Done."** Close out of xLODGen, Don't forget to Disable **"xLODGen Resource - SSE Terrain Tamriel"** , and enable your Output.

### Part 5 - Running TexGen and DynDOLOD

**IMPORTANT:** Dyndolod is extremely sensitive in seasons load orders, the following are steps to ensure dyndolod generation completes without errors near finishing:

a) If you added mods, make sure none of them have deleted references, missing scripts, or references in the wrong worldspaces.

b) Navigate to your wabbajack installation directory, and open the Tools folder, open the dyndolod folder, right click on it and pick properties, click on Compatability, and copy the following settings, then make sure you run mo2 as administrator

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/dyndolodproperties.png)

c) before running texgen or dyndolod, turn off Real-Time protection inside Virus & threat protection in the Windows 11 settings

d) Disable the mod Called **"Authoria - Seasons - Snowdrift Fix"** and keep it disabled through part 5

e) most importantly, make sure the output of both texgen and dyndolod go to the root of the drive you are using, preferably avoiding the C drive, for example : D:/Dyndolod Output.

**Estimated time:** 6 hours, highly depends on your grass density percentage.

- if you reinstalled the lux patch hub, Remove the Bittercup tweaks and Enhancements Lux patch if it got installed.
- If you are using witchy wilderness, Navigate to your wabbajack directory, open the tools folder, then dyndolod > Edit Scripts > Dyndolod > DynDOLOD_SSE.ini
- Apply the following edits to the Dyndolod ini, then save and exit.
  
![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/dyndolodini.png)

- back in mo2, Pick **Textgen** from the dropdown menu of MO2 and run it, apply the following settings, and generate.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/texgensettings.png)

- Once it's done, select "Exit Texgen", navigate to your output folder, and copy all the contents inside of it to your Texgen Output mod in mo2, then refresh mo2.

- Pick **Dyndolod** from the dropdown menu of MO2 and run it, Press Advanced:

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/DyndolodStart.png)

- right click on the left top menu and press "Select all", then apply the following settings, you can play with grass density percentage if you want but beware that it will increase generation time and output size by a lot, once you are done press generate.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/DyndolodSettings.png)

- Once it's done, navigate to your output folder, and copy all the contents inside of it to your Dyndolod Output mod in mo2, then refresh mo2.


### Part 6 - Flat Map Framework

- Enable the "Authoria - Seasons - Snowdrift Fix" Mod

- Expand the last seperator on the left panel of mo2, and enable everymod in there, then sort them like the picture.

![Screenshot](https://raw.githubusercontent.com/Drheisen1/Authoria-Requiem-Reforged/main/Resources/Tool%20Guide/loadorder.png)

- and that's it, you can enjoy sexy seasonal lods now.
