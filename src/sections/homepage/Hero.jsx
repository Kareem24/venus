import heroImg from "../../assets/images/hero-img.webp";
function Hero() {
	return (
		<section className="container-v-main bg-blue-bg flex flex-col md:flex-row md:gap-[3.25rem] gap-10">
			<article>
				<h1 className="text-v-xlg text-white">Welcome to Our Company Story</h1>
				<p className="text-v-sm text-gray-v-200 mt-6 mb-5 md:mb-[3.75rem] md:mt-10">
					{`We are a professional web and app development agency. Our experienced
				team crafts custom digital solutions that meet our clients ' needs and
				goals.`}
				</p>
				<article className="flex flex-col gap-5 md:flex-row md:gap-[3.75rem] ">
					<div>
						<p className="text-v-md text-white mb-5">2012</p>
						<p className="text-v-sm text-white">
							{`We've been on the block for a little while`}
						</p>
					</div>
					<div>
						<p className="text-v-md text-white">$1.2bn</p>
						<p className="text-v-sm text-white">
							{`Welath we've created for our community`}
						</p>
					</div>
				</article>
			</article>

			<div>
				<img
					src={heroImg}
					alt="consist of three images ,1- team raise and join hands together ,2- a man staring at a small in his hand,3- a man discussing with the team on a table"
				/>
			</div>
		</section>
	);
}

export default Hero;
