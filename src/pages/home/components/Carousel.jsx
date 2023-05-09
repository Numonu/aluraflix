import { useContext } from "react";
import { CategoryContex } from "../layout/Main";
import { Video } from "../components/Video";

export function Carousel() {

	const {videos} = useContext(CategoryContex);

	return (
		<div className="w-full flex overflow-y-hidden overflow-x-auto gap-4">
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
g