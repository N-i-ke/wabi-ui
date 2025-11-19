import React from "react";

export type PrimitiveButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const PrimitiveButton: React.FC<PrimitiveButtonProps> = ({
  children,
  variant = "primary",
  style,
  ...rest
}) => {
  const mergedStyle: React.CSSProperties = {
    padding: "8px 12px",
    borderRadius: 6,
    border: "1px solid currentColor",
    background:
      variant === "primary" ? "var(--wabi-color-primary, #0ea5a4)" : "transparent",
    color: variant === "primary" ? "#fff" : "inherit",
    cursor: "pointer",
    ...style,
  };

  return (
    <button {...rest} style={mergedStyle}>
      {children}
    </button>
  );
};


