import React from "react";

function Button({ text, classname, type }) {
	return (
		<button
			type={type}
			className={`rounded-full text-white py-2 px-7 capitalize text-v-sm ${classname}`}>
			{text}
		</button>
	);
}

export default Button;
