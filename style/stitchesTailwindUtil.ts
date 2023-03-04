import {
  ALIGIN_ITEMS,
  FONT_WEIGHT,
  JUSTIFY_CONTENT,
  SHADOW,
} from "./tailwindMap";

import type * as Stitches from "@stitches/react";

export const tailwindSizing = {
  space: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  sizes: {
    0: "0rem",
    none: "none",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  radii: {
    sm: "0.125rem",
    base: " 0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
    none: "0px",
  },
  fonts: {
    system: "system-ui",
  },
};

export const tailwindBreakpoints = {
  sm: `@media (min-width: 640px)`,
  md: `@media (min-width: 768px)`,
  lg: `@media (min-width: 1024px)`,
  xl: `@media (min-width: 1280px)`,
  "2xl": `@media (min-width: 1536px)`,
};

export const tailwindUtils = {
  p: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
    marginBottom: value,
  }),

  z: (value: Stitches.PropertyValue<"zIndex">) => ({
    zIndex: value,
  }),

  rounded: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderRadius: value,
  }),
  roundedTR: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
    borderTopRightRadius: value,
  }),
  roundedBR: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
    borderBottomRightRadius: value,
  }),
  roundedBL: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
    borderBottomLeftRadius: value,
  }),
  roundedTL: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
    borderTopLeftRadius: value,
  }),

  // NOTE: This may be confusing.
  text: (value: Stitches.PropertyValue<"fontSize">) => ({
    fontSize: value,
  }),
  fontW: (value: keyof typeof FONT_WEIGHT) => ({
    fontWeight: FONT_WEIGHT[value],
  }),

  bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
    backgroundColor: value,
  }),

  shadow: (value: keyof typeof SHADOW) => ({
    boxShadow: SHADOW[value],
  }),

  items: (value: keyof typeof ALIGIN_ITEMS) => ({
    alignItems: ALIGIN_ITEMS[value],
  }),
  justify: (value: keyof typeof JUSTIFY_CONTENT) => ({
    justifyContent: JUSTIFY_CONTENT[value],
  }),

  gridCols: (value: number | "none") => ({
    gridTemplateColumns:
      value === "none" ? "none" : `repeat(${value}, minmax(0, 1fr))`,
  }),
  gridRows: (value: number | "none") => ({
    gridTemplateRows:
      value === "none" ? "none" : `repeat(${value}, minmax(0, 1fr))`,
  }),
};
