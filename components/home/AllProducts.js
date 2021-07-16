import { useState } from "react";
import { Product } from "./TopProducts";

export default function TopProducts({ categories }) {
	const [category, setCategory] = useState(0);
	return (
		<div className="all-products">
			<div className="title-wrapper">
				<div className="title large">Musical Instrument</div>
			</div>
			<div className="categories">
				{categories.map((cat, index) => (
					<div
						className={`category regular ${
							cat.id == categories[category].id && "active"
						}`}
						key={index}
						onClick={() => setCategory(index)}
					>
						{cat.Name}
					</div>
				))}
			</div>
			<div className="products">
				{categories[category].products.length > 0 ? (
					categories[category].products.map((product, index) => (
						<Product
							image={product.Image.url}
							key={index}
							title={product.Title}
							price={product.price}
							id={product.id}
							slug={product.slug}
						/>
					))
				) : (
					<h3>No Products Found!</h3>
				)}
			</div>
		</div>
	);
}
