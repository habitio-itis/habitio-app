import React, { FC } from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	onPress: () => void;
	style?: ViewStyle;
}

export const BackButton: FC<Props> = ({ onPress, style }) => {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Ionicons name="arrow-back" size={18} color="#3F414E" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 55,
		height: 55,
		justifyContent: "center",
		alignItems: "center",
		background: "white",
		borderWidth: 1,
		backgroundColor: "#EBEAEC",
		borderRadius: 38,
	},
});
