import { Badge } from "../../../global/components/Badge";
import { Video } from "../../../global/components/Video";

export function Hero() {
	return (
		<div className="py-4 px-1 grid grid-cols-1 gap-4 md:py-6 lg:grid-cols-2 lg:h-[22rem] xl:h-[25rem]">
			<div className="flex flex-col gap-4 lg:justify-center">
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
			<div className="self-center">
                <Video className="max-w-md"/>
            </div>
		</div>
	);
}
