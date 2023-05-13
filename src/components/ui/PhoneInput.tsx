/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 7:17 PM
 */
import React from "react";
import { StyleSheet } from "react-native";
import { formatPhoneNumber } from "../../common/utils/FormatPhoneNumber";
import RNPhoneInput from "react-native-phone-number-input";

export const PhoneInput = ({ value, onChangeText }) => {
	const handlePhoneChange = (text: string) => {
		onChangeText(formatPhoneNumber(text));
	};

	return (
		<RNPhoneInput
			defaultCode="RU"
			layout="first"
			autoFocus
			placeholder="Номер телефона"
			value={value}
			containerStyle={styles.container}
			textContainerStyle={styles.textContainer}
			onChangeText={handlePhoneChange}
			textInputStyle={styles.input}
			codeTextStyle={styles.input}
			textInputProps={{ maxLength: 10 }}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 70,
		borderWidth: 2,
		borderColor: "#000000",
		borderRadius: 10,
		margin: 5,
		paddingRight: 6,
	},
	textContainer: {
		flexDirection: "row",
	},
	input: {
		fontSize: 28,
		color: "#000000",
	},
});
