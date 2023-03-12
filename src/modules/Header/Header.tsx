import logoLight from '../../assets/Logos/dark.webp';
import NavBarMenu from './components/NavBarMenu';
import NavBarSearch from './components/NavBarSearch';

function Header() {
  const logo = (
    <img src={logoLight} alt="logo" className="w-[200px] h-auto inline-block" />
  );

  return (
    <header className="fixed top-0 left-0 w-full z-[1000]">
      <nav className="top-0 sticky z-[1020] lg:flex-nowrap lg:justify-start flex flex-wrap justify-between p-0 bg-primary opacity-80">
        <div className="flex lg:flex-nowrap flex-wrap items-center justify-between w-full px-3 mx-auto">
          {logo}

          {/*
            NavBarSupport
          */}

          <div className="lg:flex lg:basis-auto hidden basis-full grow h-full">
            <NavBarMenu />
            <div className="flex pr-3 justify-between">
              <NavBarSearch />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
