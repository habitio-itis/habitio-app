import { ApiClient } from "../api-client";

export interface Auth {
	accessToken: string,
	refreshToken: string,
}

export const login = async (username: string, password: string): Promise<Auth> => {
	const { data } = await ApiClient.post("/auth", {
		username,
		password,
	});
	return data;
};
