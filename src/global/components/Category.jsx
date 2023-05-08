import { useContext } from "react";
import { CategoryContex } from "../../pages/home/layout/Main";
import { Badge } from "./Badge";
import { Carousel } from "./Carousel";

export function Category({ videos, title }) {
    const { color } = useContext(CategoryContex);
	return (
		<div className="flex flex-col gap-4">
			<Badge style={{ backgroundColor: color }}>
				{title || "Empty"}
			</Badge>
			<Carousel videos={videos}/>
		</div>
	);
}
