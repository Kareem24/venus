import Explore from "../sections/homepage/Explore";
import EmailSubscribe from "../sections/homepage/EmailSubscribe";
import ContactMain from "../sections/contactpage/ContactMain";
import FormSection from "../sections/contactpage/FormSection";
function Contact() {
	return (
		<>
			<ContactMain />
			<FormSection />
			<Explore />
			<EmailSubscribe />
		</>
	);
}

export default Contact;
