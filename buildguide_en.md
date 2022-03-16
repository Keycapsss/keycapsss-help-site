# 3w6 Build Guide

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/firstcontributions/first-contributions)
[![Discord](https://img.shields.io/discord/548530462419582996?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/frjFXZB "Redirect to Keycapsss Discord")
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=flat-square)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## BOM

### Parts included in the kit

| Part name     | Qty | Remarks                                  |
| :------------ | :-- | :--------------------------------------- |
| Top plates    | 2   | Nr. 1 on the image below                 |
| Spacer plates | 2   | Nr. 2 on the image below, 3D printed PLA |
| PCB's         | 2   | Nr. 3 on the image below                 |
| Foam          | 2   | Nr. 4 on the image below, self-adhesive  |

![Kit parts](img/3w6-split-keyboard-kit-black-pcb-2.jpg)

### Additionally required parts

| Part name                      | Qty | Remarks                                    |
| ------------------------------ | --- | ------------------------------------------ |
| Choc V1 switches               | 36  | Choc V2 switches are __not__ supported     |
| 1U Choc keycaps (Lo Profile)   | 24  | MX keycaps are __not__ supported           |
| 1.5U Choc keycaps (Lo Profile) | 2   | MX keycaps are __not__ supported           |
| USB-C cable                    | 1   | To connect the keyboard to your computer   |
| USB-C to USB-C cable           | 1   | To connect both halfs, 20cm lenght is good |

### Optional parts

| Part name                 | Qty | Remarks                   |
| ------------------------- | --- | ------------------------- |
| Pimoroni Trackball module | 1   | support on the right half |

## Assembly

Attach the Choc V1 switches (36x) to the top plates and pay attention to the switch orientation. The lower row has a different orientation.

![3w6 top plate with switches](img/3w6-split-keyboard-kit-black-pcb-build-guide-2.jpg)

Check carefully if all switch pins are staight.

![3w6 top plate with switches from bottom view](img/3w6-split-keyboard-kit-black-pcb-build-guide-1.jpg)

Put the 3D printed spacer on top of the PCB's.  
The SMD components must face up. Pay attention that left and right spacer are different.

![3w6 3d printed spacer plates on top of the PCB's](img/3w6-split-keyboard-kit-black-pcb-build-guide-3.jpg)

Put the assembled top plates with the switches on the PCB's with the spacer.  
Do not press to hard. Turn the PCB's and check from the bottom view, if all switch pins are align with the holes in the PCB.

![alt](img/3w6-split-keyboard-kit-black-pcb-build-guide-4.jpg)

If all switch pins are aligned, press the top plate and the PCB together.  
If you have problems to close the gap, probably a switch pin is bent.

![alt](img/3w6-split-keyboard-kit-black-pcb-build-guide-5.jpg)

While you press the PCB down, solder all switch pin's (green marked)

![alt](img/3w6-split-keyboard-kit-black-pcb-build-guide-9.jpg)

Connect both half's with a USB-C to USB-C cable and connect the master side (left) with a USB-C cable to your computer.

Open [QMK Configurator page](https://config.qmk.fm/#/test) and test if all switches trigger a key press. If not check the corresponding solder point for the switch.

![alt](img/3w6-split-keyboard-kit-black-pcb-build-guide-8.jpg)

If everything works as expected, you can attach the self-adhesive foam to the underside.

![alt](img/3w6-split-keyboard-kit-black-pcb-build-guide-6.jpg)

The complete assembled 3W6 Split Keyboard should have 4 layers.

![alt](img/3w6-split-keyboard-kit-black-pcb-build-guide-7.jpg)
