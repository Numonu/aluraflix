import { useContext } from "react";
import { CategoryContex } from "../../pages/home/layout/Main";
import { Badge } from "./Badge";
import { Carousel } from "./Carousel";

export function Category({ videos, title , description }) {
	const { color } = useContext(CategoryContex);
	return (
		<div className="flex flex-wrap flex-col gap-4">
			<div className="flex items-center gap-2">
				<Badge style={{ backgroundColor: color }}>
					{title || "Empty"}
				</Badge>
				<p>{description}</p>
			</div>
			<Carousel videos={videos} />
		</div>
	);
}
