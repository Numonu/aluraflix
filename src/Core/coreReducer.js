export const reducer = (draft, action) => {
	switch (action.type) {
		case "toggle":
			const todo = draft.find((todo) => todo.id === action.id);
			todo.done = !todo.done;
			break;
		case "add":
			draft.push({
				id: action.id,
				title: "A new todo",
				done: false,
			});
			break;
		default:
			break;
	}
};
