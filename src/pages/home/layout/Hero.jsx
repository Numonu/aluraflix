import { Badge } from "../../../global/components/Badge";
import { Video } from "../../../global/components/Video";

export function Hero() {
	return (
		<div className="py-4 px-1 flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				<Badge className="bg-sky-500">
                    Front End
                </Badge>
				<h2 className="text-3xl">
                    Challenge React
                </h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio rerum ab amet, accusantium dolorum aperiam eum iusto asperiores eveniet.
				</p>
			</div>
			<div className="w-full max-w-md mx-auto">
                <Video/>
            </div>
		</div>
	);
}
