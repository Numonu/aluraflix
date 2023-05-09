import { useState } from "react";

export function ColorInput() {
	const [color, setColor] = useState("");
	return (
		<label htmlFor="color" className="text-xl mt-6 flex items-center gap-4">
			<span>Color de la categoria</span>
			<input
            style={{backgroundColor : color}}
				className="bg-transparent border-2 border-white"
				type="color"
				id="color"
				onInput={(e) => setColor(e.target.value)}
			/>
		</label>
	);
}
