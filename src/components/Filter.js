'use client'
import React from "react";
const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="w-1/4 p-4 bg-gray-100">
            <h3 className="text-lg font-bold mb-4">Danh mục sản phẩm</h3>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`cursor-pointer px-4 py-2 rounded ${selectedCategory === category
                            ? "bg-orange-500 text-white"
                            : "bg-gray-200 text-black"
                            }`}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
