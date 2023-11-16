import Button from "../../components/Button";
function EmailSubscribe() {
	return (
		<section className="container-v-main bg-blue-v-100 text-white">
			<h2 className="text-v-lg-bold text-center">
				Enter your email to get the latest news
			</h2>
			<p className="text-v-sm text-gray-v-200 text-center mt-4 mb-10 md:mt-5 md:mb-16">
				You will get the latest notifications about the latest school news
			</p>
			<form className="bg-white rounded-full max-w-md pr-[0.62rem] pl-8 md:pl-6  py-2 flex items-center justify-between m-auto">
				<input
					type="email"
					name="email"
					id="name"
					placeholder="enter your email"
					className="border-none outline-none bg-transparent text-black-v-700
					capitalize"
				/>
				<Button
					type={"submit"}
					text={"subscribe"}
					classname={"bg-blue-bg"}></Button>
			</form>
		</section>
	);
}

export default EmailSubscribe;
