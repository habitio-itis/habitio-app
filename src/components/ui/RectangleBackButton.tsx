import React, { FC } from "react";
import { ViewStyle, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

interface Props {
	onPress: () => void;
	style?: ViewStyle;
}

export const RectangleBackButton: FC<Props> = ({ onPress, style }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.container, style]}>
			<Ionicons name="chevron-back-outline" size={16} color="#3F414E" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: 32,
		height: 32,
		backgroundColor: "#F7F8F8",
		borderRadius: 8,
	},
});
