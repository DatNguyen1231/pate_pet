import localFont from "next/font/local";
import "./globals.css";
import Navbars from "../components/Navbar";
import Footer from "../components/Footer";


// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata cho SEO
export const metadata = {
  title: "Trang Bán Pate Thú Cưng",
  description: "Tốt nhất dành cho mèo yêu của bạn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Header - Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          
          <Navbars />
        </header>

        {/* Main Content */}
        <main className="pt-[70px]">

          {/* Children Content */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </section>
        </main>
        {/* Footer */}
        <Footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" />
      </body>
    </html>
  );
}
