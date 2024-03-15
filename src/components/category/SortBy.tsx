import { SortByProps } from "@/types/types";

const SortBy = ({sortKey, handleSortChange}: SortByProps) => {

	return (
		<div>
			<label htmlFor='sort' className='mr-2 text-sm font-medium text-gray-300'>
				Sort by:
			</label>
			<select
				id='sort'
				name='sort'
				className='border-gray-300 rounded-md shadow-sm'
				value={sortKey}
				onChange={handleSortChange}
			>
				<option value='name'>Name</option>
				<option value='price'>Price</option>
			</select>
		</div>
	);
};

export default SortBy;
