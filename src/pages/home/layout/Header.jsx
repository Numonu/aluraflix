import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dialog } from "../../../global/components/Dialog";
export function Header() {
	const [dialog, setDialog] = useState(false);

	const open = () => setDialog(true);
	const close = () => setDialog(false);

	return (
		<header className="bg-zinc-900 py-2 flex justify-between items-center">
			<img
				className="w-32"
				src="images/logo.png"
				alt="Logo de aluraflix"
			/>
			<button
				className="text-white relative px-1 aspect-square text-2xl hover:bg-white hover:text-black transition-colors rounded-full xl:text-xl"
				onClick={() => (dialog ? close() : open())}
			>
                <Dialog>
                    holaxd
                </Dialog>
				<BsThreeDotsVertical />
			</button>
		</header>
	);
}
