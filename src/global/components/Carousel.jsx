import { Video } from "./Video";

export function Carousel({ videos }) {
	return (
		<div className="w-full pb-4 flex overflow-y-hidden overflow-scroll gap-4">
			{videos && videos.map((e) => {
				return (
					<div className="shrink-0">
						<Video link={e}/>
					</div>
				);
			})}
		</div>
	);
}
