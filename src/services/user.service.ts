import { ApiClient } from "../api-client";

export interface User {
	id?: string;
	email: string;
	username: string;
}

export const register = async (username: string, email: string, password: string): Promise<User> => {
	const { data } = await ApiClient.post("/user", {
		username,
		email,
		password,
		// this is mocked because we don't have a phone number in frontend but we do in backend
		phone: "8888888887122",
	});
	return data;
};
