import image from "../../assets/images/contact-img.png";
function FormSection() {
	return (
		<section className="bg-black-v-dark container-v-main">
			<h2>Get in touch with us today</h2>
			<p>
				If you have any questions about the which plan is right for you, contact
				our team and let’s schedule a call.
			</p>
			<div className="grid md:grid-cols-2">
				<div className="max-w-fit relative h-fit bg-red ">
					<img src={image} alt={name} className="w-full max-w-xs" />
					<div className=" absolute bg-white text-black-v-dark  rounded-2xl py-4 px-2 bottom-3 left-4 w-11/12 text-center">
						<p className="text-v-md-semi">h </p>
						<p className="mb-3 mt-2 text-sm md:text-base">p </p>
					</div>
				</div>
				<form action="">
					<p>fill the form below</p>
					<div className="grid grid-cols-2">
						<input type="text" />
						<input type="email" />
						<input type="number" />
						<input type="text" />
						<input type="text" />
						<select name="" id="">
							<option value="">1</option>
						</select>
					</div>
				</form>
			</div>
		</section>
	);
}

export default FormSection;
