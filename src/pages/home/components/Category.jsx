import { useContext } from "react";
import { CategoryContex } from "../layout/Main";
import { Badge } from "./Badge";
import { Carousel } from "./Carousel";

export function Category() {

	const {color , title , description} = useContext(CategoryContex);
	
	return (
		<div className="flex flex-wrap flex-col gap-4">
			<div className="">
				<Badge className="text-lg mb-2 font-bold" style={{ borderColor: color }}>
					{title || "Empty"}
				</Badge>
				<p>
					{description}
				</p>
			</div>
			<Carousel/>
		</div>
	);
}
