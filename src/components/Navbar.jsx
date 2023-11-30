import { Link, NavLink } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.png";
import Button from "./Button";
import Logo from "./Logo";
import { useState } from "react";
const links = [
	{
		name: "about us",
		path: "/",
	},
	{
		name: "services",
		path: "/service",
	},
	{
		name: "career",
		path: "/career",
	},
	{
		name: "contact",
		path: "/contact",
	},
];
function Navbar() {
	const [showNav, setShowNav] = useState(false);
	return (
		<nav className="flex container-v-main py-5 md:py-7 bg-black-v-dark items-center justify-between relative">
			<Logo width={176} height={34} />
			<div
				className={`fixed top-0 left-0 w-full  h-screen md:block flex justify-center items-center  bg-black-v-dark md:relative md:w-fit md:h-fit z-10  ${
					showNav ? "translate-x-0" : "translate-x-full"
				} md:translate-x-0`}>
				<ul className=" flex flex-col  md:flex-row text-gray-v-200 gap-9 capitalize  ">
					{links.map(({ name, path }) => (
						<li
							key={name}
							className="hover:text-white text-4xl  md:text-lg md:font-normal">
							<NavLink to={`${path}`}>{name}</NavLink>
						</li>
					))}
				</ul>
			</div>

			<div className="px-16 md:p-0">
				<Button classname={"border-2 border-white hidden md:block"}>
					<Link to={"/signup"}> get started</Link>
				</Button>
				<button
					className="cursor-pointer md:hidden fixed z-10"
					onClick={() => setShowNav((show) => !show)}>
					<img src={hamburger} alt="menu icon" />
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
