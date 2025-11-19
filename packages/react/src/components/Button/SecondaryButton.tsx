import React from "react";
import { Button, ButtonProps } from "./FirstWabiButton";

export const SecondaryButton: React.FC<Omit<ButtonProps, "variant">> = (props) => {
  return <Button {...(props as any)} variant="secondary" fancy={false} />;
};


