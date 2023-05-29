import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	onPress: () => void;
	style?: ViewStyle;
}

export const AddButton: FC<Props> = ({ onPress, style }) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.container, style]}>
			<Ionicons name="add" size={18} color="white" />	
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: 73,
		height: 73,
		backgroundColor: "#92A3FD",
		borderRadius: "100%",
	},
});
