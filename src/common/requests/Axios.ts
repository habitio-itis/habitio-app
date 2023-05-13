/**
 * @author: CHIKIRIAY
 * @created: 4/19/23
 * @Time: 3:20 AM
 */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "@Constants/Сonstants";
import { Alert } from "react-native";

/**
 * Axios Get request
 * @param url without base url and /
 * @param config config of request (example params)
 */
export const axiosGet = <RES>(url: string, config?: AxiosRequestConfig<never>): Promise<RES> => {
	try {
		return axios.get<RES>(`${BASE_URL}/${url}`, config).then(res =>
			!res?.data ? null :
				res.data);
	} catch (err) {
		Alert.alert("Ошибка", err.message);
	}
};


/**
 * Axios Post request
 * @param url without base url and /
 * @param body body of request
 * @param config config of request (example params)
 */
export const axiosPost = <RES>(url: string, body?, config?): Promise<RES> => {
	try {
		return axios.post<RES, AxiosResponse<RES>>(`${BASE_URL}/${url}`, body, config).then(res =>
			!res?.data ? null :
				res.data);
	} catch (err) {
		Alert.alert("Ошибка", err.message);
	}
};
