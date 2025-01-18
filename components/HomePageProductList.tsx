import React from 'react';
import ProductCard from './ProductCard';
import Container from './Container';

const products = [
	{
		id: 1,
		names: 'Seating Chair',
		imageUrl: 'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
		originalPrice: 48,
		discountPrice: 28,
		width: 120,
		height: 150,
		discountPercentage: 20,
		rating: 4,
	},
	{
		id: 2,
		names: 'Seating Chair',
		imageUrl: 'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
		originalPrice: 48,
		discountPrice: 28,
		width: 120,
		height: 150,
		discountPercentage: 20,
		rating: 4,
	},
	{
		id: 3,
		names: 'Seating Chair',
		imageUrl: 'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
		originalPrice: 48,
		discountPrice: 28,
		width: 120,
		height: 150,
		discountPercentage: 20,
		rating: 4,
	},
	{
		id: 4,
		names: 'Seating Chair',
		imageUrl: 'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
		originalPrice: 48,
		discountPrice: 28,
		width: 120,
		height: 150,
		discountPercentage: 20,
		rating: 4,
	},
	{
		id: 5,
		names: 'Seating Chair',
		imageUrl: 'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
		originalPrice: 48,
		discountPrice: 28,
		width: 120,
		height: 150,
		discountPercentage: 20,
		rating: 4,
	},
	{
		id: 6,
		names: 'Seating Chair',
		imageUrl: 'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
		originalPrice: 48,
		discountPrice: 28,
		width: 120,
		height: 150,
		discountPercentage: 20,
		rating: 4,
	},
	{
		id: 7,
		names: 'Seating Chair',
		imageUrl: 'https://images.pexels.com/photos/8082560/pexels-photo-8082560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
		originalPrice: 48,
		discountPrice: 28,
		width: 120,
		height: 150,
		discountPercentage: 20,
		rating: 4,
	},
	// Add more products as needed
];

export const HomePageProductList: React.FC = () => {
	return (
		<div className="w-full h-auto bg-white py-2">
			<Container>
				<div className="officialvendor-allimg-container">
					{products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
				</div>
			</Container>
		</div>
	);
};
