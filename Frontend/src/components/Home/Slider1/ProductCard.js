import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<div className="product-image">
				<img width={132} height={132} src={product.image} alt={product.title} />
			</div>
			<div className="product-details">
				{/* <h3 className="product-name">{product.title}</h3> */}
				{/* <p className="product-description">{product.description}</p> */}
				{/* <div className="product-price">${product.price}</div> */}
				{/* <button className="add-to-cart-button">Add to Cart</button> */}
			</div>
		</div>
	);
};

export default ProductCard;
