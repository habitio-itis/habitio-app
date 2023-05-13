/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 7:17 PM
 */
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { validatePassword } from "../../common/utils/ValidatePassword";

export interface IPasswordInput {
	placeholder?: string;
	value: string;
	onChangeText: (text: string) => void;
}

export const PasswordInput = ({ placeholder, value, onChangeText }: IPasswordInput) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [errMessages, setErrMessage] = useState<string[]>([]);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const handlePasswordChange = (value: string) => {
		onChangeText(value);
		setErrMessage(validatePassword(value));
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputEyeContainer}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={placeholder ?? "Введите пароль"}
						secureTextEntry={!isPasswordVisible}
						value={value}
						onChangeText={handlePasswordChange}
					/>
				</View>
				<View style={styles.eyeContainer}>
					<TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
						<Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="#666" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.errMessagesContainer}>
				{errMessages.map((message) => (
					<Text style={styles.errMessage}>{`• ${message}`}</Text>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		width: "100%",
	},
	inputEyeContainer: {
		height: 70,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#000000",
		borderRadius: 10,
	},
	inputContainer: {
		width: "85%",
		flexDirection: "row",
		alignItems: "center",
		margin: 5,
	},
	eyeContainer: {},
	input: {
		flex: 1,
		fontSize: 28,
		padding: 10,
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
