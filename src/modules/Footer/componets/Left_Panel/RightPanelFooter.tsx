import LinkSecondary from '../../../Components/Links';
import { LPFooterButton, LPFooterUl } from './LFooterComponets';

function RightPanelFooter() {
  return (
    <>
      <LPFooterButton>Aplicaciones Populares</LPFooterButton>
      <LPFooterUl className="columns-2">
        <li className="mr-[1rem]" data-order="0">
          <LinkSecondary
            href="src/modules/Footer/componets#"
            data-order="0"
            data-linkorder="0"
            data-ga_nav_type="footer_nav"
            data-ga_nav_tree_text="Funciones populares > App gratuita para programar reuniones"
          >
            App gratuita para programar reuniones
          </LinkSecondary>
        </li>
        <li className="mr-[1rem]" data-order="1">
          <LinkSecondary
            href="https://www.hubspot.es/products/marketing/social-inbox"
            data-order="1"
            data-linkorder="1"
            data-ga_nav_type="footer_nav"
            data-ga_nav_tree_text="Funciones populares > Herramientas de redes sociales"
          >
            Herramientas de redes sociales
          </LinkSecondary>
        </li>
        <li className="mr-[1rem]" data-order="4">
          <LinkSecondary
            href="https://www.hubspot.es/products/marketing/ads"
            data-order="4"
            data-linkorder="4"
            data-ga_nav_type="footer_nav"
            data-ga_nav_tree_text="Funciones populares > Software de anuncios"
          >
            Software de anuncios
          </LinkSecondary>
        </li>
        <li className="mr-[1rem]" data-order="7">
          <LinkSecondary
            href="https://www.hubspot.es/products/crm/pipeline-management"
            data-order="7"
            data-linkorder="7"
            data-ga_nav_type="footer_nav"
            data-ga_nav_tree_text="Funciones populares > Herramientas de gestión del pipeline"
          >
            Herramientas de gestión del pipeline
          </LinkSecondary>
        </li>
        <li className="mr-[1rem]" data-order="9">
          <LinkSecondary href="https://www.hubspot.es/products/sales/email-templates-sales">
            Plantillas de emails de ventas
          </LinkSecondary>
        </li>
        <li className="mr-[1rem]" data-order="14">
          <LinkSecondary href="https://www.hubspot.es/products/marketing/analytics">
            Analíticas de marketing
          </LinkSecondary>
        </li>
      </LPFooterUl>
    </>
  );
}

export default RightPanelFooter;
