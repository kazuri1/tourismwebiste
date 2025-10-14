"use client";
import React from "react";
import { Tabs } from "./atoms/Tabs";

export default function ClientTabs() {
  const [value, setValue] = React.useState("day1");
  const items = [
    { key: "day1", label: "Day 1" },
    { key: "day2", label: "Day 2" },
    { key: "day3", label: "Day 3" },
  ];
  return <Tabs value={value} items={items} onChange={setValue} />;
}
