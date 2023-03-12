interface DropDownMenuItemProps {
	name: string;
	href?: string;
}

export function DropDownMenuItem({ name, href }: DropDownMenuItemProps) {
	return (
		<li>
			<a
				href={href}
				className="block w-full py-1 px-4 clear-both font-normal	no-underline whitespace-nowrap bg-transparent border-0 text-base font-['system-ui'] hover:underline hover:text-white hover:bg-primary cursor-pointer"
			>
				{name}
			</a>
		</li>
	);
}

export function DropDownMenuDivider() {
	return (
		<li>
			<hr className="h-0 my-2 overflow-hidden opacity-100 border-t border-t-solid border-t-primary" />
		</li>
	);
}
