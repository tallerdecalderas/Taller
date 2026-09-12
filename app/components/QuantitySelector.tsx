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
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button
          onClick={() => handleChange(quantity - 1)}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
          disabled={quantity <= 1}
        >
          −
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => handleChange(parseInt(e.target.value) || 1)}
          className="w-16 text-center py-2 border-l border-r border-gray-300 focus:outline-none"
          min="1"
          max={max}
        />
        <button
          onClick={() => handleChange(quantity + 1)}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
          disabled={quantity >= max}
        >
          +
        </button>
      </div>
      {max && (
        <span className="text-sm text-gray-500">Máximo: {max} unidades</span>
      )}
    </div>
  );
}
