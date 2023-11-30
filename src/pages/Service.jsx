import Pro from "../sections/servicespage/Pro";
import Review from "../sections/servicespage/Review";
import ServiceMain from "../sections/servicespage/ServiceMain";
import EmailSubscribe from "../sections/homepage/EmailSubscribe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Service() {
	return (
		<>
			<Navbar />
			<ServiceMain />
			<Pro />
			<Review />
			<EmailSubscribe />
			<Footer />
		</>
	);
}

export default Service;
