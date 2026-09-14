interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  count?: number;
}

export function FilterButton({
  label,
  active,
  onClick,
  count,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition flex items-center justify-between ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className={`text-sm ${active ? "text-blue-100" : "text-gray-500"}`}>
          ({count})
        </span>
      )}
    </button>
  );
}
