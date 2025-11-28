import React from "react";
import "./title.css";

export type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3;
};

export const Title: React.FC<TitleProps> = ({ level = 1, children, ...rest }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag {...(rest as any)} className="wabi-title">
      {children}
    </Tag>
  );
};


