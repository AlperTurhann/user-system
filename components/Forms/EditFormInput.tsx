import React from "react";
import { Control } from "react-hook-form";
import { EditFormData } from "@/modules/EditForm";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface LoginFormProps {
  control: Control<EditFormData>;
  name: keyof EditFormData;
  defaultValue: string;
  isEditable: boolean;
  label?: string;
}

const EditFormInput = ({
  control,
  name,
  defaultValue,
  isEditable,
  label,
}: LoginFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative">
          <FormItem>
            {label && <FormLabel className="capitalize">{label}</FormLabel>}
            <FormControl>
              <Input
                {...field}
                type="text"
                readOnly={!isEditable}
                disabled={!isEditable}
                defaultValue={defaultValue}
                className="border-2 mt-2 px-2 md:mt-1 disabled:border-0 disabled:cursor-default"
              />
            </FormControl>
            <FormMessage className="w-full h-1/2 absolute text-xs -bottom-[55%] left-0" />
          </FormItem>
        </div>
      )}
    />
  );
};

export default EditFormInput;
