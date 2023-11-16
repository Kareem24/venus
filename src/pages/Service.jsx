import Pro from "../sections/servicespage/Pro";
import Review from "../sections/servicespage/Review";
import ServiceMain from "../sections/servicespage/ServiceMain";
import EmailSubscribe from "../sections/homepage/EmailSubscribe";

function Service() {
	return (
		<>
			<ServiceMain />
			<Pro />
			<Review />
			<EmailSubscribe />
		</>
	);
}

export default Service;
