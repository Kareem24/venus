import ProService from "../../components/servicepage/ProService";
import { proData } from "./proData";

function Pro() {
	return (
		<section className="container-v-main bg-black-v-dark">
			<h2 className="text-v-lg-bold text-white text-center w-fit m-auto">
				Professional services
			</h2>
			<p className="max-w-3xl m-auto text-center text-gray-200 mt-6 mb-16 ">
				Our expertise in security consulting and products helps to minimize
				risks. We are a reliable source of guidance for all security matters
			</p>
			<div className="grid md:grid-cols-2 gap-[1.87rem]  ">
				{proData.map((service) => (
					<ProService service={service} key={service.title} />
				))}
			</div>
		</section>
	);
}

export default Pro;
