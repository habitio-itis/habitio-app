import { ApiClient } from "../api-client";

export interface Habit {
	id?: string;
	name: string;
	description?: string;
	cron?: string;
	icon?: string;
}

export const getHabits = async (): Promise<Habit[]> => {
	const { data } = await ApiClient.get("/habit");
	return data;
};