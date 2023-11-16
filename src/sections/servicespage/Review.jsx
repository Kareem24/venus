import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../components/Button";
import SingleReview from "../../components/servicepage/SingleReview";
import { reviews } from "./reviews";

function Review() {
	const settings = {
		className: "center",
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		centerPadding: "60px",
	};
	return (
		<section className="container-v-main bg-black-v-800 ">
			<div className="flex md:justify-between items-center flex-col md:flex-row ">
				<h2 className="text-v-lg-bold capitalize text-white">
					What people says
				</h2>
				<div className="self-start mt-6 mb-10 flex gap-[1.88rem]">
					<Button text={"arw"} classname={"text-black-v-dark bg-blue-bg"} />
					<Button text={"arw"} classname={"text-black-v-dark bg-gray-v-300"} />
				</div>
			</div>
			{/* <div className="grid grid-cols-2 gap-[1.87rem] "> */}
			<Slider {...settings}>
				{reviews.map((review, id) => {
					return <SingleReview key={id} review={review} />;
				})}
			</Slider>
			{/* </div> */}
		</section>
	);
}

export default Review;
