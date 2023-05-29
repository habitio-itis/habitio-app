/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 8:34 PM
 */
import { StyleSheet, View } from "react-native";
import { CustomCircleButton } from "@Components/ui/CustomCircleButton";
import React from "react";
import { Screens } from "@Constants/Screens";

export interface Props {
	screen: Screens;

	navigation;
}

export const ButtonAfterRegister = ({ screen, navigation }: Props) => {
	const handlePress = () => {
		navigation.navigate(screen);
	};

	return (
		<View style={styles.buttonContainer}>
			<CustomCircleButton onPress={handlePress} />
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		width: 100,
		height: 100,
		flexDirection: "column",
		textAlign: "center",
		right: 30,
		bottom: 50,
		position: "absolute",
	},
});
