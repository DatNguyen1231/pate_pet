'use client';
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { auth_login, test } from "@/api/api";

const LoginModal = ({ setShowModal, onLoginSuccess }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Ngừng cuộn và thêm padding để bù cho scrollbar
        // document.body.style.overflow = "hidden";
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault(); // Ngừng hành động mặc định của form (tức là không refresh trang)

        const result = await auth_login(username, password);

        if (result) {
            console.log("Login thành công:", username, password);
            onLoginSuccess(username);
            setShowModal(false);
        } else {
            localStorage.setItem('token', "data.result.token");
            console.log("Login thất bại", username, password);
            alert("Sai email hoặc mật khẩu. Vui lòng thử lại!");
        }
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={(e) => e.target.id === "modal" && setShowModal(false)}
            id="modal"
        >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-[400px] mx-4 p-6 relative">
                {/* Nút đóng */}
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={() => setShowModal(false)}
                >
                    <IoClose size={24} />
                </button>

                {/* Header */}
                <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
                    ĐĂNG NHẬP TÀI KHOẢN
                </h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Nhập email và mật khẩu của bạn:
                </p>

                {/* Form đăng nhập */}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Cập nhật giá trị username
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Cập nhật giá trị password
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
                    >
                        ĐĂNG NHẬP
                    </button>
                </form>

                {/* Social login */}
                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-2 text-sm text-gray-500">Hoặc</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <button className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                        G+ Google
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                        Facebook
                    </button>
                </div>

                {/* Links */}
                <div className="text-center text-sm text-gray-600">
                    <p>
                        Khách hàng mới?{" "}
                        <a
                            href="#"
                            className="text-blue-600 hover:underline"
                        >
                            Tạo tài khoản
                        </a>
                    </p>
                    <p>
                        Quên mật khẩu?{" "}
                        <a
                            href="#"
                            className="text-blue-600 hover:underline"
                        >
                            Khôi phục mật khẩu
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
