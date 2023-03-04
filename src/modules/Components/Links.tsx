export const LinkSecondary = ({ className, children, ...props }: any) => {
  return (
    <>
      <a {...props} className={"text-footer-text hover:underline " + className}>
        {children}
      </a>
    </>
  );
}