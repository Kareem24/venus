import Explore from "../sections/homepage/Explore";
import EmailSubscribe from "../sections/homepage/EmailSubscribe";
import ContactMain from "../sections/contactpage/ContactMain";
import FormSection from "../sections/contactpage/FormSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Contact() {
	return (
		<>
			<Navbar />
			<ContactMain />
			<FormSection />
			<Explore />
			<EmailSubscribe />
			<Footer />
		</>
	);
}

export default Contact;
