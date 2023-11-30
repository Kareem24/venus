import img1 from "../../assets/images/career-img-1.webp";
import img2 from "../../assets/images/career-img-2.webp";
import img3 from "../../assets/images/career-img-3.webp";
import img4 from "../../assets/images/career-img-4.webp";

function Header() {
	return (
		<section className="career  pt-16 pb-24">
			<h2 className="text-v-lg-bold max-w-[50rem] m-auto text-center">
				Find Your Passion, Build Your Career.
			</h2>
			<p className="text-v-sm text-black-v-700 max-w-[48.125rem] m-auto text-center pt-5 pb-16">
				Passion Career inspires individuals to pursue their passions and build a
				fulfilling career. It motivates individuals to take charge of their
				career paths and create work life.
			</p>
			<div className="grid grid-cols-[1fr_1.5fr_1fr]  md:grid-cols-[1fr_1.5fr_1fr_1.2fr] items-center gap-4 ">
				<img src={img1} alt="" className="w-full " />
				<img src={img2} alt="" className="w-full " />
				<img src={img3} alt="" className="w-full " />
				<img src={img4} alt="" className="w-full h-full hidden md:block" />
			</div>
		</section>
	);
}

export default Header;
