export function Dialog({children}) {
	return (
		<div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2">
			{children}
		</div>
	);
}
