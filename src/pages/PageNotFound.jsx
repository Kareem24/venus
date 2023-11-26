import { Link } from "react-router-dom";
import image from "../assets/images/error.png";

function PageNotFound() {
	return (
		<section className="w-full  bg-black-v-dark pt-10 min-h-screen text-center">
			<div className="max-w-4xl m-auto">
				<img src={image} alt="error image" className="max-w-md m-auto " />
				<h2 className="text-5xl lg:text-8xl font font-bold text-white mt-[2.9rem] mb-12">
					<span className="text-yellow-600">SORRY,</span> THERE’S NOTHING HERE
				</h2>

				<button className="rounded-full text-white py-2 px-7 capitalize text-v-sm  bg-blue-bg">
					<Link to={"/"}>Go Home</Link>
				</button>
			</div>
		</section>
	);
}

export default PageNotFound;
