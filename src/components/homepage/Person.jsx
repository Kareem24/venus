import PropTypes from "prop-types";
import facebook from "../../assets/icons/Facebook.png";
import twitter from "../../assets/icons/Twitter.png";
import linkedin from "../../assets/icons/linkedin.png";

function Person({ person }) {
	const { name, position, image } = person;
	return (
		<div className="max-w-fit relative h-fit bg-red">
			<img src={image} alt={name} className="w-full max-w-xs" />
			<div className=" absolute bg-white text-black-v-dark  rounded-2xl py-4 px-2 bottom-3 left-4 w-11/12 text-center">
				<p className="text-v-md-semi">{name} </p>
				<p className="mb-3 mt-2 text-sm md:text-base">{position} </p>
				<div className="m-auto flex items-center justify-center gap-4">
					<img src={facebook} alt="facebook" className="w-7 cursor-pointer" />
					<img src={twitter} alt="facebook" className="w-7 cursor-pointer" />
					<img src={linkedin} alt="facebook" className="w-7 cursor-pointer" />
				</div>
			</div>
		</div>
	);
}
Person.propTypes = {
	person: PropTypes.object,
};

export default Person;
