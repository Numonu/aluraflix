import { Header } from "../components/Header";

export function Home(){
    return <div className="text-neutral-100">
        <div className="bg-zinc-900 px-4">
            <div className="max-w-[1200px] mx-auto">
                <Header/>
            </div>
        </div>
    </div>
}