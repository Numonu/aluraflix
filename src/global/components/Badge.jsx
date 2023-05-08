export function Badge({ children, className, style }) {
	return (
		<div
			className={`w-max px-3 py-1 rounded-md text-2xl ${className}`}
			style={style}
		>
			{children}
		</div>
	);
}
