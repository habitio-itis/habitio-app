/**
 * @author: CHIKIRIAY
 * @created: 5/24/23
 * @Time: 12:00 AM
 */
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { LocalSvg } from "react-native-svg";
import React from "react";
import { LocalProps } from "react-native-svg/src/LocalSvg";

export interface Props {
	onPress: () => void;

	svgProps?: LocalProps;

	buttonStyle?: StyleProp<ViewStyle>;

	svgWidth?: number;

	svgHeight?: number;

	asset: unknown;

	textStyle?: StyleProp<TextStyle>;

	text: string;
}

export const HabitIcon = ({
	svgProps,
	onPress,
	buttonStyle,
	svgWidth,
	svgHeight,
	text,
	textStyle,
	asset,
}: Props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
				<LocalSvg
					{...svgProps}
					style={styles.icon}
					width={svgWidth ?? styles.icon.width}
					height={svgHeight ?? styles.icon.height}
					asset={asset}
				/>
				<Text style={textStyle}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	icon: {
		width: 129,
		height: 133,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	container: {
		width: 125,
		height: 162,
	},
});
