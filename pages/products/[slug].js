import Nav from "@components/products/Nav";
import Product from "@components/products/Product";
import Head from "next/head";
import { API_URL } from "utils/url";

export default function product({ product }) {
	return (
		<div className="product-page">
			<Head>
				<title>{product.Title}</title>
			</Head>
			<Nav />
			<Product product={product} />
		</div>
	);
}
export async function getStaticPaths() {
	const res = await fetch(API_URL + "/products");
	const products = await res.json();
	const paths =
		products.length > 0
			? products.map((element) => ({
					params: { slug: element.slug },
			  }))
			: [];

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(API_URL + "/products?slug=" + params.slug);
	const product = await res.json();

	return { props: { product: product[0] } };
}
