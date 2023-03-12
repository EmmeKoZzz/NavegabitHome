export const styleNavBarItem =
  'lg:px-2 block px-0 my-2 no-underline transition-all hover:underline cursor-pointer';

interface NavBarItemProps {
  name: string;
  href?: string;
}

function NavBarItem({ href, name }: NavBarItemProps) {
  return (
    <li className="navbaritem">
      <a href={href} className={`${styleNavBarItem} NavBarFont`}>
        {name}
      </a>
    </li>
  );
}

export default NavBarItem;
