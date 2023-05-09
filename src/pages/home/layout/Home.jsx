import { Header } from "../../../global/layout/Header";
import { Main } from "./Main";

export function Home(){
    return <div className="text-neutral-100">
        <div className="bg-zinc-900">
            <div className="max-w-[1200px] mx-auto">
                <Header/>
            </div>
        </div>
        <Main/>
    </div>
}