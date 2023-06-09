import { useRef } from "react";
import { useState } from "react";

export function Input({ label , onChangue , type }) {
	const [focus, setFocus] = useState(false);
	const inputEl = useRef(null);

	const on = () => setFocus(true);
	const off = () => setFocus(inputEl.current.value ? true : false);

	return (
		<div className="flex flex-col">
			<span
				className={`relative text-xl pointer-events-none transition-transform ${
					focus
						? "translate-y-[0rem] text-red-500"
						: "translate-y-[1.7rem]"
				}`}
			>
				{label}
			</span>
			<input
				name={label.toLowerCase()}
				className={`bg-transparent border-b-2 outline-none text-lg transition-[border-color] ${focus && "border-red-500"}`}
				type={type || "text"}
				onFocus={on}
				onBlur={off}
				ref={inputEl}
				required
				onChange={e => onChangue && onChangue(e.target.value)}
			/>
		</div>
	);
}
