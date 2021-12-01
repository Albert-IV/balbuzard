# Balbuzard

![photo of assembled keyboard](images/assembled.jpg)

Balbuzard is a 36-key keyboard with a PCB. This repository contains the [Ergogen](https://github.com/mrzealot/ergogen) configuration that generates the KiCad PCB file.

## Usage

Assuming you have [npm installed](https://www.npmjs.com/get-npm):

``` sh
git clone --recursive git@github.com:brow/balbuzard.git
cd balbuzard
make
```

Find the generated PCB at `output/pcbs/main.kicad_pcb`.

![pcb thumbnail image](images/pcb.png)

## How do you type on that?

My keymap looks like this. The colors indicate which finger I use to hit each key.

![example keymap](images/layout.png)

## Rev 1.

* Ergogen config upgraded to latest 3.0.0
* Column layout tweaked, ready for routuing
* Each key / diode is routed.  Next is to route columns and rows (AKA the hard part)
* Removed routing done since I've found a way in Kicad to make direct connections (which will make the key routing cleaner looking)
* Redid the key / diode routing to use straight tracks wherever I could. 

**Note:** If there is a Rev 2. you will need to rotate the left side buttom-most thumb key's diode.  Rotated manually in Kicad to make it easier to route without routing on the back side.
