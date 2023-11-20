import Stats from "../sections/careerpage/Stats";
import Header from "../sections/careerpage/Header";
import JobList from "../sections/careerpage/JobList";
import EmailSubscribe from "../sections/homepage/EmailSubscribe";

function Career() {
	return (
		<>
			<Header />
			<Stats />
			<JobList />
			<EmailSubscribe />
		</>
	);
}

export default Career;
