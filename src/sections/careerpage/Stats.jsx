import Counter from "../../components/careerpage/Counter";

function Stats() {
	return (
		<div className="container-v-main  text-white bg-black-v-dark ">
			<div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-7  items-center  justify-center bg-blue-bg md:rounded-[1.875rem] rounded-xl px-[5.62rem] py-[4.75rem]">
				<Counter number={150} text={"project management in a day"} />
				<Counter
					number={135}
					text={"hour save for our customer"}
					symbol={"k"}
				/>
				<Counter number={10} text={"positive user review"} symbol={"m+"} />
				<Counter number={10} text={"positive user review"} symbol={"k+"} />
			</div>
		</div>
	);
}

export default Stats;
