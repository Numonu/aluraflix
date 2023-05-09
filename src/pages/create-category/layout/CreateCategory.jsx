import { ColorInput } from "../components/ColorInput";
import { Input } from "../components/Input";

export function CreateCategory() {
	return (
		<div className="max-w-[1200px] mx-auto px-2">
			<h1 className="text-2xl text-center uppercase py-4">
				Crear Categoria
			</h1>
			<form
				className="flex flex-col gap-2 max-w-2xl mx-auto"
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<Input label="Title" />
				<Input label="Description" />
				<Input label="Clave secreta" />
				<ColorInput/>
				<div className="grid grid-cols-2 gap-4 text-xl mx-auto mt-6">
					<button className="bg-cyan-500 px-4 py-1">Crear</button>
					<button className="bg-zinc-100 text-black px-4 py-1">
						Limpiar
					</button>
				</div>
			</form>
		</div>
	);
}
