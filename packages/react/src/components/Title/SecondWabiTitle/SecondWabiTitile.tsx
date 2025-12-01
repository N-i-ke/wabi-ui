import React from "react";
import "./second-wabi-title.css";

export type SecondWabiTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3;
  text?: string;
};

export const SecondWabiTitle: React.FC<SecondWabiTitleProps> = ({
  level = 2,
  text = "あしらい",
  ...rest
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag {...(rest as any)} className="heading">
      {text}
    </Tag>
  );
};


