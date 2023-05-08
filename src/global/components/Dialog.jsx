export function Dialog({ children, className }) {
	return (
		<div
			className={`absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 ${className}`}
		>
			{children}
		</div>
	);
}
