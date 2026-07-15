interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    const pages = Array.from({ length: Math.min(totalPages, 500) }, (_, i) => i + 1);

    return (
        <div className="flex flex-wrap gap-2 justify-center items-center py-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-olive text-cream rounded disabled:opacity-50"
            >
                Prev
            </button>
            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    className={`px-3 py-1 rounded ${p === currentPage ? 'bg-amber text-forest font-bold' : 'bg-forest-light text-cream'
                        }`}
                >
                    {p}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-3 py-1 bg-olive text-cream rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
  };