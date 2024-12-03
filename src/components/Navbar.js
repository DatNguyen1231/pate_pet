'use client';

import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FaSearch, FaUserAlt, FaHome } from "react-icons/fa"; // Các icon từ react-icons
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import LoginModal from "../components/Login";
import LoadingSpinner from "./loading";
import { auth_logout } from "@/api/api";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(false); // Trạng thái đăng nhập
    const [username, setUsername] = useState("");  // Lưu trữ tên người dùng (nếu đăng nhập)
    const [loading, setLoading] = useState(true);  // Thêm state loading

    const cat = [
        'patemeo',
        'meomeo',
        'bommeo',
        'thuameo',
    ];

    useEffect(() => {
        // Kiểm tra token khi trang tải lại
        const token = localStorage.getItem("token");
        if (token) {
            // Nếu token tồn tại, người dùng đã đăng nhập
            setIsLogin(true);
        }
        setLoading(false);
    }, []);
    //hiển thị loading 
    if (loading) {
        return (
            <LoadingSpinner />
        );
    }

    const handleLoginSuccess = () => {
        setIsLogin(true);
        setUsername(localStorage.getItem("username")); // Lưu tên người dùng sau khi đăng nhập thành công
        window.location.reload();
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        await auth_logout();
        localStorage.clear();
        window.location.reload();
    }


    return (
        <>
            {/* Navbar */}
            <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="text-2xl font-bold text-blue-600">
                                MyBrand
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-4">
                            <div
                                className="relative text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Link
                                    href="/cat-food"
                                    className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Thức ăn cho mèo
                                </Link>
                                {/* Dropdown menu */}
                                {isHovered && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 border border-gray-200">
                                        <div className="absolute -top-2 left-6">
                                            <div className="w-3 h-3 bg-white rotate-45 border-t border-l border-gray-200"></div>
                                        </div>
                                        <ul className="py-2 text-gray-700">
                                            {cat.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={`/cat-food/${item}`}
                                                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 capitalize transition-colors duration-150"
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                Thức ăn cho chó
                            </Link>
                            <Link href="/about" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                Thức ăn cho mèo
                            </Link>
                            <Link href="/services" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                Hamster
                            </Link>
                        </div>

                        {/* Search Input */}
                        <div className="hidden md:flex items-center border border-gray-300 rounded-full px-3 py-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="outline-none border-none text-sm"
                            />
                            <FaSearch className="ml-2 text-gray-600" />
                        </div>

                        {/* Action Buttons */}

                        {isLogin && (
                            <div className="hidden md:flex items-center space-x-4">
                                <span className="text-gray-800 font-medium">{username}</span>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="text-gray-800 hover:text-blue-600 focus:outline-none"
                                >
                                    <FiUser className="w-6 h-6" size={24} />
                                </button>
                                <button
                                    onClick={handleLogout}

                                    className="text-gray-800 hover:text-blue-600 focus:outline-none"
                                >
                                    <FiShoppingCart className="w-6 h-6" size={24} />
                                </button>
                            </div>

                        )}

                        {!isLogin && (
                            <div className="hidden md:flex items-center space-x-4">

                                <button
                                    onClick={() => setShowModal(true)}
                                    className="text-gray-800 hover:text-blue-600 focus:outline-none py-2 px-4 border border-blue-600 rounded-lg transition duration-300 transform hover:scale-105"
                                >
                                    Login
                                </button>

                                <button
                                    onClick={() => handleRegister()}
                                    className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none py-2 px-4 border border-blue-600 rounded-lg transition duration-300 transform hover:scale-105"
                                >
                                    Đăng Ký
                                </button>

                            </div>
                        )}



                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-4">
                            <button className="text-gray-800 hover:text-blue-600 focus:outline-none">
                                <FiSearch className="w-6 h-6" size={24} />
                            </button>

                            <button
                                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                                onClick={() => setShowModal(true)}
                            >
                                <FiUser className="w-6 h-6" size={24} />
                            </button>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Nội dung trang Home */}

            {/* Mobile Menu */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-in duration-200 transform"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
            >
                <div className="md:hidden bg-white shadow fixed top-16 left-0 right-0 z-50">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="/"
                            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Services
                        </a>
                        <a
                            href="/contact"
                            className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </Transition>

            <div>
                {showModal && <LoginModal setShowModal={setShowModal}
                    onLoginSuccess={handleLoginSuccess}
                />}
            </div>
        </>
    );
};

export default Navbar;
