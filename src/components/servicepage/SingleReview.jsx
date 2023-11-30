import PropTypes from "prop-types";
import stars from "../../assets/icons/stars.png";
function SingleReview({ review }) {
	const { comment, avatar, name, position } = review;
	return (
		<article className="text-white border-[1px] border-black-v-700 rounded-2xl mr-4 md:p-10 p-5">
			<img
				src={stars}
				alt="stars icons"
				className=" h-7"
				width={144}
				height={28}
			/>
			<p className="mt-7 mb-[2.63rem] text-gray-v-200 text-v-sm">{comment}</p>
			<div className="flex gap-5 items-center ">
				<img
					src={avatar}
					alt={`${avatar} ${name}`}
					className="w-10 md:w-[4.375rem]"
					width={70}
					height={70}
				/>
				<div>
					<p className="text-v-md-semi capitalize text-white">{name}</p>
					<p className="text-gray-v-200 leading-7 ">{position}</p>
				</div>
			</div>
		</article>
	);
}
SingleReview.propTypes = {
	review: PropTypes.object,
};

export default SingleReview;
