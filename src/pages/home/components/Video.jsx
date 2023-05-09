export function Video({ link }) {

	const url = new URL(link || "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	const videoId = url.searchParams.get("v");

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
