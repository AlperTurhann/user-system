import AlertRB, { AlertContents, useAlert } from "@/components/AlertRB";
import FormComponent from "@/components/Forms/FormComponent";
import FormInput from "@/components/Forms/FormInput";

const LoginPage = () => {
  const { showAlert, alertContent, openAlert, closeAlert } = useAlert();

  const handleAlert = (alertData: AlertContents) => openAlert(alertData);

  return (
    <>
      <FormComponent formType="login" handleAlert={handleAlert}>
        <FormInput name="email" label="Email" />
        <FormInput name="password" label="Password" />
      </FormComponent>
      <AlertRB
        title={alertContent.title}
        description={alertContent.description}
        isOpen={showAlert}
        handleClose={closeAlert}
      />
    </>
  );
};

export default LoginPage;
