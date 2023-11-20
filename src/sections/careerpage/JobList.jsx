import { useState } from "react";
import Button from "../../components/Button";
import JobLIsting from "../../components/careerpage/JobLIsting";
import { jobs } from "../../components/careerpage/jobs";

const category = jobs.reduce(
	(acc, curr) => {
		acc.push(curr.category);
		return acc;
	},
	["all"],
);
const unique = [...new Set(category)];
function JobList() {
	const [list, setList] = useState(jobs);
	const [active, setActive] = useState("all");
	function hadleClick(e) {
		const category = e.target.dataset.id;
		setActive(category);
		if (category === "all") {
			setList(jobs);
			return;
		}
		const newList = jobs.filter((job) => category === job.category);
		setList(newList);
	}
	return (
		<div className="container-v-main  text-white bg-black-v-dark ">
			<article>
				<div className="grid md:grid-cols-2 items-center  mt-[6.25rem] mb-16 gap-16 md:gap-7">
					<h1 className="text-5xl leading-[0] md:text-[4.5rem] md:leading-[4.8rem] font-bold capitalize ">
						open positions
					</h1>
					<div className="md:place-self-end place-self-start self-center flex items-center justify-between gap-4 flex-wrap">
						{unique.map((category) => {
							return (
								<Button
									text={category}
									classname={`border-[1px] border-gray-v-200  hover:bg-blue-bg hover:border-blue-bg  category
										${active === category ? "active" : ""}
										`}
									type={"button"}
									key={category}
									onClick={hadleClick}
									id={category}
								/>
							);
						})}
					</div>
				</div>
				<div className="text-white grid md:grid-cols-2 lg:grid-cols-3  gap-[1.87rem]">
					{list.map((job) => (
						<JobLIsting job={job} key={job.title} />
					))}
				</div>
			</article>
		</div>
	);
}

export default JobList;
