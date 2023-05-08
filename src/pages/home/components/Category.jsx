import { useContext } from "react";
import { CategoryContex } from "../layout/Main";
import { Badge } from "./Badge";
import { Carousel } from "./Carousel";

export function Category() {

	const {color , title , description} = useContext(CategoryContex);
	
	return (
		<div className="flex flex-wrap flex-col gap-4">
			<div className="flex items-center gap-2">
				<Badge className="text-lg" style={{ backgroundColor: color }}>
					{title || "Empty"}
				</Badge>
				<p>{description}</p>
			</div>
			<Carousel/>
		</div>
	);
}
