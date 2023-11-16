import stars from "../../assets/icons/stars.png";
function SingleReview({ review }) {
	const { comment, avatar, name, position } = review;
	return (
		<article className="text-white border-[1px] border-black-v-700 rounded-2xl p-10">
			<img src={stars} alt="stars icons" className=" h-7" />
			<p className="mt-7 mb-[2.63rem] text-gray-v-200">{comment}</p>
			<div className="flex gap-5 items-center ">
				<img src={avatar} alt={`${avatar} ${name}`} className="w-[4.375rem]" />
				<div>
					<p className="text-v-md-semi capitalize text-white">{name}</p>
					<p className="text-gray-v-200 leading-7 ">{position}</p>
				</div>
			</div>
		</article>
	);
}

export default SingleReview;
