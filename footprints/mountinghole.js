// MountingHole_2.2mm_M2_Pad_Via
// TODO add more sizes as param?
module.exports = {
  nets: {
    net: undefined,
  },
  params: {
    class: "HOLE",
  },
  body: (p) => `
    (module "MountingHole_2.2mm_M2_Pad_Via" (version 20210722) (generator pcbnew) (layer "F.Cu")
      (tedit 56DDB9C7)
      ${p.at /* parametric position */} 
    
      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide} 
        (effects (font (size 1 1) (thickness 0.15)))
        (tstamp b68bb25c-687d-44b1-b966-dad4cac66b35)
      )
    
      (fp_circle (center 0 0) (end 1.6 0) (layer "F.CrtYd") (width 0.05) (fill none) (tstamp b2688462-c375-45d3-9095-3425fb17c88f))
      (pad "1" thru_hole circle locked (at 0 0) (size 3 3) (drill 2.2) (layers *.Cu *.Mask) (tstamp 47ee1d53-0551-4b6d-bc24-3f3f14c73c36))
    )`,
};
