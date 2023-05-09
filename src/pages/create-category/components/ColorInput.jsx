export function ColorInput({onColor}) {
	return (
		<label htmlFor="color" className="text-xl mt-6 flex items-center gap-4">
			<span>Color de la categoria</span>
			<input
				type="color"
				onInput={e => onColor(e.target.value)}
			/>
		</label>
	);
}
