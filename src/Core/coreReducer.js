import { produce } from "immer";

export const reducer = () => {
	return produce((draft, action) => {
		switch (action.type) {
			case "delete":
				console.log(action.order);
				draft.splice(action.order, 1);
				break;
			case "create":
				draft.push({
					color: action.form.color,
					title: action.form.title,
					description: action.form.description,
					password: action.form.password,
					videos: [],
				});
				break;
			case "add-video":
				draft[action.order].videos.push(action.link);
				break;
			default:
				console.error(action.type);
				break;
		}
	});
};
