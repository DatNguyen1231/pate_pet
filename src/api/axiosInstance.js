'use client';
// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://192.168.1.123:8080/identity', // Linh hoạt dựa vào biến môi trường
    timeout: 10000, // Timeout 10 giây
});

axiosInstance.interceptors.request.use(
    (config) => {
        // Thêm token vào headers nếu có
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); // Xử lý lỗi request
    },
);
axiosInstance.interceptors.response.use(
    (response) => response, // Thành công, trả về dữ liệu gốc
    async (error) => {
        if (error.response && error.response.status === 401) {
            // Ví dụ: Refresh token nếu có cơ chế này
            try {
                const originalRequest = error.config; // Lấy request ban đầu
                const refreshToken = { token: localStorage.getItem('token') }
                if (refreshToken) {
                    const res = await axios.post('http://localhost:8080/identity/auth/token', {
                        refreshToken,
                    });

                    // Lưu Access Token mới
                    localStorage.setItem('token', res.data.accessToken);

                    // Gửi lại request gốc với token mới
                    originalRequest.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
                    return axios(originalRequest);
                }
            } catch (refreshError) {
                // Xử lý nếu refresh token thất bại
                console.error('Refresh token thất bại:', refreshError);
            }
        }

        return Promise.reject(error); // Không xử lý được, trả lỗi về
    },
);


axiosInstance.interceptors.response.use(
    (response) => response, // Trả dữ liệu gốc nếu thành công
    async (error) => {
        // Kiểm tra lỗi 401 (Unauthorized)
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized. Token có thể đã hết hạn.');
            // Xử lý refresh token nếu cần ở đây
        }
        return Promise.reject(error); // Trả lỗi về nơi gọi
    },
);

export default axiosInstance;
