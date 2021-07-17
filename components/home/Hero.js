import Link from "next/link";
import { API_URL } from "utils/url";

export default function Hero({ featured }) {
	return (
		<div className="hero">
			<h1 className="top">GUITARLAND</h1>
			<h1 className="bottom">GUITARLAND</h1>
			<div className="copywriting">
				<h1 className="header large">
					GET <span>HIGH QUALITY</span> MUSICAL INSTRUMENT
				</h1>
				<p className="sub-header regular">
					We are a brand that provide you with the guitar that’s right for you.
					Our guitars are made with quality components that you will want to
					play right now!
				</p>
				<button className="button regular">FIND YOUR GUITAR</button>
			</div>
			<div className="featured">
				<div className="image">
					<img src={featured?.Image?.url} alt="Featured Product" />
				</div>
				<div className="text">
					<div className="title regular">{featured?.Title}</div>
					<Link href={`/products/${featured?.slug}`}>
						<a className="cta small">CHECK IT OUT!</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
