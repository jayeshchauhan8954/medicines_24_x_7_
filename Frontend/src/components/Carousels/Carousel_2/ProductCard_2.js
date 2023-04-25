import React from 'react';
import './ProductCard_2.css';

const ProductCard = ({ carousel }) => {
	return (
		<div className="product-card">
			<div className="product-image">
				<img width={132} height={132} src={carousel.image} alt={carousel.title} />
			</div>
			<div className="product-details">
				{/* <h3 className="product-name">{carousel.title}</h3> */}
				{/* <p className="product-description">{product.description}</p> */}
				{/* <div className="product-price">${product.price}</div> */}
				{/* <button className="add-to-cart-button">Add to Cart</button> */}
			</div>
		</div>
	);
};

export default ProductCard;
