"use client";
import React from "react";
import { CategoryToggle, type CategoryKey } from "./atoms/CategoryToggle";

export interface ClientCategoryToggleProps {
  value?: CategoryKey;
  onChange?: (value: CategoryKey) => void;
}

export function ClientCategoryToggle({
  value: controlledValue,
  onChange,
}: ClientCategoryToggleProps = {}) {
  const [internalValue, setInternalValue] = React.useState<CategoryKey>("all");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: CategoryKey) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return <CategoryToggle value={value} onChange={handleChange} />;
}

export default ClientCategoryToggle;
