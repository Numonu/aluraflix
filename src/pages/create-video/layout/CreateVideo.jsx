import { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../../Core/Core";
import { Input } from "../../create-category/components/Input";

export function CreateVideo() {
	const { data, dispatch } = useContext(dataContext);
	const navigate = useNavigate();

	const [link, setLink] = useState("");
	const [order, setOrder] = useState(0);

	const addVideo = () => {
		if (data[0]) {
			dispatch({
				type: "add-video",
				order,
				link,
			});
			toast.success("Video agregado correctamente!");
			navigate("/aluraflix");
		} else {
			toast.error("Primero debes crear una categoria!");
		}
	};

	return (
		<div className="max-w-[700px] mx-auto px-2">
			<h1 className="text-center text-2xl py-6">Agrega un nuevo video</h1>
			<form
				className="flex flex-col gap-4"
				onSubmit={(e) => {
					e.preventDefault();
					addVideo();
				}}
			>
				<Input label="Link del video" onChangue={(e) => setLink(e)} />
				<label className="text-xl -mb-2">Categoria</label>
				<select
					className="text-black w-full p-2"
					onChange={(e) => setOrder(e.target.value)}
					required
				>
					{data.map((e, i) => (
						<option className="p-2" value={i}>
							{e.title}
						</option>
					))}
				</select>
				<button className="mx-auto bg-transparent border-2 border-red-500 p-2 px-6 text-red-500 my-6 hover:bg-red-500 hover:text-zinc-900 transition-colors">
					Agregar
				</button>
			</form>
		</div>
	);
}
