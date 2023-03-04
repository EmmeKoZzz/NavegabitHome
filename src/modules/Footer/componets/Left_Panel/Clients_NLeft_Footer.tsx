import {LinkSecondary} from "../../../Components/Links";
import {LPFooterButton, LPFooterUl} from "./LFooterComponets";

const Clients_NLeft_Footer = () => {
  return (
    <>
      <div className="py-[0.45rem] border-b lg:border-0 border-[#7691ad]">
        <LPFooterButton>Clientes</LPFooterButton>
      </div>
      <LPFooterUl className="columns-1">
        <li className={"columns-1"} data-order="0">
          <LinkSecondary
            href="NavLeft#"
            data-order="0"
            data-linkorder="0"
            data-ga_nav_type="footer_nav"
            data-ga_nav_tree_text="Clientes > Atención al cliente"
          >
            Atención al cliente
          </LinkSecondary>
          <div>
            <p className="text-footer-text ">(+53) 52362879</p>
            <p className="text-footer-text ">(+53) 52731881</p>
          </div>
        </li>
      </LPFooterUl>
    </>
  );
};

export default Clients_NLeft_Footer;