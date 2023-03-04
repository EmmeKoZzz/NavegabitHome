import { FormInput } from "../../../Components/FormInput";

const UserFormFooter = () => {
  return (
    <>
      <div className="w-full lg:w-[300px] h-fit flex flex-wrap">
        <FormInput type={"text"} label={"Nombre"} />
        <FormInput type={"text"} label={"Email"} />
      </div>
    </>
  );
};

export default UserFormFooter;