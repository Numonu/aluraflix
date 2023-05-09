export function Badge({ children, className, style }) {
	return (
		<div
			className={`border-l-2 w-max px-3 py-1 bg-zinc-50 bg-opacity-10 text-2xl ${className}`}
			style={style}
		>
			{children}
		</div>
	);
}
