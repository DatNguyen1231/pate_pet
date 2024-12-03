"use client";

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import các module
import "swiper/css"; // Import CSS chính
import "swiper/css/navigation"; // Import CSS cho Navigation
import "swiper/css/pagination"; // Import CSS cho Pagination

const images = [
    "/images/cat.jpg",
    "/images/anh-con-meo-cute.jpg",
    "/images/image.png"
];

const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Kích hoạt các module
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={src}
                        alt={`Image ${index + 1}`} // Dùng index để tạo alt cho mỗi ảnh
                        className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
