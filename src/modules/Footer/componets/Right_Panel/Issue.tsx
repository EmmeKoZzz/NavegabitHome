import FormInput from '../../../Components/FormInput';

function IssueFormFooter() {
  return (
    <div className="w-full">
      <FormInput type="text" id="asuntoInp" label="Asunto" />
      <FormInput
        type="textarea"
        id="mensageInp"
        label="Mensaje"
        inputStyle="h-20"
      />
    </div>
  );
}
export default IssueFormFooter;
