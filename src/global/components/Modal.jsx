import { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";
import { dataContext } from "../../Core/Core";

export function Modal({ onClose, onDelete }) {
    const [password , setPassword] = useState("");
	const container = useRef(null);
   
	return (
		<div
			className="bg-black backdrop-blur-sm bg-opacity-50 fixed inset-0 flex flex-col items-center justify-center"
			onClick={(e) => {
				e.target == container.current && onClose();
			}}
			ref={container}
		>
			<div className="bg-black p-4 rounded-md w-[90%] max-w-2xl flex flex-col items-center justify-center gap-6">
				<h1 className="text-red-500 text-2xl text-center">
					Ingresa la <br /> clave secreta
				</h1>
				<input
					className="text-xl p-2 max-w-[500px] rounded-md w-[90%] border-2 border-red-500 bg-transparent text-white"
					type="password"
					placeholder="clave secreta"
                    onChange={e => setPassword(e.target.value)}
				/>
				<div className="w-[70%] max-w-[300px] grid grid-cols-2 gap-4">
					<button
						className="bg-red-500 text-lg py-2 rounded-md"
						onClick={() => onDelete(password)}
					>
						eliminar
					</button>
					<button
						className="bg-neutral-500 text-lg py-2 rounded-md"
						onClick={onClose}
					>
						cancelar
					</button>
				</div>
			</div>
		</div>
	);
}
