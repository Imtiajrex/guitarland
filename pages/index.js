import Hero from "@components/home/Hero";
import SocialProof from "@components/home/SocialProof";
import TopProducts from "@components/home/TopProducts";
import AllProducts from "@components/home/AllProducts";
import Value from "@components/home/Value";
import Head from "next/head";
import { API_URL } from "utils/url";
import Nav from "@components/home/Nav";
export default function Home({ featured, top_products, categories }) {
	return (
		<div className="home">
			<Head>
				<title>Guitar Land - A Musical Instrument Store</title>
				<link rel="icon" type="image/png" href="/icon.png" />
			</Head>
			<Nav />
			<Hero featured={featured[0]} />
			<SocialProof />
			<Value />
			<TopProducts products={top_products} />
			<AllProducts categories={categories} />
		</div>
	);
}

export async function getStaticProps() {
	let res = await fetch(API_URL + "/products?Featured=true");
	const featured = await res.json();

	res = await fetch(API_URL + "/products?TopProduct=true");
	const top_products = await res.json();

	res = await fetch(API_URL + "/categories");
	const categories = await res.json();

	return { props: { featured, top_products, categories } };
}
