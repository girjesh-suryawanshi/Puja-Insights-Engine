import React, { useState } from "react";
import { Calendar } from "lucide-react";

interface DateRangeFilterProps {
  startDate: string | undefined;
  endDate: string | undefined;
  onChange: (start: string | undefined, end: string | undefined) => void;
}

export function DateRangeFilter({ startDate, endDate, onChange }: DateRangeFilterProps) {
  const [localStart, setLocalStart] = useState(startDate || "");
  const [localEnd, setLocalEnd] = useState(endDate || "");

  const apply = () => {
    onChange(localStart || undefined, localEnd || undefined);
  };

  const clear = () => {
    setLocalStart("");
    setLocalEnd("");
    onChange(undefined, undefined);
  };

  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border">
      <Calendar className="w-5 h-5 text-gray-500" />
      <input
        type="date"
        value={localStart}
        onChange={e => setLocalStart(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <span className="mx-1 text-gray-600">to</span>
      <input
        type="date"
        value={localEnd}
        onChange={e => setLocalEnd(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button onClick={apply} className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded transition">
        Apply
      </button>
      <button onClick={clear} className="text-gray-500 hover:underline">
        Clear
      </button>
    </div>
  );
}
