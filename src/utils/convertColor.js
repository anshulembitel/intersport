export const convertColor = (hexcolor) => {
  if (hexcolor) {
    hexcolor = hexcolor.replace('#', '');

    // Extract RGB components
    return {
      isColor: true,
      r: parseInt(hexcolor.substring(0, 2), 16) / 255,
      g: parseInt(hexcolor.substring(2, 4), 16) / 255,
      b: parseInt(hexcolor.substring(4, 6), 16) / 255,
    };
  }
};
