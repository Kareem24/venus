import PropTypes from "prop-types";
function SingleService({ service }) {
	const { title, body, img, prior } = service;
	return (
		<article className="text-center flex flex-col items-center justify-center gap-10">
			<img
				src={img}
				alt={title}
				className="w-60"
				width={240}
				height={202}
				// eslint-disable-next-line react/no-unknown-property
				fetchpriority={prior}
			/>
			<div>
				<p className="text-black-v-dark text-4xl font-semibold capitalize mb-6">
					{title}
				</p>
				<p className="text-v-sm text-black-v-700">{body}</p>
			</div>
		</article>
	);
}
SingleService.propTypes = {
	service: PropTypes.object,
};

export default SingleService;
