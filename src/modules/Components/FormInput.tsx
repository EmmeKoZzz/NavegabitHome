interface FormInputProps {
  type: string;
  placeholder?: string;
  label?: string;
  labelStyle?: string;
  inputStyle?: string;
}

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
				className={`FormInput ${props.inputStyle}`}
			/>
		) : (
			<input
				type={props.type}
				placeholder={props.placeholder}
				className={`FormInput ${props.inputStyle}`}
			/>
		);

  return (
    <>
      {label}
      {input}
    </>
  );
};