'use client'

import { useState } from "react";

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

const ProductCard = ({ product }) => {
    // Kiểm tra mảng images có tồn tại và có ít nhất một ảnh hay không
    const images = product.images && product.images.length > 0 ? product.images : [];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Kiểm tra nếu không có ảnh nào, sẽ không render thẻ img
    if (images.length === 0) {
        return null;
    }

    return (
        <a
            className="group relative bg-white border rounded-lg shadow-md transition-transform transform hover:scale-105  overflow-hidden cursor-pointer"
        >
            {/* Hiển thị ảnh sản phẩm */}
            <div className="w-full h-[200px] bg-gray-200 relative overflow-hidden">
                {/* Phần ảnh */}
                <div className="relative w-full h-full transition-all duration-700">
                    <img
                        alt={images[currentImageIndex]?.display_name || 'Product Image'}
                        src={images[currentImageIndex]?.url}
                        className=" w-full h-[200px] object-cover transition-transform duration-700 ease-in-out"
                    />
                </div>

                {/* Các nút chuyển ảnh */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-all duration-300 hover:bg-black"
                        >
                            ◀
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-all duration-300 hover:bg-black"
                        >
                            ▶
                        </button>
                    </>
                )}
            </div>

            {/* Thông tin sản phẩm */}
            <div className="p-4">
                <h2 className="mt-4 text-sm text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap w-full max-w-lg">
                    {product.name}
                </h2>
                <p className="mt-1 text-xl font-medium text-gray-900">
                    {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(product.price)}
                </p>
            </div>

            {/* Biểu tượng yêu thích */}
            <div className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md opacity-80 hover:opacity-100 transition-opacity duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                </svg>
            </div>
        </a>
    );
};

export default ProductList;
