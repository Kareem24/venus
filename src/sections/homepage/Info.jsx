import InfoBox from "../../components/homepage/InfoBox";
import { infos } from "../../components/homepage/infodata";

function Info() {
	return (
		<section className="container-v-main bg-black-v-800">
			<div className=" max-w-[52rem] m-auto">
				<h2 className="text-v-lg-bold text-white text-center">
					The beliefs that influence our work
				</h2>
				<p className="text-v-sm text-gray-v-200 text-center mt-4 mb-10 md:mb-16 md:mt-5">
					Influence our work is a statement that emphasizes the importance of
					core values and principles in shaping the actions and decisions of a
					company or organization.
				</p>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-[1.88rem] justify-center">
				{infos.map((info) => (
					<InfoBox key={info.title} info={info} />
				))}
			</div>
		</section>
	);
}

export default Info;
