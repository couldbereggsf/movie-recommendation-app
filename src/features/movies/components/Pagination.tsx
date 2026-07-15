interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    // Generate the list of pages to display (numbers and "…" placeholders)
    const getPaginationItems = (): (number | string)[] => {
        const delta = 2; // number of pages before and after current
        const range: number[] = [];
        const rangeWithDots: (number | string)[] = [];
        let last: number | undefined;

        // Collect the pages we definitely want to show
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                range.push(i);
            }
        }
        // Inserts ellipses where there are gaps
        range.forEach((i) => {
            if (last !== undefined) {
                if (i - last === 2) {
                    rangeWithDots.push(last + 1);
                } else if (i - last !== 1) {
                    rangeWithDots.push('…');
                }
            }
            rangeWithDots.push(i);
            last = i;
        });

        return rangeWithDots;
    };

    const items = getPaginationItems();

    return (
        <div className="flex flex-wrap gap-2 justify-center items-center py-6">
            {/* Prev button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-olive text-cream rounded disabled:opacity-50"
            >
                Prev
            </button>
            {/* Page numbers and ellipses */}
            {items.map((item, index) =>
                typeof item === 'number' ? (
                    <button
                        key={`${item}-${index}`}
                        onClick={() => onPageChange(item)}
                        className={`px-3 py-1 rounded ${item === currentPage ? 'bg-amber text-forest font-bold' : 'bg-forest-light text-cream'}`}
                    >
                        {item}
                    </button>
                ) : (
                    <span key={`${item}-${index}`} className="px-1 text-cream/60">
                        {item}
                    </span>
                )
            )}
            {/* Next button */}
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