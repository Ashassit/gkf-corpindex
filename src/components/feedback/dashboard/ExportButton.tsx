interface ExportButtonProps {
  onExport: () => void;
}

export function ExportButton({ onExport }: ExportButtonProps) {
  return (
    <button
      onClick={onExport}
      className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A020] text-white rounded-lg text-sm font-medium hover:bg-amber-600 transition-all"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Export CSV
    </button>
  );
}
