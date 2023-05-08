import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export function Global(){
    return <div className="text-neutral-50">
        <Header/>
        <Outlet/>
    </div>
}