import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'c44feb56-b70e-4820-b377-16368d85e4a2'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})



export const usersAPI = {
    getUsers(page = 1, pageSize = 50) {
        return axiosInstance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId){
        return axiosInstance.post(`/follow/${userId}`).then(response => response.data);
    },
    unfollow(userId){
        return axiosInstance.delete(`/follow/${userId}`).then(response => response.data);
    }
};

export const headerAPI = {
    authMe(){
        return axiosInstance.get('/auth/me').then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(userId){
        return axiosInstance.get(`profile/${userId}`).then(response => response.data)
    }
}