"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  max?: number;
  onQuantityChange?: (quantity: number) => void;
  initialQuantity?: number;
}

export function QuantitySelector({
  max = 100,
  onQuantityChange,
  initialQuantity = 1,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= max) {
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="font-medium text-gray-700">Cantidad:</label>
      <div className="flex items-center rounded-lg border border-gray-300">
        <button
          onClick={() => handleChange(quantity - 1)}
          className="px-4 py-2 text-gray-600 transition hover:bg-gray-100"
          disabled={quantity <= 1}
        >
          −
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleChange(parseInt(e.target.value) || 1)}
          className="w-16 border-r border-l border-gray-300 py-2 text-center focus:outline-none"
          min="1"
          max={max}
        />
        <button
          onClick={() => handleChange(quantity + 1)}
          className="px-4 py-2 text-gray-600 transition hover:bg-gray-100"
          disabled={quantity >= max}
        >
          +
        </button>
      </div>
      {max && <span className="text-sm text-gray-500">Máximo: {max} unidades</span>}
    </div>
  );
}
