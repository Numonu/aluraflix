import { Dialog } from "../../../global/components/Dialog";
export function NavDialog() {
	return (
		<Dialog className="bg-black text-white p-2 text-lg flex flex-col gap-2 w-max items-start">
			<span>New Video</span>
			<span>New Category</span>
		</Dialog>
	);
}
