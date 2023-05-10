import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavDialog } from "../components/NavDialog";
import { useNavigate } from "react-router-dom";
export function Header() {
	const [dialog, setDialog] = useState(false);
	const navigate = useNavigate();

	const open = () => setDialog(true);
	const close = () => setDialog(false);

	return (
		<header className="py-2 px-2 flex justify-between items-center">
			<img
				className="w-32 cursor-pointer"
				src="images/logo.png"
				alt="Logo de aluraflix"
				onClick={() => navigate("/aluraflix")}
			/>
			<button
				className="text-white relative px-1 aspect-square text-2xl hover:bg-white hover:text-black transition-colors rounded-full xl:text-xl"
				onClick={() => (dialog ? close() : open())}
			>
				{dialog && <NavDialog />}
				<BsThreeDotsVertical />
			</button>
		</header>
	);
}
