export function Video({ className, link }) {

	const url = new URL(link || "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	const videoId = url.searchParams.get("v");

	return (
		<div className={`border-2 ${className}`}>
			<iframe
				className="w-full aspect-video"
				src={`https://www.youtube-nocookie.com/embed/${videoId}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
}
