import { Header } from "./Header";
import { Main } from "./Main";

export function Home(){
    return <div className="text-neutral-100">
        <div className="bg-zinc-900 px-2">
            <div className="max-w-[1200px] mx-auto">
                <Header/>
                <Main/>
            </div>
        </div>
    </div>
}