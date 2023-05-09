export function CategoryTable({ title, description }) {
	return (
		<>
			<div>{title}</div>
			<div>{description}</div>
			<div>
				<button>Eliminar</button>
			</div>
		</>
	);
}
