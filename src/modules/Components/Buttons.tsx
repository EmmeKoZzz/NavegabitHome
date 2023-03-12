import { ReactNode } from 'react';

type PrimaryButtonProps = {
  children: ReactNode;
  className?: string;
};

function PrimaryButton({ children, className }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`border mt-2 py-1 px-3 bg-primary rounded border-[#7691ad] text-footer-text hover:bg-white hover:text-primary ${className}`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
