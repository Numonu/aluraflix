import { BsThreeDotsVertical } from "react-icons/bs";
export function Header(){
    return <header className="bg-zinc-900 py-2 flex justify-between items-center">
        <img className="w-32" src="images/logo.png" alt="Logo de aluraflix" />
        <button className="text-white px-1 aspect-square text-2xl hover:bg-white hover:text-black transition-colors rounded-full xl:text-xl">
            <BsThreeDotsVertical/>
        </button>
    </header>
}