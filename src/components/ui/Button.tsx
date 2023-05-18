import React, { FC } from "react";
import { Text, ViewStyle, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONTS } from "@Constants/Styles";

type Theme = "default" | "text" | "link";

interface Props {
	theme?: Theme; 
	text: string;
	onPress: () => void;
	style?: ViewStyle;
}

const getThemeStyles = (theme: Theme) => {
	const styles = {
		button: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			
		},
		text: {
			...FONTS.body4,
		},
	} as const;
	if (theme === "default") {
		return StyleSheet.create({
			button: {
				...styles.button,
				width: 374,
				minHeight: 60,
				backgroundColor: "#8E97FD",
				borderRadius: 35,
			},
			text: {
				...styles.text,
				color: "#F6F1FB",
			},
		});
	} else if (theme === "text") {
		return StyleSheet.create({
			button: {
				...styles.button,
			},
			text: {
				...styles.text,
				color: "#3F414E",
			},
		});
	} else if (theme === "link") {
		console.log(theme === "link");
		return StyleSheet.create({
			button: {
				...styles.button,
			},
			text: {
				...styles.text,
				color: "#8E97FD",
			},
		});
	}
};

export const AppButton: FC<Props> = ({ text, onPress, style, theme = "default" }) => {
	const styles = getThemeStyles(theme);
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};
