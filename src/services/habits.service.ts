import { ApiClient } from "../api-client";

export interface Habit {
	id?: string;
	name: string;
	description?: string;
	cron?: string;
	icon?: string;
	progress?: string;
}

export const getHabits = async (): Promise<Habit[]> => {
	const { data } = await ApiClient.get("/habit");
	return data;
};

export const getHabitById = async (id: string): Promise<Habit> => {
	const { data } = await ApiClient.get(`/habit/${id}`);
	return data;
};
