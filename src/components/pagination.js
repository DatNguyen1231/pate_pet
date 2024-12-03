'use client';

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const handleClick = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const getPaginationItems = () => {
        const items = [];
        const range = 2; // Khoảng cách trang hiển thị xung quanh trang hiện tại

        // Nếu tổng số trang ít hơn hoặc bằng 5, hiển thị tất cả các trang
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                items.push(i);
            }
        } else {
            // Hiển thị trang đầu tiên
            items.push(1);

            // Thêm dấu "..." nếu có nhiều trang
            if (currentPage - range > 2) items.push('...');

            // Hiển thị các trang gần với trang hiện tại
            for (let i = Math.max(currentPage - range, 2); i <= Math.min(currentPage + range, totalPages - 1); i++) {
                items.push(i);
            }

            // Thêm dấu "..." nếu cần
            if (currentPage + range < totalPages - 1) items.push('...');

            // Hiển thị trang cuối cùng
            if (totalPages > 1) items.push(totalPages);
        }

        return items;
    };

    return (
        <div className="flex items-center justify-center space-x-2 py-4">
            {/* Previous Button */}
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
            >
                Prev
            </button>

            {/* Pagination Items */}
            {getPaginationItems().map((item, index) => (
                item === '...' ? (
                    <span key={index} className="px-4 py-2 text-gray-500">...</span>
                ) : (
                    <button
                        key={index}
                        onClick={() => handleClick(item)}
                        className={`px-4 py-2 rounded-lg ${currentPage === item ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {item}
                    </button>
                )
            ))}

            {/* Next Button */}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
