import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const accessTokenKey = "token";

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

export { ApiClient };

