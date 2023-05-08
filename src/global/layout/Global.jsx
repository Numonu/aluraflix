import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export function Global(){
    return <div>
        <Header/>
        <Outlet/>
    </div>
}