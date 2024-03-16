const COLORS = {
  //Dark Mode
  primaryBlackHex: "#0C0F14",
  primaryDarkGreyHex: "#141921",
  secondaryDarkGreyHex: "#21262E",
  primaryGreyHex: "#252A32",
  secondaryGreyHex: "#252A32",
  primaryLightGreyHex: "#52555A",
  secondaryLightGreyHex: "#AEAEAE",
  primaryWhiteHex: "#FFFFFF",
  primaryBlackRGBA: "rgba(12,15,20,0.5)",
  secondaryBlackRGBA: "rgba(0,0,0,0.7)",
  primaryRedHex: "#DC3535",
  primaryOrangeHex: "#D17842",

  //Light Mode
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  poppins_black: "Poppins-Black",
  poppins_bold: "Poppins-Bold",
  poppins_extrabold: "Poppins-ExtraBold",
  poppins_extralight: "Poppins-ExtraLight",
  poppins_light: "Poppins-Light",
  poppins_medium: "Poppins-Medium",
  poppins_regular: "Poppins-Regular",
  poppins_semibold: "Poppins-SemiBold",
  poppins_thin: "Poppins-Thin",
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
  size_40: 40,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const BORDER_RADIUS = {
    radius_4: 4,
    radius_8: 8,
    radius_10: 10,
    radius_15: 15,
    radius_20: 20,
    radius_25: 25,
    radius_30: 30
}

export { COLORS, FONT, SIZES, SHADOWS, BORDER_RADIUS };
