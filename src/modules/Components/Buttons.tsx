export const PrimaryButton = ({ children, className, ...props }: any) => {
  const style =
    " border mt-2 py-1 px-3 bg-primary rounded border-[#7691ad] text-footer-text hover:bg-white hover:text-primary ";
  return (
    <>
      <button {...props} className={style + " " + className}>
        {children}
      </button>
    </>
  );
};