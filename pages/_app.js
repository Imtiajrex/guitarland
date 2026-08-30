import Head from "next/head";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="description" content="Guitar Land Musical Store" />
				<link rel="icon" type="image/png" href="/icon.png" />
				<link rel="preconnect" href="https://app.snipcart.com" />
				<link rel="preconnect" href="https://cdn.snipcart.com" />
				<link
					rel="stylesheet"
					href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
				/>
				<script
					async
					src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
				></script>
			</Head>
			<div
				hidden
				id="snipcart"
				data-api-key="MzEwMGEyNWEtOWNjMi00OGJlLTkxYmYtZWEzODg5MTAxYTBlNjM3NjIwMjgzOTcyNDM0NTUw"
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
