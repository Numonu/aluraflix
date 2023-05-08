import { Video } from "./Video";

export function Carousel(){
    return <div className="w-full pb-4 flex overflow-y-hidden overflow-scroll gap-4">
        <Video className="shrink-0"/>
        <Video className="shrink-0"/>
    </div>
}