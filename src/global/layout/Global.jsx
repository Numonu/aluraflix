import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export function Global() {
	return (
		<>
			<div className="text-neutral-50">
				<div className="bg-zinc-900">
					<div className="max-w-[1200px] mx-auto">
						<Header />
					</div>
				</div>
				<div className="min-h-screen bg-zinc-900">
					<Outlet />
				</div>
			</div>
			<Toaster/>
		</>
	);
}
