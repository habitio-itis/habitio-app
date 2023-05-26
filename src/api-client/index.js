import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const accessTokenKey = "token";
export const refreshTokenKey ="refreshToken";

const API_URL = "http://localhost:8081/api/v1";

const ApiClient = axios.create({
	baseURL: API_URL,
});

function isAxiosHeaders(value) {
	return value && typeof value.set === "function";
}

ApiClient.interceptors.request.use(async (config) => {
	const token = await AsyncStorage.getItem(accessTokenKey);
	if (token) {
		if (isAxiosHeaders(config.headers)) {
			config.headers.set("Authorization", `Bearer ${token}`);
		}
	}
	return config;
});

ApiClient.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;

		
			const refreshToken = await AsyncStorage.getItem(refreshTokenKey);
			const { data } = await ApiClient.post("/auth/refresh", {
				refreshToken,
			});
			
			await AsyncStorage.multiSet([[accessTokenKey, data.accessToken], [refreshTokenKey, data.refreshToken]]);

			return ApiClient(originalRequest);
		}
		return Promise.reject(error);
	},
);

export { ApiClient };

