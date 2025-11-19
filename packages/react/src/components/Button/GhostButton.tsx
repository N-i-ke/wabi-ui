import React from "react";
import { Button, ButtonProps } from "./FirstWabiButton";

export const GhostButton: React.FC<Omit<ButtonProps, "variant">> = (props) => {
  return <Button {...(props as any)} variant="ghost" fancy={false} />;
};


