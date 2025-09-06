import React from "react";

interface PreviewWrapperProps {
  children: React.ReactNode;
}

export const PreviewWrapper: React.FC<PreviewWrapperProps> = ({ children }) => {
  return <div style={{ minHeight: "100vh" }}>{children}</div>;
};
