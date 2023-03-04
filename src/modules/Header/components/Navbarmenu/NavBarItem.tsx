export const styleNavBarItem:string = "lg:px-2 block px-0 my-2 no-underline transition-all hover:underline cursor-pointer";
export const styleFont: string = "font-[Telegraf] text-white text-lg border-b border-transparent"; 

const NavBarItem = ({href,name}:NavBarItem) =>{
    return(
        <li className="navbaritem">
            <a href={href} className={`${styleNavBarItem} ${styleFont}`}>{name}</a>
        </li>
    )
}


interface NavBarItem{
    name:string;
    href?:string;
}

export default NavBarItem;