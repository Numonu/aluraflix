export function Video({ link }) {

	let videoId;
	try {
		const url = new URL(link || "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
		videoId = url.searchParams.get("v");
	} catch (error) {
		videoId = "dQw4w9WgXcQ";
	}

	return (
		<iframe
			className="w-full aspect-video max-w-lg shadow-md"
			src={`https://www.youtube-nocookie.com/embed/${videoId}`}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		></iframe>
	);
}
