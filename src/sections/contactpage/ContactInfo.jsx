import PropTypes from "prop-types";
function ContactInfo({ img, title, example }) {
	return (
		<div className="border-[1px] border-gray-v-200 rounded-[0.88rem]  flex gap-[0.87rem] p-5 ">
			<img src={img} alt={`${title} icon`} className="w-16" />
			<div>
				<p className="text-2xl font-semibold">{title}</p>
				<p className="text-base text-gray-v-100">{example}</p>
			</div>
		</div>
	);
}
ContactInfo.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	example: PropTypes.string,
};

export default ContactInfo;
