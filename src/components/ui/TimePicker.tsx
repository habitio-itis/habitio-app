/**
 * @author: CHIKIRIAY
 * @created: 5/15/23
 * @Time: 12:58 AM
 */
import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View } from "react-native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { ItemType } from "react-native-wheel-picker-expo/src/types";
import { TimePeriodEnum } from "../../common/types/time-period.enum";

export interface ITimePicker {
	setHour: Dispatch<SetStateAction<number>>;
	setMinute: Dispatch<SetStateAction<number>>;
	setPeriod: Dispatch<SetStateAction<TimePeriodEnum>>;
	backgroundColor: string;
	width: number;
	height: number;
}

/**
 * Wheel time picker
 * @param setHour
 * @param setMinute
 * @param setPeriod
 * @param backgroundColor
 * @param width
 * @param height
 * @constructor
 */
const TimePicker = ({
	setHour,
	setMinute,
	setPeriod,
	backgroundColor,
	width,
	height,
}: ITimePicker) => {
	const hours: ItemType[] = Array.from({ length: 12 }, (_, i) => ({
		label: `${i + 1}`,
		value: i,
	}));
	const minutes: ItemType[] = Array.from({ length: 60 }, (_, i) => ({ label: `${i}`, value: i }));
	const periods: ItemType[] = [
		{ label: TimePeriodEnum.AM, value: TimePeriodEnum.AM },
		{ label: TimePeriodEnum.PM, value: TimePeriodEnum.PM },
	];
	const backgroundColorFinal = backgroundColor ?? "#3E4ACA";
	const widthFinal = width ?? 150;
	const heightFinal = height ?? 150;

	const renderHandler = (props) => (
		<Text
			style={[
				styles.text,
				{
					fontSize: props.fontSize,
					color: props.fontColor,
					textAlign: props.textAlign,
				},
			]}
		>
			{props.label}
		</Text>
	);
	return (
		<View style={styles.container}>
			<WheelPickerExpo
				backgroundColor={backgroundColorFinal}
				selectedStyle={styles.block}
				width={widthFinal}
				height={heightFinal}
				initialSelectedIndex={1}
				items={hours}
				onChange={({ item }) => setHour(item.value)}
				renderItem={renderHandler}
				haptics={true}
			/>

			<WheelPickerExpo
				backgroundColor={backgroundColorFinal}
				selectedStyle={styles.block}
				width={widthFinal}
				height={heightFinal}
				initialSelectedIndex={1}
				items={minutes}
				onChange={({ item }) => setMinute(item.value)}
				renderItem={renderHandler}
				haptics={true}
			/>

			<WheelPickerExpo
				backgroundColor={backgroundColorFinal}
				selectedStyle={styles.block}
				width={widthFinal}
				height={heightFinal}
				initialSelectedIndex={1}
				items={periods}
				onChange={({ item }) => setPeriod(item.value)}
				renderItem={renderHandler}
				haptics={true}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontFamily: "Rubik-Medium",
		fontSize: 34,
		fontWeight: "bold",
	},
	block: { borderColor: "#BCBCBC", borderWidth: 2 },
});

export default TimePicker;
