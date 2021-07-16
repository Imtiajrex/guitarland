import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_PK);
export default function PaymentSection() {
	return (
		<div className="payment-section">
			<Details />
			<Payment />
		</div>
	);
}
function Details() {
	return (
		<div className="details">
			<div className="number">1</div>
			<div className="title regular">Billing</div>
			<div className="input-wrapper">
				<label>Full Name</label>
				<input className="input" />
			</div>
			<div className="input-wrapper">
				<label>Email</label>
				<input className="input" />
			</div>
			<div className="input-wrapper">
				<label>Street Address</label>
				<input className="input" />
			</div>
			<div className="input-wrapper">
				<label>City</label>
				<input className="input" />
			</div>
			<div className="row">
				<div className="input-wrapper">
					<label>Postal Code</label>
					<input className="input" />
				</div>
				<div className="input-wrapper">
					<label>District</label>
					<input className="input" />
				</div>
			</div>
			<div className="input-wrapper">
				<label>Country</label>
				<input className="input" disabled value="Bangladesh" />
			</div>
			<button className="button">Continue To Payment</button>
		</div>
	);
}
function Payment() {
	return (
		<div className="payment">
			<button className="button">Execute Payment</button>
		</div>
	);
}
