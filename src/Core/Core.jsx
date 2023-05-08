import { Home } from "../pages/home/layout/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

export const dataContext = createContext(null);
export function Core() {
	const [data, setData] = useState({
		last: "",
		categories: [
            {
                title : "Front End",
                description : "Description Here!!",
                videos : [
                    "https://www.youtube.com/watch?v=q0UgClC8md4",
                    "https://www.youtube.com/watch?v=0Zb5fgO0ubE",
                ],
            },
            {
                title : "Back End",
                description : "Description Here!!",
                videos : [
                    "https://www.youtube.com/watch?v=WMeM7-JswKQ",
                    "https://www.youtube.com/watch?v=9U8EaVjuq6U",
                ],
            }
        ],
	});
	return (
		<dataContext.Provider value={{
            data,
        }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</dataContext.Provider>
	);
}
