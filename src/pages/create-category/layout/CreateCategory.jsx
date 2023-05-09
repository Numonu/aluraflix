import { Input } from "../components/Input";

export function CreateCategory() {
	return (
		<div className="max-w-[1200px] mx-auto px-2">
			<h1 className="text-2xl text-center uppercase">
				Create Category
			</h1>
			<div className="flex flex-col">
				<Input label="Title"/>
			</div>
		</div>
	);
}
