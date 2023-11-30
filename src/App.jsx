import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Service = lazy(() => import("./pages/Service"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Contact = lazy(() => import("./pages/Contact"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));

function App() {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/career" element={<Career />} />
						<Route path="/service" element={<Service />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
