import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const SidePart = ({ children, title }: Props) => {
  return (
    <div className="border-b py-2">
      <h2 className="font-semibold text-center">{title}</h2>
      {children}
    </div>
  );
};

export { SidePart as UserSidePart };
