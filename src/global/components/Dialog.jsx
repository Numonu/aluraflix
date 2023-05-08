export function Dialog({ children, className }) {
	return (
		<div
			className={`absolute left-0 bottom-0 -translate-x-full translate-y-full ${className}`}
		>
			{children}
		</div>
	);
}
