import { Badge } from "../components/Badge";
import { Video } from "../components/Video";

export function Hero() {
	return (
		<div className="py-4 grid grid-cols-1 gap-4 md:py-6 lg:grid-cols-2 lg:h-[22rem] xl:h-[25rem]">
			<div className="flex flex-col gap-4 lg:justify-center">
				<Badge className="bg-sky-500">Alura</Badge>
				<h2 className="text-3xl lg:text-4xl">Challenge React</h2>
				<p>
					Los Challenges One son una forma de implementar
					el Challenge Based Learning o sea, aprendizaje basado en
					desafíos que Apple ayudó a crear. Es un mecanismo donde
					podrás comprometerte en la resolución de un problema para
					después investigar soluciones con cursos, contenido y
					charlas; ¡O incluso con el conocimiento que ya tienes!
				</p>
			</div>
			<div className="self-center">
				<Video className="max-w-md" link="https://www.youtube.com/watch?v=C_wBJGhauMY"/>
			</div>
		</div>
	);
}
