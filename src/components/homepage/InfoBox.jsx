import PropTypes from "prop-types";
function InfoBox({ info }) {
	const { title, body, icon } = info;
	return (
		<div className="max-w-sm border-[1px] border-gray-v-300 rounded-md container-v-sm hover:bg-blue-bg hover:border-transparent">
			<img src={icon} alt={title} className="w-16" width={64} height={64} />
			<p className="text-white text-v-md-semi mt-10 mb-4 items-center align-middle ">
				{title}
			</p>
			<p className="text-gray-v-200 text-base ">{body}</p>
		</div>
	);
}
InfoBox.propTypes = {
	info: PropTypes.number,
};
export default InfoBox;
