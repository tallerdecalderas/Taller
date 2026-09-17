interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  count?: number;
}

export function FilterButton({ label, active, onClick, count }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`block flex w-full items-center justify-between rounded-lg px-4 py-2 text-left font-medium transition ${
        active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className={`text-sm ${active ? "text-blue-100" : "text-gray-500"}`}>({count})</span>
      )}
    </button>
  );
}
