import { PaginationProps } from "@/types/types";

const Pagination = ({
	currentPage,
	pageCount,
	paginate,
}: PaginationProps) => {
	return (
		<div className='flex justify-between items-center bg-third p-2 py-4 rounded-md my-4'>
			<button
				onClick={() => paginate(currentPage - 1)}
				disabled={currentPage === 1}
				className='rounded bg-gray-700 text-white px-3 py-1'
			>
				Previous
			</button>

			<div className='flex justify-center flex-grow'>
				{Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
					<button
						key={number}
						onClick={() => paginate(number)}
						className={`mx-1 rounded px-3 py-1 ${
							number === currentPage
								? 'bg-gray-700 text-white'
								: 'bg-gray-200 text-gray-700'
						}`}
					>
						{number}
					</button>
				))}
			</div>

			<button
				onClick={() => paginate(currentPage + 1)}
				disabled={currentPage === pageCount}
				className='rounded bg-gray-700 text-white px-3 py-1'
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
