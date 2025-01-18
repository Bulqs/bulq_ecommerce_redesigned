// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

interface Product {
    id: number;
    names: string;
    imageUrl: string;
    imageAlt: string;
    originalPrice: number;
    discountPrice: number;
    width: number;
    height: number;
    discountPercentage: number;
    rating: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="relative max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            {/* Product Image */}
            <div className="relative">
                <Image
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    height={product.height}
                    width={product.width}
                    className="h-48 w-full object-center"
                />
                {product.discountPercentage > 0 && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                        -{product.discountPercentage}%
                    </span>
                )}
            </div>

            {/* Product Details */}
            <div className="p-4 mb-12">
                <h2 className="text-sm font-semibold text-gray-800 truncate">{product.names}</h2>
                <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                            key={i}
                            className={`${i < (product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'} w-5 h-5`}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">${product.discountPrice}</span>
                    {product.discountPrice < product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                    )}
                </div>
            </div>

            {/* Wishlist and Add to Cart Icons */}
            <div className="absolute bottom-0 flex space-x-4 bg-appTitleBgColor w-full p-2 items-center justify-between">
                <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                    <FaHeart />
                </button>
                <button className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                    <FaShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
