import { useContext } from "react";
import { CategoryContex } from "../../pages/home/layout/Main";
import { Video } from "./Video";

export function Carousel() {

	const {color , videos} = useContext(CategoryContex);

	return (
		<div className="w-full flex overflow-y-hidden overflow-x-auto gap-4">
			{videos && videos.map((e) => {
				return (
					<div className="shrink-0">
						<Video link={e} borderColor={color}/>
					</div>
				);
			})}
		</div>
	);
}
