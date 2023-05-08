import { Home } from "../pages/home/layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const dataContext = createContext(null);
export function Core() {
	const [data, setData] = useState({
		last: "",
		categories: {
			frontend: ["", ""],
			backend: ["", ""],
		},
	});
	return (
		<dataContext.Provider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</dataContext.Provider>
	);
}
