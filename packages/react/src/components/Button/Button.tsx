import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  as?: React.ElementType;
  icon?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  as: Component = "button",
  variant = "primary",
  icon,
  style,
  children,
  ...rest
}) => {
  const baseStyle: React.CSSProperties = {
    padding: "8px 12px",
    borderRadius: 6,
    border: "1px solid currentColor",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };

  const variantStyle: React.CSSProperties =
    variant === "primary"
      ? {
          background: "var(--wabi-color-primary, #0ea5a4)",
          color: "#fff",
        }
      : variant === "secondary"
      ? {
          background: "transparent",
          color: "var(--wabi-color-primary, #0ea5a4)",
          border: "1px solid var(--wabi-color-primary, #0ea5a4)",
        }
      : {
          background: "transparent",
          color: "inherit",
          border: "1px dashed rgba(0,0,0,0.1)",
        };

  return (
    <Component {...(rest as any)} style={{ ...baseStyle, ...variantStyle, ...style }}>
      {icon ? <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span> : null}
      {children}
    </Component>
  );
};


