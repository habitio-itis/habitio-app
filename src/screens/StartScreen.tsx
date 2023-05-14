/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 1:58 AM
 */
import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FONTS } from "@Constants/Styles";
import { Screens } from "@Constants/Screens";

const HomeScreen = ({ navigation }) => {
	const onTouchEndHandler = () => {
		navigation.navigate(Screens.GET_START);
	};

	return (
		<LinearGradient
			colors={["#92A3FD", "#9DCEFF"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.container}
			onTouchEnd={onTouchEndHandler}
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
	title: { ...FONTS.habitIoH1 },
});

export default HomeScreen;
