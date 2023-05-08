import { Carousel } from "../../../global/components/Carousel";
import { Category } from "../../../global/components/Category";
import { Hero } from "./Hero";

export function Main() {
	return (
		<main>
			<div className="bg-cover bg-[url(https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg)] px-2">
				<div className="max-w-[1200px] mx-auto">
					<Hero />
				</div>
			</div>
			<div className="bg-zinc-900 px-2 py-6">
				<div className="max-w-[1200px] mx-auto">
					<Category
						title="Front End"
						badgeBackground="red"
						videos={[
							"https://www.youtube.com/watch?v=O-TAjnvWjAE",
							"https://www.youtube.com/watch?v=O-TAjnvWjAE",
						]}
					/>
				</div>
			</div>
		</main>
	);
}
