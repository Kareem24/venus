import Stats from "../sections/careerpage/Stats";
import Header from "../sections/careerpage/Header";
import JobList from "../sections/careerpage/JobList";
import EmailSubscribe from "../sections/homepage/EmailSubscribe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Career() {
	return (
		<>
			<Navbar />
			<Header />
			<Stats />
			<JobList />
			<EmailSubscribe />
			<Footer />
		</>
	);
}

export default Career;
