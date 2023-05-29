/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 12:33 PM
 */
import React from "react";
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import { LocalSvg } from "react-native-svg";
import { LocalProps } from "react-native-svg/src/LocalSvg";

export interface Props {
	onPress: () => void;

	text: string;

	buttonStyle: StyleProp<ViewStyle>;

	textStyle: StyleProp<TextStyle>;

	svgProps: LocalProps;
}

export const CustomBigImageButton = ({
	onPress,
	text,
	buttonStyle,
	textStyle,
	svgProps,
}: Props) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
			<View style={styles.buttonContainer}>
				<LocalSvg {...svgProps} style={styles.backgroundSvg} />
				<View style={styles.buttonTextContainer}>
					<Text style={[styles.buttonText, textStyle]}>{text}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: "#3B82F6",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,

		width: "75%",
		elevation: 5,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		textAlign: "center",
		textAlignVertical: "center",
		alignContent: "center",
		alignItems: "center",
		fontWeight: "bold",
	},
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
		alignContent: "center",
	},
	backgroundSvg: {
		position: "absolute",
		alignSelf: "flex-end",
	},
	buttonTextContainer: {
		width: "100%",
		height: "100%",
		alignContent: "center",
		alignItems: "center",
		textAlign: "center",
		justifyContent: "center",
	},
});
