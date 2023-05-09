import { useContext } from "react";
import { dataContext } from "../../../Core/Core";
import { CategoryTable } from "../components/CategoryTable";
import { ColorInput } from "../components/ColorInput";
import { Input } from "../components/Input";

export function CreateCategory() {
	const data = useContext(dataContext);
	return (
		<div className="max-w-[1200px] mx-auto px-2">
			<h1 className="text-2xl text-center uppercase py-4">
				Crear Categoria
			</h1>
			<form
				className="flex flex-col gap-2 max-w-2xl mx-auto"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<Input label="Title" />
				<Input label="Description" />
				<Input label="Clave secreta" />
				<ColorInput />
				<div className="grid grid-cols-2 gap-4 text-xl mx-auto mt-6">
					<button className="text-red-500 border-red-500 hover:bg-red-500 hover:text-black px-4 py-1 border-2 transition-colors rounded-bl-xl">
						Crear
					</button>
					<button
						className="text-white border-white hover:bg-white hover:text-black px-4 py-1 border-2 transition-colors rounded-tr-xl"
						type="reset"
					>
						Limpiar
					</button>
				</div>
			</form>
			<div className="grid grid-cols-3 my-12 [&>*]:border-[.1rem] [&>*]:p-1 border-[.05rem] [&>*]:truncate">
				<div>Titulo</div>
				<div>Descripcion</div>
				<div>Opciones</div>
				{data.map((e , i) => (
					<CategoryTable
						key={e.title + i}
						title={e.title}
						description={e.description}
						deleteOrder={i}
					/>
				))}
			</div>
		</div>
	);
}
