import { Product } from "@components/home/TopProducts";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import Lottie from "react-lottie";
import loadingData from "@public/searching.json";
import nothingData from "@public/found-nothing.json";
import { API_URL } from "utils/url";
import Link from "next/link";

export default function search({ categories }) {
	return (
		<div className="search-page">
			<Head>
				<title>Search | Guitarland Musical Shop Bangladesh</title>
			</Head>
			<Root categories={categories} />
		</div>
	);
}
function Root({ categories }) {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");
	const [open, setOpen] = useState(false);

	const handleChange = (e) => setSearch(e.target.value);
	return (
		<>
			<Nav handleChange={handleChange} setOpen={setOpen} />
			<SearchResults search={search} filter={filter} />
			{open && (
				<Filter
					setFilter={setFilter}
					setOpen={setOpen}
					categories={categories}
				/>
			)}
		</>
	);
}

function Nav({ handleChange, setOpen }) {
	return (
		<div className="nav">
			<div className="logo">
				<Link href="/">
					<img src="/images/logo.svg" alt="logo image" />
				</Link>
			</div>
			<div className="search-field">
				<input
					type="text"
					className="small"
					placeholder="Search here..."
					onChange={handleChange}
				/>
				<BiSearch size={25} />
			</div>
			<div className="filter">
				<button className="filter-button small" onClick={() => setOpen(true)}>
					<FaFilter size={20} />
				</button>
			</div>
		</div>
	);
}

function SearchResults({ search, filter }) {
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);
	const [initial, setInitial] = useState(true);
	const getResult = async () => {
		const res = await fetch(
			API_URL + "/products?Title_contains=" + search + filter
		);
		const products = await res.json();
		setResult(products);
		setLoading(false);
	};
	useEffect(() => {
		if (search.length > 0) {
			if (initial) setInitial(false);
			if (!loading) setLoading(true);
			getResult();
		} else setResult([]);
	}, [search, filter]);
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: loadingData,
	};
	return (
		<div className="results">
			{(!initial || loading) && result.length == 0 && (
				<div className="animation-wrapper">
					{loading && <Lottie options={defaultOptions} />}
					{!loading && !initial && (
						<>
							<Lottie
								options={{ ...defaultOptions, animationData: nothingData }}
							/>
							<h1 className="large warning">Found Nothing</h1>
						</>
					)}
				</div>
			)}
			{initial && <h1 className="large">Search For Your Musical Instrument</h1>}
			{result.length > 0 &&
				result.map((element, index) => (
					<Product
						key={index}
						image={element?.Image?.url}
						title={element?.Title}
						price={element?.price}
						id={element?.id}
						slug={element?.slug}
						description={element?.description}
					/>
				))}
		</div>
	);
}
function Filter({ setOpen, setFilter, categories }) {
	const [filterData, setFilterData] = useState({
		category: "",
		brand: "",
		from: "",
		to: "",
	});
	const handleChange = (e, input) => {
		let newFilter = { ...filterData };
		newFilter[input] = e.target.value;
		setFilterData(newFilter);
	};
	const handleFilter = (e) => {
		let newFilter = "";
		newFilter +=
			filterData.category != 0 ? "&category=" + filterData.category : "";
		newFilter +=
			filterData.brand.length != 0 ? "&brand_contains=" + filterData.brand : "";
		newFilter +=
			filterData.from.length != 0 ? "&price_gte=" + filterData.from : "";
		newFilter += filterData.to.length != 0 ? "&price_lte=" + filterData.to : "";

		setFilter(newFilter);
		setOpen(false);
	};
	return (
		<div className="filter-div">
			<div className="filter-modal">
				<div className="input-wrapper">
					<label>Instrument</label>
					<select onChange={(e) => handleChange(e, "category")}>
						<option value={0}>Select Instrument</option>
						{categories.map((element, index) => (
							<option value={element.id} key={index}>
								{element.Name}
							</option>
						))}
					</select>
				</div>
				<div className="input-wrapper">
					<label>Brand</label>
					<input
						type="text"
						placeholder="Ex: Signature"
						onChange={(e) => handleChange(e, "brand")}
					/>
				</div>
				<div className="row">
					<div className="title">Price Range</div>
					<div className="input-wrapper">
						<label>From</label>
						<input
							type="number"
							placeholder="Ex: 4500"
							onChange={(e) => handleChange(e, "from")}
						/>
					</div>
					<div className="input-wrapper">
						<label>To</label>
						<input
							type="number"
							placeholder="Ex: 10000"
							onChange={(e) => handleChange(e, "to")}
						/>
					</div>
				</div>
				<button className="button small" onClick={handleFilter}>
					Filter
				</button>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(API_URL + "/categories");
	const categories = await res.json();

	return { props: { categories } };
}
