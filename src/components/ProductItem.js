'use client'

const ProductItem = ({ product }) => {
    return (
        <div className="border rounded shadow p-4 text-center">
            <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
            <p className="text-orange-600 font-bold mb-4">
                {product.price.toLocaleString("vi-VN")}đ
            </p>
            <button
                className={`py-1 px-4 rounded ${product.stock
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                    }`}
            >
                {product.stock ? "Còn hàng" : "Tạm hết hàng"}
            </button>
        </div>
    );
};

export default ProductItem;
