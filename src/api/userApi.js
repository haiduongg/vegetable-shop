import axiosClient from './axiosClient';

const userApi = {
	getAll: (params) => {
		const url = '/user';
		return axiosClient.get(url, { params });
	},
	get: (id) => {
		const url = `/user/${id}`;
		return axiosClient.get(url);
	},
	registerUser: (user) => {
		const url = '/register';
		return axiosClient.post(url, user);
	},
	loginUser: (user) => {
		const url = '/login';
		return axiosClient.post(url, user);
	}
};

export default userApi;