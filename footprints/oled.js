module.exports = {
  nets: {
    SDA: undefined,
    SCL: undefined,
    VCC: "VCC",
    GND: "GND",
  },
  params: {
    class: "OLED",
    side: "F",
  },
  body: (p) => {
    const hidden = p.ref_hide;
    const rotation = p.rot + 270;

    return `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
          ${p.at /* parametric position */} 

          ${"" /* footprint reference */}        
          (fp_text 
            reference "${p.ref}" 
            (at 0 0) 
            (layer F.SilkS) 
            ${hidden} 
            (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value OLED (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

          ${"" /* pins */}
          (pad 4 thru_hole oval (at 1.6 2.18 ${rotation}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.net.SDA.str}
          )
          (pad 3 thru_hole oval (at 1.6 4.72 ${rotation}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.net.SCL.str}
          )
          (pad 2 thru_hole oval (at 1.6 7.26 ${rotation}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.net.VCC.str}
          )
          (pad 1 thru_hole rect (at 1.6 9.8 ${rotation}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.net.GND.str}
          )
        )
`;
  },
};
