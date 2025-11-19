import React from "react";
import { Button, ButtonProps } from "./Button";

export type IconButtonProps = Omit<ButtonProps, "children"> & {
  icon: React.ReactNode;
  label?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({ icon, label, ...rest }) => {
  return (
    <Button {...(rest as any)} variant="ghost" aria-label={label}>
      {icon}
    </Button>
  );
};


