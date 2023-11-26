import PropTypes from "prop-types";
function ProService({ service }) {
	const { title, icon, body } = service;
	return (
		<div className="text-white flex  flex-col lg:flex-row gap-7 md:gap-6 border-[1px] border-black-v-700 rounded-xl px-[2.13rem] py-10 hover:bg-blue-bg hover:border-transparent">
			<img src={icon} alt={`${title}-icon`} className="w-24 h-24 " />
			<article>
				<p className="text-[2.125rem] leading-10 font-semibold capitalize mb-4">
					{title}
				</p>
				<p className="text-gray-200 text-v-sm ">{body}</p>
			</article>
		</div>
	);
}
ProService.propTypes = {
	service: PropTypes.object,
};

export default ProService;
