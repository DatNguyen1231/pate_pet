'use client';
import axiosInstance from './axiosInstance';
import axios from 'axios';

export const auth_login = async (username, password) => {
    const loginInfo = { username: username, password: password };


    try {
        const response = await axios.post(`http://localhost:8080/identity/auth/token`, loginInfo,
            { headers: { 'Content-Type': 'application/json' } }
        );
        const data = response.data;
        localStorage.setItem('token', data.result.token);
        localStorage.setItem('username', username);

        return true;


    } catch (error) {
        return false;

    }
};

export const auth_logout = async () => {
    const token = { token: localStorage.getItem('token') };

    try {
        const response = await axios.post(`http://192.168.1.123:8080/identity/auth/logout`, token,
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log("lout");
        return true;

    } catch (error) {
        return false;
    }
};

export const test = async () => {

    try {
        const response = await axios.get(`http://192.168.1.123:8080/identity/test`,
            { headers: { 'Content-Type': 'application/json' } }
        );
        return response;
    } catch (error) {
        return "false";
    }
};


export const getProducts = async (pageNumber = 1, pageSize) => {
    try {
        const response = await axiosInstance.post(
            `/product/get-product/${pageNumber}/${pageSize}`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        // Có thể trả về một giá trị mặc định hoặc ném lỗi tùy vào yêu cầu
        return { products: [], total: 0 };
    }
};

