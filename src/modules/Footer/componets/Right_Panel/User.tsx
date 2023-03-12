import FormInput from '../../../Components/FormInput';

function UserFormFooter() {
  return (
    <div className="w-full lg:w-[300px] h-fit flex flex-wrap">
      <FormInput type="text" id="nombreInpu" label="Nombre" />
      <FormInput type="text" id="emailInpu" label="Email" />
    </div>
  );
}

export default UserFormFooter;
