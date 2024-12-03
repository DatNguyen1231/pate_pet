'use client'
import React, { useState, useEffect } from 'react';
import Carousel from "../components/carousel";
import LoginModal from '../components/Login';
import ProductList from "../components/ProductList";

import Pagination from "../components/pagination";
import { getProducts } from '@/api/api';



export default function Example() {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page); // Cập nhật trạng thái khi trang thay đổi
  };

  useEffect(() => {
    const productsData = async () => {
      try {
        const products = await getProducts(currentPage - 1, 8);
        setProducts(products.products);
        settotalPages(products.totalPages);
        console.log(products);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    productsData();
  }, [currentPage]);

  return (
    <div className="bg-white">
      <div>
        <Carousel />
      </div>
      <div className="mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Sản phẩm nổi bật</h2>
        <ProductList products={products} />
      </div>
      <div className="mt-12 grid place-items-center sm:place-items-start md:place-items-center lg:place-items-center">
        <Pagination
          currentPage={currentPage}   // Trạng thái trang hiện tại
          totalPages={totalPages}     // Tổng số trang
          onPageChange={handlePageChange} // Hàm để thay đổi trang
        />
      </div>

    </div>
  )
}
