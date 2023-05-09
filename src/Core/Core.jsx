import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { Global } from "../global/layout/Global";
import { Main } from "../pages/home/layout/Main";
import { CreateCategory } from "../pages/create-category/layout/CreateCategory";
import { useReducer } from "react";
import { reducer } from "./coreReducer";

export const dataContext = createContext(null);
const dataExample = [
	{
		color: "yellow",
		title: "Front End",
		description: "Description Here!!",
		videos: [
			"https://www.youtube.com/watch?v=q0UgClC8md4",
			"https://www.youtube.com/watch?v=0Zb5fgO0ubE",
		],
	},
	{
		color: "green",
		title: "Back End",
		description: "Description Here!!",
		videos: [
			"https://www.youtube.com/watch?v=WMeM7-JswKQ",
			"https://www.youtube.com/watch?v=9U8EaVjuq6U",
		],
	},
];
export function Core() {
	const [data, dispatch] = useReducer(reducer , dataExample);
	return (
		<dataContext.Provider value={data}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Global />}>
						<Route index element={<Main />} />
						<Route
							path="create-category"
							element={<CreateCategory />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</dataContext.Provider>
	);
}
