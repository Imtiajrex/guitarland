import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { API_URL } from "utils/url";

export default function Product({ product }) {
	console.log(product);
	return (
		<div className="product">
			<ProductImage title={product.Title} image={product?.Image?.url} />
			<ProductDetails
				id={product.id}
				image={product?.Image?.url}
				slug={product.slug}
				title={product.Title}
				price={product.price}
				description={product.Description}
				size={product.size}
				material={product.material}
				strings={product.strings}
				brand={product.brand}
				type={product.type}
				category={product.category.Name}
			/>
		</div>
	);
}
function ProductImage({ title, image }) {
	return (
		<div className="product-image">
			<img src={image} alt={title} />
		</div>
	);
}
function ProductDetails({
	title,
	price,
	description,
	size = "24",
	material,
	strings,
	brand,
	type,
	category,
	id,
	image,
	slug,
}) {
	return (
		<div className="product-details">
			<div className="title">{title}</div>
			<div className="price small">{price}৳</div>
			<div className="description-wrapper">
				<div className="header regular">Guitar Specification</div>
				<div className="description small">{description}</div>
			</div>
			<div className="underline" />
			<div className="specifics">
				<div className="item">Size: {size}"</div>
				<div className="item">Material: {material}</div>
				<div className="item">Strings: {strings}</div>
				<div className="item">Brand: {brand}</div>
				<div className="item">Type: {type}</div>
				<div className="item">Category: {category}</div>
			</div>
			<div className="cta">
				<button
					className="button snipcart-add-item"
					data-item-id={id}
					data-item-price={price}
					data-item-url={"/products/" + slug}
					data-item-description={description}
					data-item-image={image}
					data-item-name={title}
				>
					<RiShoppingBagLine size={25} color={"#fff"} /> ADD TO CART
				</button>
				<button className="button secondary">BUY NOW</button>
			</div>
		</div>
	);
}
