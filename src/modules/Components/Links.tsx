import { AnchorHTMLAttributes } from 'react';

function LinkSecondary({
	href,
	className,
	children,
}: AnchorHTMLAttributes<string>) {
	return (
		<a href={href} className={`text-footer-text hover:underline ${className}`}>
			{children}
		</a>
	);
}

export default LinkSecondary;
