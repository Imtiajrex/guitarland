import { BsFillPeopleFill, BsFillStarFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
export default function Value() {
	return (
		<div className="value">
			<div className="title-wrapper">
				<div className="title large">Why Us?</div>
				<div className="underline" />
				<div className="text">HERE ARE 3 REASONS WHY</div>
			</div>
			<div className="reasons">
				<div className="reason">
					<div className="number big">
						48,394
						<br /> Likes
					</div>
					<div className="icon">
						<AiFillLike size={65} color={"#91b17f"} />
					</div>
					<div className="text small">
						on our facebook page doesn’t just show us that we’re popular. But
						that we deliver.
					</div>
				</div>
				<div className="reason">
					<div className="number big">
						54,816
						<br /> Followers
					</div>
					<div className="icon">
						<BsFillPeopleFill size={65} color={"#91b17f"} />
					</div>
					<div className="text small">
						Followers aren’t following us because they just bought from us. But
						because we connected and stay connected
					</div>
				</div>
				<div className="reason">
					<div className="number big">
						5.00
						<br /> Star
					</div>
					<div className="icon">
						<BsFillStarFill size={65} color={"#91b17f"} />
					</div>
					<div className="text small">
						ratings speaks for itself. We not only talk the talk but walk the
						walk
					</div>
				</div>
			</div>
			<button className="button regular">Find Your Guitar</button>
		</div>
	);
}
