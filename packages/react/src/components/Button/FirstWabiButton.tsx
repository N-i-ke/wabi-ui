import React from "react";
import "./first-wabi-button.css";

export type ButtonProps = React.ButtonHTMLAttributes<any> & {
  variant?: "primary" | "secondary" | "ghost";
  as?: React.ElementType;
  icon?: React.ReactNode;
  fancy?: boolean; // apply the decorative CSS when true
};

export const Button: React.FC<ButtonProps> = ({
  as: Component = "button",
  variant = "primary",
  icon,
  children,
  fancy = true,
  ...rest
}) => {
  const classNames = fancy ? ["button", variant].filter(Boolean).join(" ") : undefined;

  return (
    <Component {...(rest as any)} className={classNames}>
      {fancy ? <div className="button__cloud1" /> : null}
      {fancy ? <div className="button__cloud2" /> : null}
      <div className="button__inner">
        {icon ? <span className="button__icon">{icon}</span> : null}
        <span className="button__text">{children}</span>
        {fancy ? <div className="button__pattern" /> : null}
      </div>
    </Component>
  );
};


