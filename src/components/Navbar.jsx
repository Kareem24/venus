import { Link, NavLink } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.png";
import Button from "./Button";
import Logo from "./Logo";
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
	return (
		<nav className="flex container-v-main py-5 md:py-7 bg-black-v-dark items-center justify-between">
			<Logo width={176} height={34} />

			<ul className="hidden md:flex text-gray-v-200 gap-9 capitalize">
				{links.map(({ name, path }) => (
					<li key={name} className="hover:text-white">
						<NavLink to={`${path}`}>{name}</NavLink>
					</li>
				))}
			</ul>
			<div>
				<Button classname={"border-2 border-white hidden md:block"}>
					<Link to={"/signup"}> get started</Link>
				</Button>

				<img src={hamburger} alt="menu icon" className="md:hidden" />
			</div>
		</nav>
	);
}

export default Navbar;
