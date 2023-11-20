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
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		cssEase: "ease-in",
		responsive: [
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};
	return (
		<section className="container-v-main bg-black-v-800 ">
			<div className="text-left ">
				<h2 className="text-v-lg-bold capitalize text-white mb-16">
					What people says
				</h2>
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
