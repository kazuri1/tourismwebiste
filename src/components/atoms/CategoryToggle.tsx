import React from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
// Styles now imported globally from app/layout.tsx in Next.js

export type CategoryKey =
  | "all"
  | "nature"
  | "culture"
  | "shopping"
  | "culinary";

export interface CategoryItem {
  key: CategoryKey;
  label: string;
  icon: React.ReactNode;
}

export interface CategoryToggleProps {
  value: CategoryKey;
  onChange: (value: CategoryKey) => void;
  items?: CategoryItem[];
  className?: string;
}

const defaultItems: CategoryItem[] = [
  { key: "all", label: "All", icon: <CheckRoundedIcon fontSize="inherit" /> },
  {
    key: "nature",
    label: "Nature",
    icon: <LocalFloristOutlinedIcon fontSize="inherit" />,
  },
  {
    key: "culture",
    label: "Culture",
    icon: <GroupsOutlinedIcon fontSize="inherit" />,
  },
  {
    key: "shopping",
    label: "Shopping",
    icon: <ShoppingBagOutlinedIcon fontSize="inherit" />,
  },
  {
    key: "culinary",
    label: "Culinary",
    icon: <RestaurantOutlinedIcon fontSize="inherit" />,
  },
];

export const CategoryToggle: React.FC<CategoryToggleProps> = ({
  value,
  onChange,
  items = defaultItems,
  className,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
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
      className={`category-toggle ${className || ""}`}
      role="radiogroup"
      aria-label="Category filter"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {items.map((item) => {
        const active = item.key === value;
        return (
          <button
            key={item.key}
            className="toggle-item"
            role="radio"
            aria-checked={active}
            data-active={active}
            onClick={() => onChange(item.key)}
            type="button"
          >
            <span className="toggle-icon" aria-hidden>
              {item.icon}
            </span>
            <span className="toggle-label">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryToggle;
