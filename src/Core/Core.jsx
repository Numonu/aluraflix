import { Home } from "../pages/home/layout/Home";
import { BrowserRouter , Routes , Route } from "react-router-dom";

export function Core(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
}