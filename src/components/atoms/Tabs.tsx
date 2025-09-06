import React from "react";
import "./Tabs.css";

export interface TabItem {
  key: string;
  label: string;
}

export interface TabsProps {
  value: string;
  items: TabItem[];
  onChange: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  value,
  items,
  onChange,
  className,
}) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = items.findIndex((i) => i.key === value);
    if (idx === -1) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (idx + 1) % items.length;
      onChange(items[next].key);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (idx - 1 + items.length) % items.length;
      onChange(items[prev].key);
    }
  };

  return (
    <div
      className={`tabs ${className || ""}`}
      role="tablist"
      aria-label="Tabs"
      onKeyDown={onKeyDown}
    >
      {items.map((item) => {
        const active = item.key === value;
        return (
          <button
            key={item.key}
            role="tab"
            aria-selected={active}
            className="tab"
            data-active={active}
            onClick={() => onChange(item.key)}
            type="button"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
