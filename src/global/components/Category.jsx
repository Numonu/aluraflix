import { Badge } from "./Badge";
import { Carousel } from "./Carousel";

export function Category({title , badgeColor}){
    const background = `bg-[${badgeColor}]`
    return <div>
        <Badge className={background}>
            {title || "Empty"}
        </Badge>
        <Carousel/>
    </div>
}