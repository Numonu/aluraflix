import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect } from "react";
import { Global } from "../global/layout/Global";
import { Main } from "../pages/home/layout/Main";
import { CreateCategory } from "../pages/create-category/layout/CreateCategory";
import { useReducer } from "react";
import { reducer } from "./coreReducer";
import { CreateVideo } from "../pages/create-video/layout/CreateVideo";

export const dataContext = createContext(null);
const dataExample = [
	
];
export function Core() {
	const [data, dispatch] = useReducer(reducer() , [...dataExample]);

	useEffect(() => {
		localStorage.data && dispatch({
			type : "fill",
			data : JSON.parse(localStorage.data)
		})
		return () => {
			
		}
	} , [])

	useEffect(() => {
		localStorage.data = JSON.stringify(data);
	} ,[data])

	return (
		<dataContext.Provider value={{
			data,
			dispatch
		}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Global />}>
						<Route index element={<Main />} />
						<Route
							path="create-category"
							element={<CreateCategory />}
						/>
						<Route
							path="create-video"
							element={<CreateVideo />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</dataContext.Provider>
	);
}
