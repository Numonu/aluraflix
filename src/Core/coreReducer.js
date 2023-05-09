export const reducer = (draft, action) => {
	switch (action.type) {
		case "delete":
			draft.splice(action.order , 1);
			break;
		default:
            console.error(action.type);
			break;
	}
};
