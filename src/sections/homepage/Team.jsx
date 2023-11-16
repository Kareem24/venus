import Person from "../../components/homepage/Person";
import { data } from "../../components/homepage/teamdata";

function Team() {
	return (
		<section className="container-v-main bg-blue-bg text-white ">
			<h2 className="text-v-lg-bold capitalize max-w-5xl m-auto text-center mb-10 md:mb-16">
				A team of amazing people
			</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 justify-center">
				{data.map((person) => (
					<Person key={person.name} person={person} />
				))}
			</div>
		</section>
	);
}

export default Team;
