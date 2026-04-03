import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange?: (newSize: number) => void;
}

export function PaginationControls({ page, pageSize, total, onPageChange, onPageSizeChange }: PaginationControlsProps) {
  const totalPages = Math.ceil(total / pageSize);
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-2">
        <button
          disabled={!canPrev}
          onClick={() => onPageChange(page - 1)}
          className={`p-1 rounded ${canPrev ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-300'}`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={!canNext}
          onClick={() => onPageChange(page + 1)}
          className={`p-1 rounded ${canNext ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-300'}`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      {onPageSizeChange && (
        <select
          value={pageSize}
          onChange={e => onPageSizeChange(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm"
        >
          {[10, 20, 50].map(size => (
            <option key={size} value={size}>{size} per page</option>
          ))}
        </select>
      )}
    </div>
  );
}
