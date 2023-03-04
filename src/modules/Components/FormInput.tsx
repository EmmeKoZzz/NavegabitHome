interface FormInputProps {
  type: string;
  placeholder?: string;
  label?: string;
  labelStyle?: string;
  inputStyle?: string;
}

export const inputStyle =
  "transition-all duration-300 w-full text-black rounded-[0.375rem] focus:ring-offset-[#b6c7d6] focus:ring-[#b6c7d6] focus:border-[#86b7fe] focus:ring-offset-[0.1rem] ";

export const FormInput = (props: FormInputProps) => {
  let input;
  let label;

  console.log(props.label);

  label =
    props.label !== undefined ? (
      <label className={"w-full text-footer-text" + " " + props.labelStyle}>
        {props.label}
      </label>
    ) : (
      ""
    );

  input =
    props.type === "textarea" ? (
      <textarea
        placeholder={props.placeholder}
        className={inputStyle + props.inputStyle}
      />
    ) : (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={inputStyle + props.inputStyle}
      />
    );

  return (
    <>
      {label}
      {input}
    </>
  );
};