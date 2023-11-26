import Button from "../../components/Button";
import img from "../../assets/images/explore.webp";
function Explore() {
	return (
		<section className="container-v-main text-black-v-dark bg-white">
			<div className="flex md:justify-center items-center flex-col md:flex-row md:mb-16 mb10">
				<h2 className="text-v-lg-bold capitalize text-left">
					Explore our global network of offices
				</h2>
				<div className="self-start mt-6 mb-10 flex gap-[1.88rem]">
					<Button text={"arw"} classname={"text-black-v-dark bg-blue-bg"} />
					<Button text={"arw"} classname={"text-black-v-dark bg-gray-v-300"} />
				</div>
			</div>
			<div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
				<div>
					<img
						src={img}
						alt="three male sitting round the table with laptop in front of each person"
						className="h-full w-full"
					/>
				</div>
				<article className="bg-gray-v-100 py-7 px-6 ">
					<div>
						<p className="text-v-md-semi">San Francisco, CA</p>
						<p className="text-black-v-700 text-base mt-4 mb-5 ">
							Interdum in nec scelerisque nunc et sit venenatis enim tellus
							aliquet in lectus rhoncus non nis.
						</p>
					</div>
					<div className="border border-gray-300 border-t-[1px]"></div>
					<div className="grid md:grid-cols-2">
						<article>
							<p className="text-v-md-semi explore-headings">Address</p>
							<address className="text-black-v-700 text-base">
								2084 Isrant, San Francisco, CR 2589
							</address>
						</article>
						<article>
							<p className="text-v-md-semi explore-headings">phone number</p>
							<p className="text-black-v-700 text-base">(000) 0000-0000</p>
						</article>
						<article>
							<p className="text-v-md-semi explore-headings">email</p>
							<p className="text-black-v-700 text-base">email1234@gmail.com</p>
						</article>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Explore;
