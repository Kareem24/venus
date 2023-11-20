import React from "react";

function Button({ text, classname, type, onClick, id }) {
	return (
		<button
			type={type}
			className={`rounded-full text-white py-2 px-7 capitalize text-v-sm border-[1px] border-gray-v-200 ${classname}`}
			onClick={onClick}
			data-id={id}>
			{text}
		</button>
	);
}

export default Button;
