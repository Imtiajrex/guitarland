import Order from "@components/checkout/Order";
import PaymentSection from "@components/checkout/PaymentSection";
import Head from "next/head";

export default function checkout() {
	return (
		<div className="checkout-page">
			<Head>
				<title>Checkout Guitarland</title>
			</Head>
			<div className="checkout">
				<PaymentSection />
				<Order />
			</div>
		</div>
	);
}
