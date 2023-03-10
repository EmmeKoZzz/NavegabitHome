import { styleNavBarItem, styleFont } from "./NavBarItem";
import { DropDownMenuItem, DropDownMenuDivider } from "./DropDownMenuItems";
import { useRef, useState } from "react";

const DropDownMenu = () => {
	const [showDropDown, setShowDropDown] = useState(false);

	const dropMenu = useRef<HTMLUListElement>(null);
	const serviceButton = useRef<HTMLAnchorElement>(null)
 
	const handleClick = () => {
		setShowDropDown(true);

		const watcher = ({ target }: globalThis.MouseEvent): void => {
			if (target !== dropMenu.current && target !== serviceButton.current ) {
				setShowDropDown(false)
				window.removeEventListener("click", watcher);
			}
		};

		window.addEventListener("click", watcher);
	};

	return (
		<li className="navbaritem">
			<a
				href="#"

				// ASEREE no habia un flechita por ahi en alguna parte??? tenian q meter la flechita con CSS estan de madre ustedes en fin ya la arregle
				className={`${styleNavBarItem} ${styleFont} whitespace-nowrap after:inline-block after:align-[0.2rem] after:content-[""] after:border-[0.35rem] after:border-solid after:border-x-transparent after:border-b-0`}
				onClick={handleClick}
				ref={serviceButton}
			>
				{" Servicios "}
			</a>
			{/* DropDownMenu */}
			{showDropDown && (
				<ul
					className="lg:absolute lg:top-12 min-w-[10rem] py-2 px-0 m-0 text-base text-[#212529] text-left list-none bg-clip-padding border border-solid border-[rgba(0,0,0,0.175)] rounded-md bg-white mt-[1px]"
					ref={dropMenu}
				>
					<DropDownMenuItem name="Desarrollo de sistemas personalizados" />
					<DropDownMenuItem name="Diseño de Base de datos" />
					<DropDownMenuItem name="Despliegue ONLINE" />
					<DropDownMenuDivider />
					<DropDownMenuItem name="Análisis y asesoría de sistemas" />
					<DropDownMenuItem name="Soporte técnico" />
					<DropDownMenuDivider />
					<DropDownMenuItem name="Marketing digital" />
					<DropDownMenuDivider />
					<DropDownMenuItem name="SEO" />
				</ul>
			)}
		</li>
	);
};

export default DropDownMenu;
