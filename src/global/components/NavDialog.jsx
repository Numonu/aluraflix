import { Dialog } from "./Dialog";
import { AiOutlineVideoCameraAdd , AiOutlineFolderOpen } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export function NavDialog() {
	const navigate = useNavigate();
	return (
		<Dialog className="bg-black text-white p-2 text-lg flex flex-col gap-2 w-max text-start rounded-md lg:text-base">
			<div
				className="hover:bg-white hover:text-black p-1 flex gap-2 items-center"
				onClick={() => navigate("/create-video")}
			>
				<AiOutlineVideoCameraAdd className="text-xl"/> New Video
			</div>
			<div
				className="hover:bg-white hover:text-black p-1 flex gap-2 items-center"
				onClick={() => navigate("/create-category")}
			>
				<AiOutlineFolderOpen className="text-xl"/> New Category
			</div>
		</Dialog>
	);
}
