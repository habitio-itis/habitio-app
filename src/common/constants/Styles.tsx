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
	h2: 24,
	h3: 16,
	h4: 14,
	body1: 30,
	body2: 24,
	body3: 16,
	body4: 14,
	body5: 12,

	// app dimensions
	width,
	height,
};
export const FONTS = {
	h1: { fontFamily: "Rubik-Black", fontSize: SIZES.h1, lineHeight: 36 },
	h2: { fontFamily: "Rubik-Bold", fontSize: SIZES.h2, lineHeight: 30 },
	h3: { fontFamily: "Rubik-Bold", fontSize: SIZES.h3, lineHeight: 22 },
	h4: { fontFamily: "Rubik-Bold", fontSize: SIZES.h4, lineHeight: 22 },
	body1: { fontFamily: "Rubik-Regular", fontSize: SIZES.body1, lineHeight: 36 },
	body2: { fontFamily: "Rubik-Regular", fontSize: SIZES.body2, lineHeight: 30 },
	body3: { fontFamily: "Rubik-Regular", fontSize: SIZES.body3, lineHeight: 22 },
	body4: { fontFamily: "Rubik-Regular", fontSize: SIZES.body4, lineHeight: 22 },
	body5: { fontFamily: "Rubik-Regular", fontSize: SIZES.body5, lineHeight: 22 },
	habitIoH1: {
		fontFamily: "Inter-Regular",
		fontSize: 36,
		lineHeight: 44,
		textAlign: "left",
		color: "#FFFFFF",
		textShadowColor: "rgba(0,0,0,0.25)",
		textShadowOffset: { width: 0, height: 4 },
		textShadowRadius: 4,
	} as TextStyle,
};