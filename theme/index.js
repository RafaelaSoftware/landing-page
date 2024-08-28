import { extendTheme, theme as base } from "@chakra-ui/react";

import { fonts } from "./foundations/fonts";
import colors from "./foundations/colors";

const overrides = {
    fonts,
    colors,
};

export default extendTheme(overrides);