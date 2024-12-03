// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
            <span className="text-gray-500 text-lg">Đang tải, vui lòng chờ...</span>
        </div>
    );
};

export default LoadingSpinner;
