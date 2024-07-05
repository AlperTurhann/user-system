import React from "react";
import { Control, Path } from "react-hook-form";
import { LoginFormData } from "@/modules/LoginForm";
import { RegisterFormData } from "@/modules/RegisterForm";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props /* <T extends LoginFormData | RegisterFormData> */ {
  control?: Control<LoginFormData | RegisterFormData>;
  name: Path<LoginFormData | RegisterFormData>; //Path<T>;
  label: string;
}

const FormInput = /* <T extends LoginFormData | RegisterFormData> */ (
  { control, name, label }: Props /* <T> */
) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative">
          <FormItem>
            <FormLabel className="capitalize">{label}</FormLabel>
            <FormControl>
              <Input
                {...field}
                type={
                  name === "password" || name === "confirmPassword"
                    ? "password"
                    : "text"
                }
              />
            </FormControl>
            <FormMessage className="w-full h-1/2 absolute text-xs -bottom-[55%] left-0" />
          </FormItem>
        </div>
      )}
    />
  );
};

export default FormInput;
