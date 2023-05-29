/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 7:17 PM
 */
import React, { FC, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { validatePassword } from "../../common/utils/ValidatePassword";

interface Props {
	type: "text" | "email" | "password";
	placeholder?: string;
	value: string;
	onChangeText: (text: string) => void;
	style?: ViewStyle;
}

export const Input: FC<Props> = ({ type, placeholder, value, onChangeText, style }: Props) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [errMessages, setErrMessage] = useState<string[]>([]);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const handleTextChange = (value: string) => {
		onChangeText(value);
		if (isPassword) {
			setErrMessage(validatePassword(value));
		}
	};

	const isPassword = type === "password";

	return (
		<View style={[styles.container, style]}>
			<View style={styles.inputEyeContainer}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={placeholder}
						placeholderTextColor="#A1A4B2"
						secureTextEntry={isPassword && !isPasswordVisible}
						value={value}
						onChangeText={handleTextChange}
					/>
				</View>
				<View style={styles.eyeContainer}>
					<TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
						{isPassword && <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="#666" />}
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.errMessagesContainer}>
				{isPassword && errMessages.length !== 0 && <Text style={styles.errMessage}>{errMessages[0]}</Text>}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
	},
	inputEyeContainer: {
		backgroundColor: "#F2F3F7",
		borderRadius: 15,
		height: 63,
		width: 374,
		flexDirection: "row",
		alignItems: "center",
	},
	inputContainer: {
		width: "85%",
		flexDirection: "row",
		alignItems: "center",
		margin: 5,
	},
	eyeContainer: {},
	input: {
		paddingVertical: 18,
		paddingHorizontal: 20,
		border: 0,
		flex: 1,
		lineHeight: 17,
	},
	icon: {
		width: 25,
	},
	errMessagesContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
	},
	errMessage: {
		padding: 7,
		textAlign: "left",
	},
});
