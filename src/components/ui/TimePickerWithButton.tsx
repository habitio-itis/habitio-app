/**
 * @author: CHIKIRIAY
 * @created: 5/18/23
 * @Time: 2:46 AM
 */
import { StyleSheet } from "react-native";
import TimePicker from "@Components/ui/TimePicker";
import { CustomBigButton } from "@Components/ui/CustomBigButton";
import React, { Dispatch, SetStateAction } from "react";
import { TimePeriodEnum } from "../../common/types/time-period.enum";

export interface Props {
	onPress: () => void;

	text: string;

	setHour: Dispatch<SetStateAction<number>>;

	setMinute: Dispatch<SetStateAction<number>>;

	setPeriod: Dispatch<SetStateAction<TimePeriodEnum>>;
}

export const TimePickerWithButton = ({ onPress, text, setHour, setMinute, setPeriod }: Props) => {
	return (
		<>
			<TimePicker setHour={setHour} setMinute={setMinute} setPeriod={setPeriod} height={250} width={"25%"} />
			<CustomBigButton
				onPress={onPress}
				text={text}
				buttonStyle={styles.button}
				textStyle={styles.buttonText}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	button: {
		alignSelf: "center",
		bottom: 50,
		position: "absolute",
		backgroundColor: "#FFFFFF",
		borderRadius: 99,
	},
	buttonText: { color: "#292929" },
});
