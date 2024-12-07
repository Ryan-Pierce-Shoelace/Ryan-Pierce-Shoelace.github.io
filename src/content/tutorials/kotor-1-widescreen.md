---
# Save actual tutorials to: /src/content/tutorials/your-tutorials-slug.md

title: "Star Wars: Knights of the Old Republic - Widescreen Mod Tutorial"
description: "Learn how to get Star Wars: Knights of the Old Republic running in a widescreen resolution with enhanced visuals and UI improvements."
date: 2023-12-06
author: "xuul"
type: "video"
thumbnail: "/assets/images/tutorials/kotor-1-widescreen.jpg"
youtube_id: "DSizFARnwyM" 
difficulty: "Beginner"  # "Beginner", "Intermediate", or "Advanced"
prerequisites:  # Optional, remove if none
  - "Have the Steam version of KOTOR installed"
  - "Disable any display scaling settings in Windows"
estimated_time: 15  # Time in minutes
---

clStar Wars: Knights of the Old Republic - Widescreen Mod Tutorial
## Overview
In this tutorial, we'll walk through the process of getting Star Wars: Knights of the Old Republic (KOTOR) running in a widescreen resolution, along with installing various mods to enhance the UI and visual experience.

## Prerequisites

You have the Steam version of KOTOR installed on your computer.
If you have the original disc version of the game, make sure to download and apply the 1.03 patch.
If you have the Amazon version of the game, you'll need to apply the sound and movies fix.
Disable any display scaling settings in Windows. Right-click on the desktop, go to Display Settings, and make sure Scale and layout is set to 100%.

## Step 1: Modify the Game Settings

Locate the KOTOR folder on your computer. If you're using the Steam version, you can find it by right-clicking on the game in Steam, going to Properties > Local Files, and clicking "Browse".
Open the swconfig.exe file in the KOTOR folder.
In the swconfig window, make sure your settings match the ones shown on the screen. Once done, click "Apply".
Next, right-click on the swtor.ini file in the KOTOR folder, select "Open with", and choose Notepad.
Scroll down to the "Graphics Options" section and update the Width and Height values to match your monitor's resolution, for example, Width=2560 and Height=1440. Save the file.

## Step 2: Install the Widescreen Mod

Download the "KOTOR Editable Executable" from DeadlyStream.com and extract it to a folder on your desktop.
Download the "Universal Widescreen" tool from the Widescreen Gaming Forums and extract it to a folder on your desktop.
In the KOTOR folder, locate the swtor.exe file and replace it with the one from the "KOTOR Editable Executable" folder.
Open the "Universal Widescreen" tool, select "Star Wars: Knights of the Old Republic 1024x768" from the dropdown menu, and click the "Find it for me" button to locate the swtor.exe file.
Enter your desired resolution (e.g., 2560x1440) and click the "Patch" button.

## Step 3: Install Additional Mods

Download the following mods from Nexus Mods and the KOTOR Community Portal:

- [Widescreen Cockpit and Racing Track on Manaan](https://www.nexusmods.com/kotor/mods/1211)
- [High Resolution Menus](https://deadlystream.com/files/file/1159-kotor-high-resolution-menus/)
- [HD UI Menu Pack](https://deadlystream.com/files/file/1226-hd-ui-menu-pack/)
- [Workbench Upgrade Screen](https://deadlystream.com/files/file/1742-workbench-upgrade-screen-camera-tweak-for-k1/)
- [Pretty Good Icons](https://deadlystream.com/files/file/1815-pretty-good-icons-for-kotor/)
- [Upscaled Computer](https://deadlystream.com/files/file/2025-upscaled-computer/)
- [KOTOR 1 Fade Fix](https://deadlystream.com/files/file/1792-kotor-widescreen-fade-fix/)
- [Main Menu Widescreen Fix](https://deadlystream.com/files/file/1173-k1-main-menu-widescreen-fix/)


Extract all the downloaded mod files to a folder on your desktop.
In the KOTOR folder, open the "override" folder and copy the files from each mod folder into the "override" folder, overwriting any existing files.

## Step 4: Optimize Cutscenes

Download the ["KOTOR 1 Remastered Cutscenes" mod](https://www.nexusmods.com/kotor/mods/1306) mod from Nexus Mods, matching your resolution.
Extract the downloaded mod and locate the "movies" folder.
In the KOTOR folder, delete the existing "movies" folder and replace it with the one from the mod.

(Optional) You can also delete the "biologo", "LucasArts logo", and "legal" files from the mod's "movies" folder to skip the intro cutscenes.

Special thanks to the folks over at the [KOTOR Community Portal](https://kotor.neocities.org/)  and the Kotor Discord Server for all their work putting together the info used in this guide. 

With these steps, you should now have KOTOR running in a widescreen resolution with enhanced visuals and a polished user interface. 

Thanks for reading! I hope you have an excellent day.
