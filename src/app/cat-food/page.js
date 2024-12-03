"use client";

import React, { useState } from "react";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";

import { products as productData } from "../../data/products";



const products = [
    {
        id: 1,
        name: 'Pate Catchy (5Plus) là một loại thức ăn cho mèo, có trọng lượng 70g và phù hợp cho mọi lứa tuổi của mèo',
        href: '#',
        price: 12345,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: 1000000,
        imageSrc: '/images/anh-con-meo-cute.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: 2000000,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 5000000,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 5000000,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 5000000,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 5000000,
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function Example() {
    // const [selectedCategory, setSelectedCategory] = useState("PATE");

    // // Lấy danh sách danh mục sản phẩm
    // const categories = [...new Set(productData.map((p) => p.category))];

    // // Lọc sản phẩm theo danh mục đã chọn
    // const filteredProducts = productData.filter(
    //     (p) => p.category === selectedCategory
    // );

    return (
        <div className="mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


            <ProductList products={products} />
        </div>
    );
}
