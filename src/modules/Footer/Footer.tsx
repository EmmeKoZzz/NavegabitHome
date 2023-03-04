import PopApps_NLeft_Footer from "./componets/Left_Panel/PopApps_NLeft_Footer";
import Clients_NLeft_Footer from "./componets/Left_Panel/Clients_NLeft_Footer";
import UserFormFooter from "./componets/Right_Panel/User";
import IssueFormFooter from "./componets/Right_Panel/Issue";
import { PrimaryButton } from "../Components/Buttons";
import { LinkSecondary } from "../Components/Links";
import logoLight from "../../assets/Logos/dark.webp";

const Footer = () => {
  const panelStyle = "w-full lg:w-1/2 lg:flex lg:flex-row";

  return (
    <>
      <section>
        <div className="flex flex-wrap text-white">
          <footer className="w-full lg:py-[3rem] flex-shrink-0 flex-wrap max-w-full pb-[2rem] block transition-all duration-300 overflow-x-hidden bg-primary m-0 px-0">
            <div className="box-content block align-baseline max-w-full mx-[5rem]">
              <nav className="lg:flex lg:flex-row lg:flex-wrap lg:w-full lg:mb-[1.65em]">
                {/* Left Panel */}
                <div className={panelStyle}>
                  <section className="py-[0.45rem] lg:text-left lg:border-r lg:border-b-0 border-r-0 border-b  border-[#7691ad] relative flex flex-wrap flex-col flex-shrink-0 basis-[17%] flex-grow-[1]">
                    <PopApps_NLeft_Footer />
                    <Clients_NLeft_Footer />
                  </section>
                </div>
                {/* / Left Panel */}

                {/* Right Panel */}
                <div className={panelStyle}>
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

              {/*Bottom Panel*/}
              <div className="w-full h-fit flex flex-wrap flex-row justify-center">
                <div className={"w-full flex justify-center"}>
                  <a href="#">
                    <img src={logoLight} alt={"logo"} className={"h-28 "} />
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
              {/*Bottom Panel*/}
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Footer;