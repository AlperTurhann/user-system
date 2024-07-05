import React from "react";
import AlertRB, { AlertContents, useAlert } from "@/components/AlertRB";
import FormComponent from "@/components/Forms/FormComponent";
import FormInput from "@/components/Forms/FormInput";

const RegisterPage = () => {
  const { showAlert, alertContent, openAlert, closeAlert } = useAlert();

  const handleAlert = (alertData: AlertContents) => openAlert(alertData);

  return (
    <>
      <FormComponent formType="register" handleAlert={handleAlert}>
        <FormInput name="name" label="Name *" />
        <FormInput name="surname" label="Surname *" />
        <FormInput name="phone" label="Phone *" />
        <FormInput name="email" label="Email *" />
        <FormInput name="sector" label="Sector" />
        <FormInput name="company" label="Company" />
        <FormInput name="country" label="Country" />
        <FormInput name="receiptName" label="Receipt Name" />
        <FormInput name="receiptPhone" label="Receipt Phone" />
        <FormInput name="receiptEmail" label="Receipt Email" />
        <FormInput name="receiptTitle" label="Receipt Title" />
        <FormInput name="receiptAddress" label="Receipt Address" />
        <FormInput name="taxAdministration" label="Tax Administration" />
        <FormInput name="taxNumber" label="Tax Number" />
        <FormInput name="password" label="Password *" />
        <FormInput name="confirmPassword" label="Confirm Password *" />
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

export default RegisterPage;
