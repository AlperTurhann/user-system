import React, { cloneElement, ReactElement, ReactNode } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, LoginFormSchema } from "@/modules/LoginForm";
import { RegisterFormData, RegisterFormSchema } from "@/modules/RegisterForm";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { AlertContents } from "@/components/AlertRB";
import { useUserContext } from "@/components/User/UserContext";
import { LoginProps, RegisterProps } from "@/components/User/Props";

interface Props {
  formType: "login" | "register";
  handleAlert: (alertData: AlertContents) => void;
  children: ReactNode; //ReactElement<typeof FormInput>[]
}

export const FormComponent = <T extends LoginFormData | RegisterFormData>({
  formType,
  handleAlert,
  children,
}: Props) => {
  const formSchema =
    formType === "login" ? LoginFormSchema : RegisterFormSchema;

  const form = useForm<T>({
    resolver: zodResolver(formSchema),
  });
  const { handleSubmit, control } = form;

  const { login, signup } = useUserContext();
  const onSubmit = (data: FieldValues) => {
    var alertData: AlertContents;

    if (formType === "login") alertData = login(data as LoginProps);
    else {
      const registerData: RegisterProps = {
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        email: data.email,
        sector: data.sector,
        company: data.company,
        country: data.country,
        receiptName: data.receiptName,
        receiptPhone: data.receiptPhone,
        receiptEmail: data.receiptEmail,
        receiptTitle: data.receiptTitle,
        receiptAddress: data.receiptAddress,
        taxAdministration: data.taxAdministration,
        taxNumber: data.taxNumber,
        password: data.password,
      };

      alertData = signup(registerData);
    }
    handleAlert(alertData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gray-50">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-14 px-5 py-10 shadow-md rounded-xl bg-white md:w-2/3 lg:w-1/2"
        >
          <h1 className="font-bold capitalize sm:text-lg md:text-xl lg:text-2xl">
            {formType === "login" ? "Login" : "Register"}
          </h1>
          <div
            className={
              formType === "login"
                ? "w-2/3 flex flex-col gap-y-7"
                : "w-full grid grid-cols-1 gap-7 md:grid-cols-2"
            }
          >
            {React.Children.map(children, (child) =>
              cloneElement(child as ReactElement<any>, { control })
            )}
            {/* {children.map((child, index) =>
              cloneElement(child, { key: index, control })
            )} */}
          </div>
          <Button
            type="submit"
            className="w-1/3 text-xs capitalize p-2 md:text-sm lg:text-base shadow-xl bg-sky-700 hover:bg-sky-600"
          >
            {formType === "login" ? "Login" : "Register"}
          </Button>
          <p>
            {formType === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Button type="button" variant="link" className="px-1">
              <Link
                href={formType === "login" ? "/register" : "/login"}
                className="font-bold text-sky-500"
              >
                {formType === "login" ? "Register" : "Login"}
              </Link>
            </Button>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;
