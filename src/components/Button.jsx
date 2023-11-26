import PropTypes from "prop-types";

function Button({ text, classname, type, onClick, id, children }) {
	return (
		<button
			type={type}
			className={`rounded-full text-white py-2 px-7 capitalize text-v-sm border-[1px] border-gray-v-200 ${classname}`}
			onClick={onClick}
			data-id={id}>
			{text}
			{children}
		</button>
	);
}
Button.propTypes = {
	text: PropTypes.string,
	classname: PropTypes.string,
	type: PropTypes.oneOf(["submit", "reset", "button"]),
	onClick: PropTypes.func,
	id: PropTypes.number,
	children: PropTypes.elementType,
};
export default Button;
