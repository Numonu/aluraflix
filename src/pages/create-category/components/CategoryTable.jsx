import { useContext } from "react";
import { dataContext } from "../../../Core/Core";

export function CategoryTable({ title, description , deleteOrder }) {

    const {dispatch} = useContext(dataContext);

    const handleDelete = () => dispatch({
        type : "delete",
        order : deleteOrder
    });

	return (
		<>
			<div>{title}</div>
			<div>{description}</div>
			<div>
				<button onClick={handleDelete}>
                    Eliminar
                </button>
			</div>
		</>
	);
}
