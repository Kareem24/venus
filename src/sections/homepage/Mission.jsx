import { Link } from "react-router-dom";
import missionimg1 from "../../assets/images/mission-img-1.webp";
import missionimg2 from "../../assets/images/mission-img-2.webp";
import Button from "../../components/Button";
function Mission() {
	return (
		<section className="container-v-main bg-black-v-dark">
			<div className="grid md:grid-cols-2 items-center md:flex-row gap-10 ">
				<div className="order-1 md:-order-1">
					<img
						src={missionimg1}
						alt=" a male holding a pen making a gesture of speaking to a lady, they are both sitting down"
						className=""
						width={610}
						height={508}
					/>
				</div>
				<article>
					<h2 className="text-v-lg-bold text-white">
						Exceptional team, amazing story
					</h2>
					<p className="text-v-sm text-white mt-5 mb-10">
						Statement that emphasizes the importance of building and nurturing a
						strong team, and how such a team can achieve remarkable things that
						leave a lasting impact on the world.
					</p>
					<Button classname={"bg-blue-bg border-none"}>
						<Link to={"/signup"}>Join our team</Link>
					</Button>
				</article>
			</div>
			<div className="grid md:grid-cols-2 items-center mt-10 gap-10 ">
				<article>
					<h2 className="text-v-lg-bold text-white">
						Exceptional team, amazing story
					</h2>
					<p className="text-v-sm text-white mt-5 mb-10">
						Statement that emphasizes the importance of building and nurturing a
						strong team, and how such a team can achieve remarkable things that
						leave a lasting impact on the world.
					</p>
				</article>
				<div className="">
					<img
						src={missionimg2}
						alt="a  group of adult stand forming a circle and putting hands on top of each other in the middle of the circle"
						className="w-full"
						width={610}
						height={508}
					/>
				</div>
			</div>
		</section>
	);
}

export default Mission;
