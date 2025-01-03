# Forager Build Guide

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/firstcontributions/first-contributions)
[![Discord](https://img.shields.io/discord/548530462419582996?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/frjFXZB "Redirect to Keycapsss Discord")
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=flat-square)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## BOM

### Parts included in the kit

| Part name                      | Qty | Remarks                                           |
| :----------------------------- | :-- | :------------------------------------------------ |
| Forager PCB (left, right side) | 2   | Fully assembled                                   |
| Case                           | 2   | 3D printed with black PLA                         |
| Tenting feet                   | 4   | 3D printed with black PLA                         |
| Screws                         |     | Black countersunk M2x4 screws (with spare screws) |
| Rubber feet                    |     |                                                   |

### Additionally required parts

| Part name            | Qty | Remarks                           |
| :------------------- | :-- | :-------------------------------- |
| Choc V1 switches     | 34  |                                   |
| Choc V1 keycaps      | 34  |                                   |
| LiPo 1S 3.7V battery | 2   | Optional with a JST ACH connector |
| Screwdriver          |     | PZ1                               |

## Battery

You need a Lipo 3.7V (1 cell) battery.

The board has a JST ACH connector or if your battery does not have the right connector, your can solder the two cable direct on the PCB.

[![401230 LiPo 1cell 3.7v battery](img/a17de550b718850611903ab1557a6545_MD5.jpg)](img/a17de550b718850611903ab1557a6545_MD5.jpg)

![Lipo battery soldered](/img/lipo-battery-1.jpg)
_Lipo battery without JST connector, with cables directly soldered to the PCB.  
__Red = (+) , Black = (-)___

### Where to buy

- [Aliexpress Lipo 120mAh with JST ACH connector](https://s.click.aliexpress.com/e/_EuJ4GwD)

## Screws

Use a Phillips screwdriver of the most appropriate size to avoid damaging the screw.  
I have found a PZ1 to work well.  
Tighten the screws carefully, they are made of soft metal.  
The set includes some spare screws.

[![Phillips screwdriver bit and M3 screws](img/632b9bd9da21688f901337feab7e3e72_MD5.jpg)](img/632b9bd9da21688f901337feab7e3e72_MD5.jpg)

## Assembly

1. Check that you have all required parts
    - [ ] Image with all parts
2. Attach or solder the battery cable to the PCB and secure the battery with the double-sided adhesive tape.
3. Insert the PCB into the bottom of the case. Start with the USB connector and then push the overlying side down. Tighten the 5x screws. Ensure that the battery cable is not trapped between the case and the soldering nut. ![Battery cable](/img/battery-cable-1.jpeg)
4. Place the top plate on the on PCB.  
    Take a choc v1 switch and check that the 2 metal pins are straight.  
    [![Choc switch pin align](img/7fe8b8d50b93cdbc1e18bd6a916da055_MD5.jpg)](img/7fe8b8d50b93cdbc1e18bd6a916da055_MD5.jpg)

    Check the orientation before inserting the switch. Insert the switch into one of the outer cut-outs.
    [![Forager top view](img/7930331bc29015a2aca5d34da2173f5a_MD5.jpg)](img/7930331bc29015a2aca5d34da2173f5a_MD5.jpg)  
5. Repeat the last step for the remaining 3 outer switch cut-outs and then proceed with the remaining switch cut-outs.
    This will align the top plate in the correct position.
    [![Forager top view](img/1dc24afe34a286ddcd64902a283691a6_MD5.jpg)](img/1dc24afe34a286ddcd64902a283691a6_MD5.jpg)
6. Screw the 4x screws into the top plate.

## Typing Test

With Forager fully assembled, it's time to test it out!  
The [QMK Configurator](https://config.qmk.fm/#/test) pag gives you visual feedback.

### Default keymap

The Forager ships with the following default keymap:

![Forager default keymap](img/cff91313883aeac1728ef8d40a033e91_MD5.svg)

*Keymap image created with [keymap-drawer.streamlit.app](<https://github.com/caksoylar/keymap-drawer https://keymap-drawer.streamlit.app>)*

### ZMK Studio

With ZMK Studio you can change the keycamp without flashing a new firmware.  
The pre flashed firmware has ZMK Studio enabled.

1. Connect the centre half to your computer using a USB cable.
2. Open the [ZMK Studio website](https://zmk.studio), or download the latest release of the [cross platform application](https://github.com/zmkfirmware/zmk-studio/releases).
3. To unlock the keyboard, press the <kbd>studio_unlock</kbd> key _(first column, second row)_ in the `adj` layer.  
    To access the `adj` layer, hold the <kbd>sym</kbd> and the <kbd>num</kbd> key.
4. Now you can change the keymap to suit your needs.
    Not all ZMK features are supported by ZMK Studio.  More information [here](https://zmk.dev/docs/features/studio#capabilities).

## Wireless

ZMK will automatically start advertising to allow new hosts to connect. From your computer, go to the bluetooth preferences and add a device. You should see a device named "Forager" in the list. Click that item to connect. Once connected over bluetooth, you should be able to start typing.

To use more than one host/device with you Forager, you'll need to use different profiles to manage the connection/communication with each device. To learn more, read up on ZMK's [bluetooth feature](https://zmk.dev/docs/features/bluetooth).

