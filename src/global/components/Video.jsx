export function Video({className}) {
	return (
		<div className={`border-2 ${className}`}>
            <iframe
                className="w-full aspect-video"
				src="https://www.youtube-nocookie.com/embed/7tEbuCZNVeM"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullscreen
			></iframe>
        </div>
	);
}
