/**
 * @author: CHIKIRIAY
 * @created: 3/7/23
 * @Time: 9:24 PM
 */

import { Dimensions, TextStyle } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
	primary: "#FFCB3E",     // Light purple
	secondary: "#C9141C",   // Dark purple

	white: "#fff",
	black: "#000000",
	gray: "#FCFCFC",
};
export const SIZES = {
	// global sizes
	base: 8,
	font: 14,
	radius: 12,
	padding: 24,

	// font sizes
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 14,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,

	// app dimensions
	width,
	height,
};
export const FONTS: Record<string, TextStyle> = {
	h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
	h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
	h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
	h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
	body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
	body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
	body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
	body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
	body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
	habitIoH1: {
		fontFamily: "Inter-Regular",
		fontSize: 36,
		lineHeight: 44,
		textAlign: "left",
		color: "#FFFFFF",
		textShadowColor: "rgba(0,0,0,0.25)",
		textShadowOffset: { width: 0, height: 4 },
		textShadowRadius: 4,
	},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;