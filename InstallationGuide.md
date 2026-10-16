# Authoria — Requiem Reforged — Installation Guide

This guide covers requirements, prerequisites, preparation, downloading, and installation. After Wabbajack finishes, continue with [Post-installation & Official Options](PostInstallationGuide.md).

Authoria includes nudity and optional adult scenes. Read [Presentation and adult content](GameplayGuide.md#presentation-and-adult-content) before installing.

## Contents

- [Requirements](#requirements)
- [Installation steps](#installation-steps)
- [After installation](#after-installation)

## Requirements

### My System Specs (Reference Build)

| Component  | Specs                       |
|------------|-----------------------------|
| CPU        | AMD Ryzen 7 9800X3D         |
| GPU        | ASUS ROG ASTRAL 5070ti      |
| RAM        | 32GB DDR5-4800              |
| Storage    | M.2 2TB SSD (PCIe Gen 4x4)  |

###  Recommended System Specs

 **System Requirements for Authoria - Requiem Reforged**

| Component     | 🟡 Minimum (Playable; see Texture Downscaler guidance)                 | 🟢 Recommended (Ideal)                               |
|---------------|---------------------------------------------------------|------------------------------------------------------|
| **CPU**       | Intel Core i5 (11th Gen) / AMD Ryzen 5 (5000 series)    | Intel Core i7 (13th Gen) / AMD Ryzen 7 (7000 series) |
| **RAM**       | 32GB DDR4                                               | 32GB DDR5                                            |
| **Pagefile**  | 40GB                                                    | 40GB                                                 |
| **Storage**   | Internal SATA SSD                                       | NVMe M.2 SSD                                         |
| **GPU**       | NVIDIA RTX 3000 series / AMD RX 6000 series             | NVIDIA RTX 4000 series / AMD RX 7000 XT              |
| **VRAM**      | <16GB                                                   | 16GB                                                 |
| **Disk Space**| ~273GB Download / ~551GB Installed / ~824GB Total       | ~273GB Download / ~551GB Installed / ~824GB Total    |

Before continuing, make sure these system components are installed — they are required for Wabbajack and Skyrim to function correctly:

- [Microsoft Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe)
- [.NET SDK](https://dotnet.microsoft.com/download) - both .NET 8 and .NET 9 are required
- [.NET Framework](https://dotnet.microsoft.com/download/dotnet-framework)

> If you're unsure whether these are already installed, it's safe to install them again — they will update or repair as needed.

Before you begin, make sure you meet the following **hard requirements**:

- **You must own and install Skyrim Anniversary Edition (AE).**  
  The Standard Special Edition (SSE) will not work — this modlist requires the full AE version with all Creation Club content. You must launch the game and download the CC content prior to Wabbajack install

- **Installation must be on an Internal SSD.**  
  Installing to an HDD or any external storage device will result in long load times, freezing, and crashes.

- Your Skyrim installation **must be set to English**  
 [How to change Skyrim’s language](https://help.bethesda.net/app/answers/detail/a_id/651/~/how-do-i-change-the-language-in-skyrim%3F)

---

### Installation Steps

1. **Download Wabbajack**  
   Get the latest version of Wabbajack from [https://www.wabbajack.org/](https://www.wabbajack.org/)

2. **Prepare a Clean Skyrim AE Installation**  
   *All of the steps below are shown in this video:*  
   [GamerPoets – Clean Skyrim Setup Guide](https://www.youtube.com/watch?v=B1QyAj4c564&ab_channel=GamerPoets)

   - Uninstall any existing Skyrim installation via Steam.
   - Navigate to `Documents\My Games\Skyrim Special Edition` and delete all contents (back up if desired).
   - Reinstall **Skyrim Anniversary Edition** via Steam.
   - **Launch Skyrim AE once through Steam** to allow all Creation Club content to download.  
     Do **not** change any settings or start a game — just reach the main menu, download the Creation Club content via the popup, then close it.

3. **Create folders and Defender exceptions**
   - In Windows, create a `\modlists` directory and a `\downloaded mods` directory if you do not already have them. They do not need to be on the same drive, but each needs to be on a drive with adequate available storage capacity. You do not have to use those exact names.
   - Assuming you are using Windows Defender as your antivirus, open `Windows Security` -> `Virus and Threat Detection` -> `Manage settings`.
   - Scroll all the way down to the Exclusions section. Click `Add or remove exclusions`.
   - Select and add the two directories mentioned above.
   - Turn off Smart App Control if you have that in your windows.
   - (If you're using an antivirus other than Defender, add exclusions in whatever manner your AV requires.)

4. **Launch Wabbajack**
   - Open Wabbajack.
   - Click the **Modlists Browser** tab.
   - In the **upper-left corner**, enable:
     - **Show Unofficial Lists**
   - Use the search bar to find **Authoria - Requiem Reforged**.

5. **Select the Modlist**
   - Click on **Authoria - Requiem Reforged**.
   - Choose:
     - A **Download Location** – where Wabbajack will store mod archives.  
       Select the `\downloaded mods` directory from Step 3.  
     - An **Installation Location** – where the modlist will be fully installed and run from.  
       Create a `\Authoria` directory in the `\modlists` folder from Step 3.  
        **This must be on an SSD** for performance and stability.  

6. **Start Installation**
   - Click **Start** to begin the automated installation.
   - Wabbajack will handle the process automatically.
   - If any files fail to download, Wabbajack will **clearly identify the missing file**.

   >  *Optional:* [Watch Biggie’s Wabbajack Install Guide](https://www.youtube.com/watch?v=nApuOZWp12c&ab_channel=biggie_boss)

7. **While Wabbajack is running:**
   - Join the [Discord server](https://discord.gg/J6VkyeXDUv) and ask any questions you might have.
   - Review the [Gameplay Guide](https://github.com/Drheisen1/Authoria-Requiem-Reforged/blob/main/GameplayGuide.md)

## After installation

Continue with [Post-installation & Official Options](PostInstallationGuide.md) before starting your character. The [Gameplay Guide](GameplayGuide.md) covers character initialization, saving, controls, and player reference material.
