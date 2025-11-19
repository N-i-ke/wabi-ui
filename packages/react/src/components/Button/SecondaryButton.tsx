import React from "react";
import { Button, ButtonProps } from "./Button";

export const SecondaryButton: React.FC<Omit<ButtonProps, "variant">> = (props) => {
  return <Button {...(props as any)} variant="secondary" />;
};


