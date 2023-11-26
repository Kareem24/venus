import signupImage from "../assets/images/signup.webp";
import logo from "../assets/icons/Logo-dark.png";
import google from "../assets/icons/google.png";
import apple from "../assets/icons/apple.png";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function SignUp() {
	return (
		<div className="grid lg:grid-cols-2">
			<article className="py-[3.13rem] lg:px-[6rem] md:px-16 px-4">
				<div className=" m-auto w-max">
					<Logo img={logo} width={176} height={33} />
				</div>
				<h2 className="text-[2.125rem] leading-[2.75rem] capitalize font-semibold mt-16 mb-2 text-center">
					sign up
				</h2>
				<p className="text-black-v-500 text-center mb-7">
					Enter details to create account
				</p>
				<div className="flex items-center gap-[0.6rem] m-auto flex-wrap justify-center">
					<Button
						classname={
							"text-black-v-dark flex items-center px-[1.63rem] gap-2"
						}>
						<img src={google} alt="google logo icon" width={30} height={30} />
						<span className="text-black-v-dark text-base ">
							sign up with google
						</span>
					</Button>
					<Button
						classname={
							"text-black-v-dark flex items-center gap-2 px-[1.63rem]"
						}>
						<img src={apple} alt="apple logo icon" width={30} height={30} />
						<span className="text-black-v-dark ext-base ">
							sign up with apple
						</span>
					</Button>
				</div>
				<div className="flex items-center gap-2 my-5">
					<span className="w-full h-[1px] bg-gray-v-100"></span>

					<p className="uppercase text-black-v-500 text-xs">or</p>
					<span className="w-full h-[1px] bg-gray-v-100"></span>
				</div>
				<form action="">
					<div className="input-wrapper">
						<label className="label" htmlFor="name">
							Your name
						</label>
						<input
							className="inputs"
							type="text"
							name="name"
							id="name"
							placeholder="Kareem Roqib"
						/>
					</div>
					<div className="input-wrapper">
						<label className="label" htmlFor="email">
							Your email
						</label>
						<input
							className="inputs"
							type="email"
							name="email"
							id="email"
							placeholder="Example@gmail.come"
						/>
					</div>
					<div className="flex gap-x-7  w-full flex-col md:flex-row">
						<div className="input-wrapper w-full ">
							<label className="label" htmlFor="password">
								password
							</label>
							<input
								className="inputs"
								type="password"
								name="password"
								id="password"
								placeholder="enter password"
							/>
						</div>
						<div className="input-wrapper w-full">
							<label className="label" htmlFor="confirm">
								confirm password
							</label>
							<input
								className="inputs"
								type="password"
								name="password"
								id="confirm"
								placeholder="confirm password"
							/>
						</div>
					</div>
					<Button
						type={"submit"}
						text={"submit"}
						classname={"bg-blue-bg w-full"}
					/>
				</form>
				<p className="mt-7 text-center">
					<span className="text-black-v-700">Already have an account ?</span>
					<span className="capitalize text-blue-v-100">
						<Link to={"/signin"}>sign in</Link>
					</span>
				</p>
			</article>
			<img
				src={signupImage}
				alt="SIGN Up design image"
				className="h-full hidden lg:block w-full"
				width={740}
				height={900}
			/>
		</div>
	);
}

export default SignUp;
