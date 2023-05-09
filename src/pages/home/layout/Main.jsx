import { useContext } from "react";
import { createContext } from "react";
import { dataContext } from "../../../Core/Core";
import { Category } from "../components/Category";
import { Hero } from "./Hero";

export const CategoryContex = createContext(null);
export function Main() {
	const data = useContext(dataContext);
	return (
		<main>
			<div className="bg-cover bg-[url(https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg)] px-2">
				<div className="max-w-[1200px] mx-auto">
					<Hero />
				</div>
			</div>
			<div className="bg-zinc-900 py-6 px-2">
				<div className="max-w-[1200px] mx-auto">
					<div className="flex flex-col gap-6">
						{data.map((e) => {
							return (
								<CategoryContex.Provider value={e}>
									<Category />
								</CategoryContex.Provider>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
