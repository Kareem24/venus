function Counter({ number, text, symbol = "" }) {
	return (
		<div className="text-center">
			<p className="text-[3.5rem]  leading-[4.25rem] font-semibold  md:mb-3 mb-2">
				{number}
				{symbol}
			</p>
			<p className="text-base text-gray-v-100 tracking-[0.01125rem]">{text}</p>
		</div>
	);
}

export default Counter;
