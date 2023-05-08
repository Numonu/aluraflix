export function Video({ link, borderColor }) {
	const url = new URL(link || "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	const videoId = url.searchParams.get("v");

	return (
		<iframe
			style={{borderColor : borderColor}}
			className="w-full aspect-video border-2"
			src={`https://www.youtube-nocookie.com/embed/${videoId}`}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		></iframe>
	);
}
