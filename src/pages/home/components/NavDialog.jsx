import { Dialog } from "./Dialog";
export function NavDialog() {
	return (
		<Dialog className="bg-black text-white p-2 text-lg flex flex-col gap-2 w-max text-start rounded-md lg:text-base">
			<span className="hover:bg-white hover:text-black p-1">New Video</span>
			<span className="hover:bg-white hover:text-black p-1">New Category</span>
		</Dialog>
	);
}
