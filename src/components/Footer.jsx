import Logo from "./Logo";
function Footer() {
	return (
		<footer className="container-v-main bg-black-v-dark text-white grid lg:grid-cols-4 md:grid-cols-2 gap-10 ">
			<div className=" ">
				<Logo />
				<p className="md:block hidden text-gray-v-200  text-v-sm mt-11">
					©2023 Flowgiri. All rights reserved{" "}
				</p>
			</div>
			<div>
				<p className="text-v-md-semi mb-6">Company</p>
				<ul>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">FAQ</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						about us
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						contact us
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						feedback
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						join our community{" "}
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						agent support
					</li>
				</ul>
			</div>
			<div>
				<p className="text-v-md-semi mb-6">support</p>
				<ul>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						privacy
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						contact
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						terms and condition
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						agent support
					</li>
				</ul>
			</div>
			<div>
				<p className="text-v-md-semi mb-6">follow us</p>
				<ul>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">behance</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						linkedin
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						twitter
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						{" "}
						instagram
					</li>
					<li className="text-gray-v-200 capitalize text-v-sm mb-5">
						dribble{" "}
					</li>
				</ul>
			</div>
			<p className="m-auto text-center md:hidden w-fit text-gray-v-200  text-v-sm mb-5">
				©2023 Flowgiri. All rights reserved
			</p>
		</footer>
	);
}

export default Footer;
