import { Hero } from "./Hero";

export function Main() {
	return (
		<main>
			<div className="bg-cover bg-[url(https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg)]">
                <div className="max-w-[1200px] mx-auto">
				    <Hero />
                </div>
			</div>
		</main>
	);
}
