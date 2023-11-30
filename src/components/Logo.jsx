import logo from "../assets/icons/Logo.png";
import PropTypes from "prop-types";

function Logo({ img = logo, width, height }) {
	return (
		<img
			src={img}
			alt="the brand logo"
			className="md:w-44 w-36"
			width={width}
			height={height}
		/>
	);
}
Logo.propTypes = {
	img: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default Logo;
