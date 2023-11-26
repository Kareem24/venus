import PropTypes from "prop-types";
import Button from "../Button";
import locationIcon from "../../assets/icons/Location.png";
import timeIcon from "../../assets/icons/Time-circle.png";

function JobLIsting({ job }) {
	const { title, description, time, location } = job;
	return (
		<div className="p-[2.12rem]  bg-black-v-800 rounded-[1.25rem]">
			<p className=" text-2xl leading-10 font-semibold capitalize">{title}</p>
			<p className=" leading-7 text-gray-v-200 mt-3 mb-6">{description}</p>
			<div className="flex mb-8 gap-[1.87rem] ">
				<p className=" leading-7 text-gray-v-200 flex gap-2 items-center capitalize">
					<span>
						<img src={locationIcon} alt="" />
					</span>
					<span>{location}</span>
				</p>
				<p className=" leading-7 text-gray-v-200 flex gap-2 items-center">
					<span>
						<img src={timeIcon} alt="time icon" />
					</span>
					<span>{time}</span>
				</p>
			</div>
			<Button
				text={"Apply"}
				classname={"w-full hover:bg-blue-bg hover:border-transparent"}
			/>
		</div>
	);
}
JobLIsting.propTypes = {
	job: PropTypes.object,
};
export default JobLIsting;
