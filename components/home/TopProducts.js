import { RiShoppingBagLine } from "react-icons/ri";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { API_URL } from "utils/url";
import Link from "next/link";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 900, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function TopProducts({ products }) {
	const Products =
		products.length > 0 &&
		products.map((product, index) => (
			<Product
				image={product.Image.url}
				key={index}
				title={product.Title}
				price={product.price}
				id={product.id}
				slug={product.slug}
				description={product.description}
			/>
		));
	return (
		<div className="top-products">
			<div className="title-wrapper">
				<div className="title large">
					Our <span>Top Products </span>
				</div>
			</div>
			<div className="products">
				<Carousel
					responsive={responsive}
					ssr={true}
					containerClass="carousel-container"
					itemClass="carousel-item"
				>
					{Products}
				</Carousel>
			</div>
		</div>
	);
}

export function Product({ image, title, price, id, slug, description }) {
	const addCart = (e) => e.preventDefault();
	return (
		<Link href={"/products/" + slug}>
			<div className="product">
				<div className="image">
					<img src={API_URL + image} alt={title} />
				</div>
				<div className="info">
					<div className="name regular">{title}</div>
					<div className="price small">{price}৳</div>
					<a
						className="link regular snipcart-add-item"
						data-item-id={id}
						data-item-price={price}
						data-item-url={"/products/" + slug}
						data-item-description={description}
						data-item-image={API_URL + image}
						data-item-name={title}
					>
						<RiShoppingBagLine size={35} color={"#ff9536"} /> Add To Cart
					</a>
				</div>
			</div>
		</Link>
	);
}
