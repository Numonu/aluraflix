import { useState } from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { dataContext } from "../../../Core/Core";
import { Modal } from "../../../global/components/Modal";

export function CategoryTable({ title, description, deleteOrder }) {
	const { dispatch, data } = useContext(dataContext);
	const [modal, setModal] = useState(false);

	const open = () => setModal(true);
	const close = () => setModal(false);

	const handleDelete = (password) => {
		if (data[deleteOrder].password == password) {
			dispatch({
				type: "delete",
				order: deleteOrder,
			});
		}
	};

	return (
		<>
			<div>{title}</div>
			<div>{description}</div>
			<div>
				<button onClick={() => (modal ? close() : open())}>
					Eliminar
				</button>
			</div>
			{modal &&
				createPortal(
					<Modal onClose={close} onDelete={handleDelete} />,
					document.body
				)}
		</>
	);
}
