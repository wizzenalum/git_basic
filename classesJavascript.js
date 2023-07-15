// class Color {
//     constructor(r, g, b) {
//       // values is now an HSL array!
//       this.values = [r, g, b];
//     }
//     static #opacity = "Opaque ";
//     randomfield = "red panda";
//     getRed() {
//       return this.values[0];
//     }
//     setRed(value) {
//       this.values[0] = value;
//     }
//     getOpacity() {
//         return Color.#opacity;
//     }
//   }
  
//   const red = new Color(255, 0, 0);
//   const white = new Color(255,255,255);
//   const black = new Color (0,0,0);
//   red.opacity = "transparent";
//   console.log(red.values); 
//   console.log(white.values);
//   console.log(black.values);
//   console.log(white.getRed());
//   console.log(black.getRed());
//   console.log(red.getRed());
//   console.log(red.opacity);
//   console.log(red.getOpacity());
//   console.log(Color.opacity);

//   console.log(red.randomfield);
//   red.randomfield = "black panda";
//   console.log(red.randomfield);
//   console.log(white.randomfield);


// class Color {
//     // Declare: every Color instance has a private field called #values.
//     #values;
//     constructor(r, g, b) {
//       this.#values = [r, g, b];
//     }
//     getRed() {
//       return this.#values[0];
//     }
//     setRed(value) {
//       this.#values[0] = value;
//     }
//   }
  
//   const red = new Color(255, 0, 0);
//   console.log(red.getRed()); // 255

// class Color {
//   #values;
//   constructor(r, g, b) {
//     this.#values = [r, g, b];
//     this["#values"]= 'ram'
//   }
//   redDifference(anotherColor) {
//     if (!(#values in anotherColor)) {
//       throw new TypeError("Color instance expected");
//     }
//     return this.#values[0] - anotherColor.#values[0];
//   }
// }
// const black = new Color(255, 0, 0);
// const white = new Color(25, 0, 0);
// console.log(black["#values"]); // 255

class Color {
    #values;
    constructor(r, g, b, ) {
      this.#values = [r, g, b ];
    }
    get red() {
      return this.#values[0];
    }
    set red(value) {
      if (value < 0 || value > 255) {
        throw new RangeError("Alpha value must be between 0 and 1");
      }
      this.#values[0] = value;
    }
  }
  class ColorWithAlpha extends Color {
    #alpha;
    constructor(r, g, b, a) {
      super(r, g, b);
      this.#alpha = a;
    }
    get alpha() {
      return this.#alpha;
    }
    set alpha(value) {
      if (value < 0 || value > 1) {
        throw new RangeError("Alpha value must be between 0 and 1");
      }
      this.#alpha = value;
    }
  }
  let red = new ColorWithAlpha(255,0,0,0.5)
  console.log(red.alpha)
  console.log(red.red)