type FormInputProps = {
	type: string;
	id: string;
	label?: string;
	placeholder?: string;
	inputStyle?: string;
	labelStyle?: string;
};

function FormInput({
	type,
	id,
	label,
	placeholder,
	inputStyle,
	labelStyle,
}: FormInputProps) {
	const style = `inputStyle ${inputStyle}`;
	const input =
		type === 'textarea' ? (
			<textarea placeholder={placeholder} id={id} className={style} />
		) : (
			<input type={type} placeholder={placeholder} id={id} className={style} />
		);

	return (
		<label htmlFor={id} className={`w-full text-footer-text ${labelStyle}`}>
			{label}
			{input}
		</label>
	);
}

export default FormInput;
