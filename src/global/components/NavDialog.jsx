import { Dialog } from "./Dialog";
import { useNavigate } from "react-router-dom";
export function NavDialog() {
	const navigate = useNavigate();
	return (
		<Dialog className="bg-black text-white p-2 text-lg flex flex-col gap-2 w-max text-start rounded-md lg:text-base">
			<span
				className="hover:bg-white hover:text-black p-1"
				onClick={() => navigate("/create-video")}
			>
				New Video
			</span>
			<span
				className="hover:bg-white hover:text-black p-1"
				onClick={() => navigate("/create-category")}
			>
				New Category
			</span>
		</Dialog>
	);
}
