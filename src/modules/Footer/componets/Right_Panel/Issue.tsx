import { FormInput } from "../../../Components/FormInput";

const IssueFormFooter = () => {
  return (
    <>
      <div className="w-full">
        <FormInput type={"text"} label={"Asunto"} />
        <FormInput type={"textarea"} label={"Mensaje"} inputStyle={"h-20"} />
      </div>
    </>
  );
};
export default IssueFormFooter;