import LinkSecondary from '../../../Components/Links';
import { LPFooterButton, LPFooterUl } from './LFooterComponets';

function LeftPanelFooter() {
	return (
		<>
			<div className="py-[0.45rem] border-b lg:border-0 border-[#7691ad]">
				<LPFooterButton>Clientes</LPFooterButton>
			</div>
			<LPFooterUl className="columns-1">
				<li className="columns-1" data-order="0">
					<LinkSecondary href="NavLeft#">Atención al cliente</LinkSecondary>
					<div>
						<p className="text-footer-text ">(+53) 52362879</p>
						<p className="text-footer-text ">(+53) 52731881</p>
					</div>
				</li>
			</LPFooterUl>
		</>
	);
}

export default LeftPanelFooter;
