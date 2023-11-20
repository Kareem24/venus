import email from "../../assets/icons/email-bx.png";
import phone from "../../assets/icons/telephone-bx.png";
import location from "../../assets/icons/location-bx.png";
import ContactInfo from "./ContactInfo";
function ContactMain() {
	return (
		<section className="container-v-main text-white bg-black-v-dark">
			<article className="bg-blue-bg rounded-xl py-10 px-5 md:py-20 md:px-10 lg:py-40 lg:px-20 ">
				<h1 className=" text-v-lg-bold mb-5 md:mb-16 text-center max-w-5xl m-auto">
					Let's build something awesome together
				</h1>
				<div className="grid gap-4 md:grid-cols-2  lg:grid-cols-3 ">
					<ContactInfo
						img={email}
						example={"example@email.com"}
						title={"email"}
					/>
					<ContactInfo img={phone} example={"+ 000 000 000"} title={"phone"} />
					<ContactInfo
						img={location}
						example={"united kingdom"}
						title={"location"}
					/>
				</div>
			</article>
		</section>
	);
}

export default ContactMain;
