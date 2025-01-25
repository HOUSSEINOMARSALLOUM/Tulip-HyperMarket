"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const categories = [
  { id: "fruits", label: "Fruits" },
  { id: "vegetables", label: "Vegetables" },
  { id: "dairy", label: "Dairy" },
  { id: "bakery", label: "Bakery" },
  { id: "meat", label: "Meat" },
  { id: "beverages", label: "Beverages" },
];

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <Label htmlFor={category.id}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            min={0}
            max={100}
            step={1}
            onValueChange={setPriceRange}
          />
          <div className="flex items-center justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}