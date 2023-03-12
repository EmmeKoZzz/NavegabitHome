import NavBarItem from './Navbarmenu/NavBarItem';
import DropDownMenu from './Navbarmenu/DropDownMenu';

function NavBarMenu() {
	return (
		<form
			action=""
			className="lg:flex-row lg:mb-0 mb-2 mr-auto flex flex-col pl-0 list-none h-full"
		>
			<NavBarItem name="Inicio" href="#" />
			<DropDownMenu />
			<NavBarItem name="Productos" href="#" />
			<NavBarItem name="Nosotros" href="#" />
			<NavBarItem name="Contactos" href="#" />
		</form>
	);
}

export default NavBarMenu;
