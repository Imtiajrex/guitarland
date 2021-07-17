import { BsFillStarFill } from "react-icons/bs";
export default function SocialProof() {
	return (
		<div className="social-proof">
			<div className="title-wrapper">
				<div className="title large">People's Choice!</div>
				<div className="underline" />
				<div className="stars">
					<div>
						<BsFillStarFill size={35} color={"#fdcb9e"} />
					</div>
					<div>
						<BsFillStarFill size={35} color={"#fdcb9e"} />
					</div>
					<div>
						<BsFillStarFill size={35} color={"#fdcb9e"} />
					</div>
					<div>
						<BsFillStarFill size={35} color={"#fdcb9e"} />
					</div>
					<div>
						<BsFillStarFill size={35} color={"#fdcb9e"} />
					</div>
				</div>
				<div className="text">
					Extraordinary rating of 5 out of 5 from{" "}
					<a href="https://facebook.com" className="link">
						facebook reviews
					</a>
				</div>
			</div>
			<div className="reviews">
				<div className="review">
					<div className="reviewer">
						<img src="" className="image" />
						<a className="name ">@Ashish Dey</a>
					</div>
					<div className="text">
						I wouldn't call it the best instrumental store. but trustable. Buy
						yourself first, then recommend to others. Offline / online delivery
						anywhere. Whatever you buy, you can believe in genuine quality.
					</div>
				</div>
				<div className="review">
					<div className="reviewer">
						<img src="" className="image" />
						<a className="name ">@Ahidur Rahman Hridoy</a>
					</div>
					<div className="text">
						Guitar-Land is a name of trust . They are just awsome. Those who
						want to buy musical instrument without any doubt just go to Guitar-
						Land. ❤
					</div>
				</div>
				<div className="review">
					<div className="reviewer">
						<img src="" className="image" />
						<a className="name ">@Ashish Dey</a>
					</div>
					<div className="text">
						Their behaviour, service,products everything is really amazing.All
						the products are pretty much budget friendly.I went there with one
						of my junior to buy a guitar.I would highly recommend this store if
						you are looking for a good service and a good product.
					</div>
				</div>
			</div>

			<Link href="/search">
				<a className="button regular">FIND YOUR GUITAR</a>
			</Link>
		</div>
	);
}
