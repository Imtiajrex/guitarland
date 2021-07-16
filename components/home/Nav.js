import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/ri";
import Link from "next/link";
export default function Nav() {
	return (
		<div className="nav">
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
				<Link href="checkout">
					<div className="item">
						<RiShoppingBagLine size={20} color={"#3F3F44"} />
					</div>
				</Link>
			</div>
		</div>
	);
}
