import image from "../../assets/images/contact-img.webp";
import Button from "../../components/Button";
import rating from "../../assets/icons/Ratings.png";
function FormSection() {
	return (
		<section className="bg-black-v-dark container-v-main">
			<h2 className="text-[2.75rem] leading-[3.375rem] md:text-[3.5rem] font-semibold text-white md:leading-[68px] max-w-4xl m-auto text-center ">
				Get in touch with us today
			</h2>
			<p className="text-gray-v-200 max-w-3xl text-center text-v-sm m-auto mt-5 mb-16">
				If you have any questions about the which plan is right for you, contact
				our team and let’s schedule a call.
			</p>
			<div className="grid lg:grid-cols-2 lg:gap-[1.87rem] gap-60">
				<div className=" relative  max-w-fit h-fit mx-auto lg:mx-0 ">
					<img src={image} alt={name} className="w-full " />
					<div className=" absolute bg-white text-black-v-dark  rounded-2xl py-[1.62rem] px-[1.87rem] -bottom-36 left-4 w-11/12 text-center">
						<img src={rating} alt="star rating" className="max-w-max m-auto" />
						<p className="text-black-v-dark text-2xl my-6 ">
							I want my team to spend time thinking abouthigh UXprob/ems, rather
							than mind essy repeating busy work
						</p>
						<p className="mb-3 mt-2 text-sm md:text-base">
							<span>Mosqur Alom </span> <span>- Co-Founder of webdesign</span>
						</p>
					</div>
				</div>
				<form
					action=""
					className="bg-black-v-800 rounded-2xl lg:py-10 lg:px-[2.13rem] px-[1.2rem] py-6">
					<p className="text-2xl font-semibold text-white mb-7">
						Fill the form below
					</p>
					<div className="grid md:grid-cols-2 md:gap-x-[1.81rem] md:gap-y-6 gap-4 ">
						<input
							type="text"
							className="form-input"
							placeholder="enter your name"
						/>
						<input
							type="email"
							className="form-input"
							placeholder="your email"
						/>
						<input type="number" className="form-input" placeholder="phone" />
						<input type="text" className="form-input" placeholder="subject" />
						<input type="text" className="form-input" placeholder="company" />

						<select
							name=""
							id="select"
							className="form-input"
							aria-label="how can we help">
							<option value="">how can we help</option>
						</select>
					</div>
					<textarea
						name="comment"
						id="comment"
						cols="30"
						rows="10"
						placeholder="your message here"
						className="bg-black-v-dark w-full mt-6"></textarea>
					<div className="flex gap-2 text-[1.125rem] text-gray-v-200 my-6">
						<input type="checkbox" name="accept" placeholder="accept" />
						<p> i agree to the privacy policy</p>
					</div>
					<Button
						text={"submit"}
						type={"submit"}
						classname={"w-full bg-blue-bg border-none"}
					/>
				</form>
			</div>
		</section>
	);
}

export default FormSection;
