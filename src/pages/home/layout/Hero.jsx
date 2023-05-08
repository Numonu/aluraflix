import { Badge } from "../../../global/components/Badge";

export function Hero() {
	return (
		<div className="py-4 px-1">
			<div className="flex flex-col gap-3">
				<Badge className="bg-sky-500">
                    FrontEnd
                </Badge>
				<h2 className="text-2xl">
                    Challenge React
                </h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eius, neque.
				</p>
			</div>
			<div>

            </div>
		</div>
	);
}
