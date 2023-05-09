import { produce } from "immer";

export const reducer = () => {
	return produce((draft, action) => {
		switch (action.type) {
			case "delete":
				console.log(action.order);
				draft.splice(action.order, 1);
				break;
			default:
				console.error(action.type);
				break;
		}
	});
};
