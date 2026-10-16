# Authoria — Requiem Reforged — Safe Customization Practices

For Authoria 2.9.10.

This guide describes habits for keeping personal modifications isolated, understandable, and easier to reverse. These precautions do not guarantee compatibility or save safety. Any modification to the modlist is Rule 11.

## Rule 11 – Modlist Modification Disclaimer

By choosing to modify or tweak **Authoria - Requiem Reforged** in any way — whether by adding mods, changing load order, editing settings, or rebuilding components — you are doing so at your own risk.

> **You have effectively voided your warranty.**

While we absolutely encourage learning and modding, please understand that:

- **Myself and the admin team are not obligated to help troubleshoot issues** caused by personal edits or changes to the list.
- We cannot guarantee support for lists that differ from the officially published Wabbajack version.
- If something breaks because of your changes, it’s your responsibility to fix it.

Thank you for respecting the work that went into Authoria - Requiem Reforged, and for being part of the community!

## Contents

- [Start with a separate MO2 profile](#start-with-a-separate-mo2-profile)
- [Keep original mod files intact](#keep-original-mod-files-intact)
- [Keep tool outputs separate where practical](#keep-tool-outputs-separate-where-practical)
- [Check compatibility before making changes](#check-compatibility-before-making-changes)
- [Make changes in small steps](#make-changes-in-small-steps)
- [Plan a way back](#plan-a-way-back)
- [Related guides](#related-guides)

## Start with a separate MO2 profile

1. Open the profile manager from MO2's profile dropdown.
2. Select the shipped Authoria profile and choose **Copy**.
3. Give the copy a clear name, such as **Authoria - Custom**.
4. Select the copied profile before changing enabled mods or plugin order.

Keep the shipped profile as your reference for the original setup.

**A copied profile does not create independent copies of installed mods.** Mod folders are shared between profiles in the same MO2 instance. Editing or deleting those files can affect the original profile too. Do not treat a profile copy as a complete backup of the installation.

## Keep original mod files intact

- Put personal file edits in a separately named mod rather than editing the shipped files directly. Copy only the files you intend to change, preserving their folder paths.
- If you reinstall a mod to choose different installer options, give the custom installation a different name. Avoid merging it into or replacing the original mod folder when you want to retain the original setup.
- Check file conflicts and plugin order after enabling your version. Do not assume that an added mod belongs at the bottom of both panes.
- Keep a record of which files and options you changed.

Disabling a mod in a profile and deleting its installed folder are different actions. Deleting a shared mod folder affects every profile that uses it. Disabling a mod can still break dependencies or an existing save; neither action is automatically safe.

## Keep tool outputs separate where practical

Create separately named output mods for personal tool runs when storage permits, and check the destination before starting each tool. A custom profile alone does not redirect tool output paths or protect the files in a shipped output mod.

Follow the [Tool Running Guide](https://github.com/Drheisen1/Authoria-Requiem-Reforged/blob/main/Authoria_Tool_Running_Guide.md) for Authoria's tool-specific instructions, output paths, plugin names, rerun conditions, and order. Do not replace those procedures with a generic tool checklist.

The existing guide permits reusing Pandora outputs and replacing original LOD output contents when space is limited. Those allowances remain. If you choose them, the original profile no longer provides an untouched copy of the replaced shared output files. Decide how you will restore those files before overwriting or deleting them.

Do not clear MO2's Overwrite folder indiscriminately. Check its contents and follow the instructions for the specific task; the included ENB-switching procedure is documented in [Post-installation & Official Options](PostInstallationGuide.md#choose-your-included-options).

## Check compatibility before making changes

Read each mod's requirements, compatibility notes, installation instructions, and relevant author comments. Consider Authoria's Requiem integration, body setup, NPC appearance handling, seasons, and generated outputs when they are affected by the change.

Inspect file conflicts in MO2. For plugin changes, inspect the affected records and dependencies with xEdit rather than assuming that a mod is compatible because the game launches. A recommended position from another modlist is not an Authoria load-order instruction.

Preserve the curated plugin order as your reference. Do not automatically re-sort the whole list to place a personal addition; determine the placement needed for that change and its patches.

## Make changes in small steps

- Make one change, or a small related set of changes, at a time.
- Record the mod version, installer selections, priority, plugin position, settings edits, and any regenerated outputs.
- Check for missing dependencies and unexpected conflicts before launching.
- Test the affected behavior as well as startup. Loading successfully does not prove that quests, combat, NPCs, or seasonal worldspaces are unaffected.
- Use a separate test character when investigating changes that may affect a playthrough. Testing does not override a requirement to start a new game.

The Tool Running Guide states that rerunning the **Reqtificator is not save safe**. Preserve that warning. A copied profile or a successful tool run does not make an existing save compatible with rebuilt patches.

## Plan a way back

Retain the original mod files and outputs where practical, and keep backups of files you intend to replace. Record the original settings and load order before changing them.

Keep saves from before your changes separate from test saves. Reverting files does not necessarily reverse changes already stored in a save. Do not assume that switching back to the original profile repairs a save made with different mods or generated patches.

When investigating a problem, identify the personal changes and the guide version you followed. The Rule 11 disclaimer above still applies; these practices do not promise troubleshooting support.

## Related guides

- [Post-installation & Official Options](PostInstallationGuide.md): included options and first-launch preparation.
- [Tool Running Guide](https://github.com/Drheisen1/Authoria-Requiem-Reforged/blob/main/Authoria_Tool_Running_Guide.md): the existing separate technical guide.
- [Performance Profile Guide](PerformanceProfileGuide.md): placeholder for Authoria 2.9.10.
- [Rule 11 Video Guides](https://www.youtube.com/playlist?list=PLF-HXyx5H2BMhZjI4aq2aBsvNlsSdrWX_).