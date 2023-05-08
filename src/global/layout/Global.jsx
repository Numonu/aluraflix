import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export function Global(){
    return <div className="text-neutral-50">
        <div className="bg-zinc-900">
            <div className="max-w-[1200px] mx-auto">
                <Header/>
            </div>
        </div>
        <Outlet/>
    </div>
}