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

export interface Props {
	setHour: Dispatch<SetStateAction<number>>;
	setMinute: Dispatch<SetStateAction<number>>;
	setPeriod: Dispatch<SetStateAction<TimePeriodEnum>>;
	backgroundColor?: string;
	width?: number | string;
	height?: number | string;
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
const TimePicker = ({ setHour, setMinute, setPeriod, backgroundColor, width, height }: Props) => {
	const hours: ItemType[] = Array.from({ length: 12 }, (_, i) => ({
		label: `${i + 1}`,
		value: i + 1,
	}));
	const minutes: ItemType[] = Array.from({ length: 60 }, (_, i) => ({ label: `${i}`, value: i }));
	const periods: ItemType[] = [
		{ label: TimePeriodEnum.AM, value: TimePeriodEnum.AM },
		{ label: TimePeriodEnum.PM, value: TimePeriodEnum.PM },
	];
	const backgroundColorFinal = backgroundColor ?? "#3E4ACA";
	const widthFinal = (width as number) ?? 150;
	const heightFinal = (height as number) ?? 150;

	const renderHandler = (props) => (
		<Text
			style={[
				styles.text,
				{
					fontSize: props.fontSize * 1.6,
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
		justifyContent: "center",
		overflow: "hidden",
	},
	text: {
		fontFamily: "Rubik-Medium",
		fontSize: 40,
		fontWeight: "bold",
	},
	block: { borderColor: "#BCBCBC", borderWidth: 2 },
});

export default TimePicker;
