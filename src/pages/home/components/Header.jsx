export function Header(){
    return <header className="bg-zinc-900 p-2 flex justify-between">
        <img className="w-32" src="images/logo.png" alt="Logo de aluraflix" />
        <button className="text-white border-white px-2 border-2 hover:bg-white hover:text-black transition-colors">
            Nuevo Video
        </button>
    </header>
}