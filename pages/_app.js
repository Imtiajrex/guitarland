import Head from "next/head";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="description" content="Guitar Land Musical Store" />
				<link rel="icon" type="image/png" href="/icon.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
