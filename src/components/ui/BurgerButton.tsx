import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const BurgerButton = ({ onPress }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handlePress = () => {
		setIsOpen(!isOpen);
		onPress && onPress(!isOpen);
	};

	return (
		<TouchableOpacity onPress={handlePress} style={styles.container}>
			<Ionicons name={isOpen ? "close" : "menu"} size={24} color="white" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
	},
});

export default BurgerButton;
