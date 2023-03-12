interface NavBarItemProps {
  name: string;
  href?: string;
}

function NavBarItem({ href, name }: NavBarItemProps) {
  return (
    <li className="navbaritem">
      <a href={href} className="NavBarItem NavBarFont ">
        {name}
      </a>
    </li>
  );
}

export default NavBarItem;
