import Hero from "../sections/homepage/Hero";
import Mission from "../sections/homepage/Mission";
import Info from "../sections/homepage/Info";
import Team from "../sections/homepage/Team";
import Explore from "../sections/homepage/Explore";
import EmailSubscribe from "../sections/homepage/EmailSubscribe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function About() {
	return (
		<>
			<Navbar />
			<Hero />
			<Mission />
			<Info />
			<Team />
			<Explore />
			<EmailSubscribe />
			<Footer />
		</>
	);
}

export default About;
