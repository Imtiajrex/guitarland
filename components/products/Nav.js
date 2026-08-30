import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/ri";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next//router";
export default function Nav() {
	const router = useRouter();
	return (
		<div className="nav">
			<div className="back">
				<Link href="/">
					<IoIosArrowBack size={20} color={"#3F3F44"} />
				</Link>
			</div>
			<div className="logo">
				<Link href="/">
					<img src="/images/logo.svg" loading="eager" alt="logo" />
				</Link>
			</div>
			<div className="menu">
				<Link href="search">
					<div className="item">
						<BiSearchAlt size={20} color={"#3F3F44"} />
					</div>
				</Link>

				<div className="item snipcart-checkout">
					<RiShoppingBagLine size={20} color={"#3F3F44"} />
				</div>
			</div>
		</div>
	);
}
