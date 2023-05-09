export function ColorInput() {
	return (
		<label htmlFor="color" className="text-xl mt-6 flex items-center gap-4">
			<span>Color de la categoria</span>
            <div>
			    <input type="color" id="color" />
            </div>
		</label>
	);
}
