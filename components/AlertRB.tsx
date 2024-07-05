import React, { useState } from "react";
import { AlertCircle, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface Contents {
  title: string;
  description: string;
}

interface Props extends Contents {
  isOpen: boolean;
  handleClose: () => void;
}

const useAlert = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertContent, setAlertContent] = useState<Contents>({
    title: "",
    description: "",
  });

  const openAlert = ({ title, description }: Contents) => {
    setAlertContent({ title, description });
    setShowAlert(true);

    setTimeout(() => {
      closeAlert();
    }, 5000);
  };
  const closeAlert = () => setShowAlert(false);

  return { showAlert, alertContent, openAlert, closeAlert };
};

const AlertRB = ({ title, description, isOpen, handleClose }: Props) => {
  return (
    <>
      {isOpen && (
        <Alert
          variant="default"
          className="w-1/2 fixed border-2 right-5 bottom-5 text-yellow-700 border-yellow-700 bg-yellow-50 md:w-1/3 lg:w-1/4"
        >
          <div className="w-full flex items-center justify-between">
            <AlertCircle color="rgb(161 98 7)" className="size-4" />
            <AlertTitle>{title}</AlertTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="rounded-full hover:bg-yellow-100 hover:border-yellow-700 hover:border-2"
            >
              <X color="rgb(161 98 7)" className="size-4" />
            </Button>
          </div>
          <AlertDescription className="text-center">
            {description}
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default AlertRB;
export { useAlert };
export type { Contents as AlertContents };
