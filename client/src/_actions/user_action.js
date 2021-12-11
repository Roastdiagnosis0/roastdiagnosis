import axios from "axios"
import {
	LOGIN_USER,
	REGISTER_USER,
	LOGOUT_USER,
	UPDATE_USER_INFO,
	GET_USER_BY_ID,
} from "./types"

let userAPI = ""
if (process.env.NODE_ENV === "production") {
	userAPI = "/api/users"
} else {
	userAPI = "http://localhost:5000/api/users"
}

export function loginUser(body) {
	const request = axios
		.post(`${userAPI}/login`, body, {
			withCredentials: true,
		})
		.then((res) => res.data)
	return {
		type: LOGIN_USER,
		payload: request,
	}
}

export function logoutUser() {
	const request = axios.get(`${userAPI}/logout`, {
		withCredentials: true,
	})
	return {
		type: LOGOUT_USER,
		payload: request,
	}
}

export function registerUser(body) {
	const request = axios.post(`${userAPI}`, body).then((res) => res.data)
	return {
		type: REGISTER_USER,
		payload: request,
	}
}

export function updateUser(body) {
	const request = axios
		.put(`${userAPI}`, body, {
			withCredentials: true,
		})
		.then((res) => res.data)
	return {
		type: UPDATE_USER_INFO,
		payload: request,
	}
}

export function getUserById(id) {
	const request = axios
		.get(`${userAPI}?id=${id}`, {
			withCredentials: true,
		})
		.then((res) => res.data)
	return {
		type: GET_USER_BY_ID,
		payload: request,
	}
}
