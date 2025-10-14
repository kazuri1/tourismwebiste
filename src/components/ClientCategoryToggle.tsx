"use client";
import React from "react";
import { CategoryToggle, type CategoryKey } from "./atoms/CategoryToggle";

export function ClientCategoryToggle() {
  const [value, setValue] = React.useState<CategoryKey>("all");
  return <CategoryToggle value={value} onChange={setValue} />;
}

export default ClientCategoryToggle;
