/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 1:58 AM
 */
import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
	// setTimeout(() => {
	// 	navigation.navigate(Screens.REGISTER);
	// }, 5000); // ждем 3 секунды

	return (
		<LinearGradient
			colors={["#92A3FD", "#9DCEFF"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.container}
		>
			<Text style={styles.title}>H A B I T I O</Text>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	title: {
		fontFamily: "Inter-Regular",
		fontSize: 36,
		lineHeight: 44,
		textAlign: "left",
		color: "#FFFFFF",
		textShadowColor: "rgba(0,0,0,0.25)",
		textShadowOffset: { width: 0, height: 4 },
		textShadowRadius: 4,
	},
});

export default HomeScreen;
