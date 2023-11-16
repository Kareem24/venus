function SingleService({ service }) {
	const { title, body, img } = service;
	return (
		<article className="text-center flex flex-col items-center justify-center gap-10">
			<img src={img} alt={title} className="w-60" />
			<div>
				<p className="text-black-v-dark text-4xl font-semibold capitalize mb-6">
					{title}
				</p>
				<p className="text-v-sm text-black-v-700">{body}</p>
			</div>
		</article>
	);
}

export default SingleService;
