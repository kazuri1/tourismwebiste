import React from "react";
// Styles now imported globally from app/layout.tsx in Next.js

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
