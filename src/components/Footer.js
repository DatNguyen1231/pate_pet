'use client';

import { Typography } from "@material-tailwind/react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <Typography variant="h6" className="font-semibold text-lg mb-4">
                            Pate Thú Cưng
                        </Typography>
                        <p className="text-gray-400 text-sm">
                            Hộ Kinh Doanh Bách Hoá Onl chuyên cung cấp sỉ lẻ tất cả các sản phẩm dành cho Boss để Sen tha hồ mua sắm
                            Cùng nhau trải nghiệm mua sắm tuyệt vời tại Nông Trại Thú Cưng nhé
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <Typography variant="h6" className="font-semibold text-lg mb-4">
                            Liên kết nhanh
                        </Typography>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thức ăn cho chó</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thức ăn cho mèo</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hamster</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Thông tin</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <Typography variant="h6" className="font-semibold text-lg mb-4">
                            Kết nối với chúng tôi
                        </Typography>
                        <div className="flex space-x-4">
                            {/* Facebook Icon */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>

                            {/* Instagram Icon */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7.33 2c-1.05 0-1.944.894-1.944 1.996v16.008c0 1.102.894 1.997 1.944 1.997h9.334c1.05 0 1.944-.895 1.944-1.997V3.996c0-1.102-.894-1.996-1.944-1.996H7.33zm5.334 14.667c2.52 0 4.562-2.043 4.562-4.562 0-2.52-2.042-4.562-4.562-4.562-2.519 0-4.562 2.042-4.562 4.562 0 2.519 2.043 4.562 4.562 4.562zm5.09-6.21c-.5 0-.91-.406-.91-.91s.406-.91.91-.91.91.406.91.91-.406.91-.91.91zM12 7.777c2.178 0 3.946 1.768 3.946 3.946 0 2.178-1.768 3.946-3.946 3.946-2.178 0-3.946-1.768-3.946-3.946 0-2.178 1.768-3.946 3.946-3.946z" />
                                </svg>
                            </a>

                            {/* Twitter Icon */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23.944 4.569a9.79 9.79 0 01-2.828.775 4.943 4.943 0 002.163-2.724c-.918.543-1.932.927-3.008 1.137a4.922 4.922 0 00-8.395 4.49C7.692 7.03 4.072 5.106 1.64 2.063a4.922 4.922 0 001.522 6.571A4.897 4.897 0 01.964 8.48v.061a4.922 4.922 0 003.946 4.827 4.932 4.932 0 01-2.223.084c.628 1.953 2.445 3.378 4.6 3.42a9.868 9.868 0 01-6.118 2.11c-.398 0-.789-.023-1.175-.07a13.974 13.974 0 007.548 2.213c9.056 0 14.017-7.513 14.017-14.017 0-.21-.006-.42-.017-.63A9.935 9.935 0 0024 4.591a9.785 9.785 0 01-2.056.567z" />
                                </svg>
                            </a>

                            {/* LinkedIn Icon */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.447c-.781.78-1.821 1.141-2.861 1.141h-13.172c-1.04 0-2.08-.361-2.861-1.141-.781-.78-1.141-1.82-1.141-2.861v-13.172c0-1.04.36-2.08 1.141-2.861.78-.78 1.82-1.141 2.861-1.141h13.172c1.04 0 2.08.361 2.861 1.141.781.781 1.141 1.821 1.141 2.861v13.172c0 1.041-.36 2.081-1.141 2.861zM12 16.937c.932 0 1.63-.236 2.136-.723.506-.487.759-1.085.759-1.794 0-.71-.253-1.297-.759-1.784-.506-.487-1.204-.723-2.136-.723-1.238 0-2.107.406-2.673 1.217-.566.811-.849 1.76-.849 2.784 0 1.019.283 1.933.849 2.723.566.79 1.435 1.191 2.673 1.191zm6.855-2.922c.346-.337.519-.74.519-1.225 0-.481-.173-.895-.519-1.232-.346-.337-.8-.506-1.351-.506-.535 0-.986.156-1.347.468-.36.312-.537.69-.537 1.127v2.312h-2.293v-5.644h2.293v1.008c.357-.481.925-.721 1.642-.721 1.285 0 2.148.892 2.148 2.39v3.259h-.022zM10.505 9.876h-2.283v5.644h2.283v-5.644zM9.104 5.351c-.387 0-.697.111-.95.334-.253.223-.379.505-.379.843 0 .328.126.617.379.843.253.223.563.334.95.334.387 0 .697-.111.95-.334.253-.223.379-.505.379-.843 0-.328-.126-.617-.379-.843-.253-.223-.563-.334-.95-.334z" />
                                </svg>
                            </a>

                            {/* GitHub Icon */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.801 8.207 11.397.6.11.794-.261.794-.578v-2.033c-3.338.727-4.039-1.598-4.039-1.598-.545-1.388-1.329-1.76-1.329-1.76-1.085-.742.082-.727.082-.727 1.201.085 1.832 1.231 1.832 1.231 1.067 1.828 2.799 1.299 3.491 1.001.107-.77.417-1.299.758-1.599-2.665-.303-5.466-1.335-5.466-5.926 0-1.307.47-2.374 1.243-3.21-.125-.304-.539-1.525.118-3.17 0 0 1.008-.322 3.301 1.231a11.478 11.478 0 013.017-.406c1.022 0 2.059.137 3.017.406 2.29-1.553 3.297-1.231 3.297-1.231.662 1.645.245 2.866.121 3.17.775.836 1.243 1.903 1.243 3.21 0 4.607-2.801 5.623-5.475 5.926.428.36.805.914.805 1.815v2.692c0 .318.194.694.804.578C21.562 21.801 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>

                    </div>

                    {/* Contact Section */}
                    <div>
                        <Typography variant="h6" className="font-semibold text-lg mb-4">
                            Thông tin liên hệ
                        </Typography>
                        <p className="text-gray-400 text-sm">1234 Address Street, City, Country</p>
                        <p className="text-gray-400 text-sm">+1 (123) 456-7890</p>
                        <p className="text-gray-400 text-sm">email@domain.com</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
