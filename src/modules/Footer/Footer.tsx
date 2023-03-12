import logoLight from '../../assets/Logos/dark.webp';
import PrimaryButton from '../Components/Buttons';
import LinkSecondary from '../Components/Links';
import LeftPanelFooter from './componets/Left_Panel/LeftPanelFooter';
import RightPanelFooter from './componets/Left_Panel/RightPanelFooter';
import IssueFormFooter from './componets/Right_Panel/Issue';
import UserFormFooter from './componets/Right_Panel/User';

function Footer() {
  return (
    <section>
      <div className="flex flex-wrap text-white">
        <footer className="w-full lg:py-[3rem] flex-shrink-0 flex-wrap max-w-full pb-[2rem] block transition-all duration-300 overflow-x-hidden bg-primary m-0 px-0">
          <div className="box-content block align-baseline max-w-full mx-[5rem]">
            <nav className="lg:flex lg:flex-row lg:flex-wrap lg:w-full lg:mb-[1.65em]">
              {/* Left Panel */}
              <div className="Panel">
                <section className="py-[0.45rem] lg:text-left lg:border-r lg:border-b-0 border-r-0 border-b  border-[#7691ad] relative flex flex-wrap flex-col flex-shrink-0 basis-[17%] flex-grow-[1]">
                  <RightPanelFooter />
                  <LeftPanelFooter />
                </section>
              </div>
              {/* / Left Panel */}

              {/* Right Panel */}
              <div className="Panel">
                <div className="w-full h-full lg:flex flex-wrap lg:pl-9">
                  <form className="h-full py-2">
                    <UserFormFooter />
                    <IssueFormFooter />
                    <PrimaryButton>Enviar</PrimaryButton>
                  </form>
                </div>
              </div>
              {/* / Right Panel */}
            </nav>

            {/* Bottom Panel */}
            <div className="w-full h-fit flex flex-wrap flex-row justify-center">
              <div className="w-full flex justify-center">
                <a href="/">
                  <img src={logoLight} alt="logo" className="h-28 " />
                </a>
              </div>

              <div className="divide-x divide-[#7691ad]">
                <LinkSecondary className="px-2 underline hover:no-underline">
                  Terminos y Condiciones
                </LinkSecondary>
                <LinkSecondary className="px-2 underline hover:no-underline">
                  Politica de privacidad
                </LinkSecondary>
              </div>
            </div>
            {/* Bottom Panel */}
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
