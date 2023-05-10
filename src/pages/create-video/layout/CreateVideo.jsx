import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../../Core/Core";
import { Input } from "../../create-category/components/Input";

export function CreateVideo() {
	const { data, dispatch } = useContext(dataContext);
	const navigate = useNavigate();

	const [link, setLink] = useState("");
	const [order, setOrder] = useState(0);

	const addVideo = () => {
		dispatch({
			type: "add-video",
			order,
			link,
		});
	};

	return (
		<div className="max-w-[700px] mx-auto px-2">
			<h1 className="text-center text-2xl py-6">Agrega un nuevo video</h1>
			<div className="flex flex-col gap-4">
				<Input label="Link del video" onChangue={(e) => setLink(e)} />
				<label className="text-xl -mb-2">Categoria</label>
				<select className="text-black w-full p-2" onChange={(e) => setOrder(e.target.value)}>
					{data.map((e, i) => (
						<option
							className="p-2"
							value={i}
						>
							{e.title}
						</option>
					))}
				</select>
				<button
					className="mx-auto bg-transparent border-2 border-red-500 p-2 px-6 text-red-500 my-6 hover:bg-red-500 hover:text-zinc-900 transition-colors"
					onClick={() => {
						addVideo();
						navigate("/");
					}}
				>
					Agregar
				</button>
			</div>
		</div>
	);
}
