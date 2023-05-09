export function CategoryTable({ title, description , deleteOrder }) {
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
