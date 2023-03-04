import {ElementProps} from "../../../Types";

interface LPFooterUlProps extends ElementProps {
  className?: string;
}

export const LPFooterButton = ({ children }: ElementProps) => {
  return (
    <h2 className="text-footer-header">
      <button
        className="font-[600] text-footer-button relative block w-full font-neue-machina text-left after:content-['\E003'] after:absolute after:right-[1rem] after:-rotate-90 after:font-hsg-ico lg:after:content-none"
        aria-disabled="true"
      >
        <u>{children}</u>
      </button>
    </h2>
  );
};

export const LPFooterUl = ({ children, className }: LPFooterUlProps) => {
  return (
    <ul
      className={
        "hidden lg:inline-block transition-all duration-300 mb-[1rem] pl-[2rem] " +
        className
      }
    >
      {children}
    </ul>
  );
}