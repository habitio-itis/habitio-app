/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 3:46 PM
 */
import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressCircle } from "@Components/ui/ProgressCircle";

const LoaderScreen = () => {
	return (
		<LinearGradient
			colors={["#92A3FD", "#9DCEFF"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.container}
		>
			<ProgressCircle />
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
});
export default LoaderScreen;
