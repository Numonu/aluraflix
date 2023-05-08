import { Badge } from "./Badge";
import { Carousel } from "./Carousel";

export function Category({ videos, title, badgeBackground }) {
	return (
		<div>
			<Badge style={{ backgroundColor: badgeBackground }}>
				{title || "Empty"}
			</Badge>
			<Carousel videos={videos}/>
		</div>
	);
}
