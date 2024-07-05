import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { PenBoxIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditFormData, EditFormSchema } from "@/modules/EditForm";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { AlertContents } from "@/components/AlertRB";
import { EditProps } from "@/components/User/Props";
import { UserSidePart } from "@/components/User/SidePart";
import { useUserContext } from "@/components/User/UserContext";
import EditFormInput from "@/components/Forms/EditFormInput";

interface Props {
  handleAlert: (alertData: AlertContents) => void;
}

const EditForm = ({ handleAlert }: Props) => {
  const router = useRouter();
  const { currentUser, editCurrentUser } = useUserContext();

  useEffect(() => {
    if (!currentUser) router.push("/login");
  }, [currentUser, router]);

  if (!currentUser) return <p>User not found!</p>;

  const initialUserContent = useMemo(
    () => ({
      name: currentUser?.name || "",
      surname: currentUser?.surname || "",
      phone: currentUser?.phone || "",
      email: currentUser?.email || "",
      sector: currentUser?.sector || "",
      company: currentUser?.company || "",
      country: currentUser?.country || "",
      receiptName: currentUser?.receiptName || "",
      receiptPhone: currentUser?.receiptPhone || "",
      receiptEmail: currentUser?.receiptEmail || "",
      receiptTitle: currentUser?.receiptTitle || "",
      receiptAddress: currentUser?.receiptAddress || "",
      taxAdministration: currentUser?.taxAdministration || "",
      taxNumber: currentUser?.taxNumber || "",
    }),
    [currentUser]
  );

  const form = useForm<EditFormData>({
    resolver: zodResolver(EditFormSchema),
    defaultValues: initialUserContent,
  });
  const { handleSubmit, control, reset } = form;

  const [showEditPanel, setShowEditPanel] = useState<boolean>(false);

  const handleToggleEditPanel = (fromPencil: boolean = false) => {
    if (showEditPanel && fromPencil) reset(initialUserContent);
    setShowEditPanel(!showEditPanel);
  };

  const handleLogOut = () => router.push("/login");

  const onSubmit = (data: FieldValues) => {
    const alertData: AlertContents = editCurrentUser(data as EditProps);
    handleAlert(alertData);
    handleToggleEditPanel();
  };
  const cancelEdit = () => {
    reset(initialUserContent);
    handleToggleEditPanel();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 flex flex-col border-r-2 border-gray-500 divide-y-2 gap-5 p-5"
      >
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-end">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={() => handleToggleEditPanel(true)}
            >
              <PenBoxIcon color="gray" className="size-4" />
            </Button>
          </div>
          <h1 className="flex font-bold text-xl gap-x-3">
            <div className="flex flex-col">
              <EditFormInput
                control={control}
                name="name"
                defaultValue={currentUser.name}
                isEditable={showEditPanel}
              />
            </div>
            <div className="flex flex-col">
              <EditFormInput
                control={control}
                name="surname"
                defaultValue={currentUser.surname}
                isEditable={showEditPanel}
              />
            </div>
          </h1>
        </div>
        <div className="flex flex-col">
          <UserSidePart title="Job">
            <EditFormInput
              control={control}
              name="sector"
              defaultValue={currentUser.sector}
              isEditable={showEditPanel}
              label="Sector"
            />
            <EditFormInput
              control={control}
              name="company"
              defaultValue={currentUser.company}
              isEditable={showEditPanel}
              label="Company"
            />
            <EditFormInput
              control={control}
              name="country"
              defaultValue={currentUser.country}
              isEditable={showEditPanel}
              label="Country"
            />
          </UserSidePart>
          <UserSidePart title="Receipt">
            <EditFormInput
              control={control}
              name="receiptName"
              defaultValue={currentUser.receiptName}
              isEditable={showEditPanel}
              label="Receipt Name"
            />
            <EditFormInput
              control={control}
              name="receiptPhone"
              defaultValue={currentUser.receiptPhone}
              isEditable={showEditPanel}
              label="Receipt Phone"
            />
            <EditFormInput
              control={control}
              name="receiptEmail"
              defaultValue={currentUser.receiptEmail}
              isEditable={showEditPanel}
              label="Receipt Email"
            />
            <EditFormInput
              control={control}
              name="receiptTitle"
              defaultValue={currentUser.receiptTitle}
              isEditable={showEditPanel}
              label="Receipt Title"
            />
            <EditFormInput
              control={control}
              name="receiptAddress"
              defaultValue={currentUser.receiptAddress}
              isEditable={showEditPanel}
              label="Receipt Address"
            />
          </UserSidePart>
          <UserSidePart title="Tax">
            <EditFormInput
              control={control}
              name="taxAdministration"
              defaultValue={currentUser.taxAdministration}
              isEditable={showEditPanel}
              label="Tax Administration"
            />
            <EditFormInput
              control={control}
              name="taxNumber"
              defaultValue={currentUser.taxNumber}
              isEditable={showEditPanel}
              label="Tax Number"
            />
          </UserSidePart>
          <UserSidePart title="Contact">
            <EditFormInput
              control={control}
              name="email"
              defaultValue={currentUser.email}
              isEditable={showEditPanel}
              label="Email"
            />
            <EditFormInput
              control={control}
              name="phone"
              defaultValue={currentUser.phone}
              isEditable={showEditPanel}
              label="Phone"
            />
          </UserSidePart>
          {showEditPanel ? (
            <div className="flex justify-evenly p-5">
              <Button type="submit" variant="default" className="mr-2">
                Save Changes
              </Button>
              <Button variant="ghost" onClick={cancelEdit}>
                Cancel
              </Button>
            </div>
          ) : (
            <div className="text-end p-5">
              <Button variant={"destructive"} onClick={handleLogOut}>
                Log out
              </Button>
            </div>
          )}
        </div>
      </form>
    </Form>
  );
};

export default EditForm;
