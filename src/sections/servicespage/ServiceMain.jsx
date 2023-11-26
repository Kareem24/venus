import serviceHeader from "../../assets/images/service-header.png";
import SingleService from "../../components/servicepage/SingleService";
import { servicedata } from "./servicedata";

function ServiceMain() {
	return (
		<section className="container-v-main">
			<div className="md:flex bg-blue-bg md:items-center justify-between lg:px-[4.38rem] lg:py-6 md:px-12 py-4 md:rounded-3xl rounded-xl">
				<h2 className="text-v-lg-bold capitalize text-white w-fit m-auto md:m-0">
					our services
				</h2>
				<img
					src={serviceHeader}
					alt="a curly design"
					className="md:w-32 lg:w-44 w-full hidden md:block"
					width={177}
					height={176}
					// eslint-disable-next-line react/no-unknown-property
					fetchpriority="high"
				/>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center my-24 gap-[1.87rem] ">
				{servicedata.map((service) => (
					<SingleService key={service.title} service={service} />
				))}
			</div>
		</section>
	);
}

export default ServiceMain;
