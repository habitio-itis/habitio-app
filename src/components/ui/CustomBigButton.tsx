/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 12:33 PM
 */
import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

export interface Props {
	onPress: () => void;

	text: string;

	buttonStyle: StyleProp<ViewStyle>;

	textStyle: StyleProp<TextStyle>;
}

export const CustomBigButton = ({ onPress, text, buttonStyle, textStyle }: Props) => {
	return (
		<TouchableOpacity onPress={onPress} style={Object.assign({}, styles.button, buttonStyle)}>
			<Text style={Object.assign({}, styles.img, textStyle)}>{text}</Text>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: "#3B82F6",
		borderRadius: 10,
		padding: 16,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		width: "75%",
		elevation: 5,
	},
	img: {
		color: "#fff",
		fontSize: 16,
		textAlign: "center",
		fontWeight: "bold",
	},
});
