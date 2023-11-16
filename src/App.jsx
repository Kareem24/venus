import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Service from "./pages/Service";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="career" element={<Career />} />
					<Route path="service" element={<Service />} />
					<Route path="pagenotfound" element={<PageNotFound />} />
					<Route path="contact" element={<Contact />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="signin" element={<SignIn />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
