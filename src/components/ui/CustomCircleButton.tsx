/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 12:33 PM
 */
import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { LocalSvg } from "react-native-svg";

export interface Props {
	onPress: () => void;

	buttonStyle?: StyleProp<ViewStyle>;

	imgStyle?: StyleProp<ViewStyle>;
}

export const CustomCircleButton = ({ onPress, buttonStyle, imgStyle }: Props) => {
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<LocalSvg
				asset={require("../../assets/images/CircleButton.svg")}
				style={imgStyle}
				width={"100%"}
				height={"100%"}
				onTouchEnd={onPress}
			/>
		</TouchableOpacity>
	);
};
