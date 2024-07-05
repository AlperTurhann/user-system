interface LoginProps {
  email: string;
  password: string;
}

interface EditProps {
  name: string;
  surname: string;
  phone: string;
  email: string;
  sector: string;
  company: string;
  country: string;
  receiptName: string;
  receiptPhone: string;
  receiptEmail: string;
  receiptTitle: string;
  receiptAddress: string;
  taxAdministration: string;
  taxNumber: string;
}

interface RegisterProps extends EditProps {
  password: string;
}

interface Props extends RegisterProps {
  id: number;
}

export type { Props as UserProps, RegisterProps, LoginProps, EditProps };
