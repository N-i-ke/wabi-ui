import React from "react";
import "./first-wabi-title.css";

export type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3;
  text?: string;
};

export const Title: React.FC<TitleProps> = ({ level = 2, text = "あしらい", children, ...rest }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag {...(rest as any)} className="heading">
      {children ?? text}
    </Tag>
  );
};


