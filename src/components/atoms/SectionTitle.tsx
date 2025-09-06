import React from "react";
import "./SectionTitle.css";

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`section-title ${className || ""}`}>
      <h2 className="section-title-text">{children}</h2>
      <div className="section-title-underline" />
    </div>
  );
};

export default SectionTitle;
