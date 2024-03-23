import { orders } from '@/data/data';
import React from 'react';

const YourOrders = () => {
	return (
		<div className='bg-third text-white rounded-md py-4 my-2 px-4 overflow-x-auto'>
			<table className='w-full table-auto'>
				<thead className='w-full h-12'>
					<tr className='border-b bg-zinc-900 border-myGray/30 font-poppins text-white text-[14px] whitespace-nowrap'>
						<th className='text-left px-4'>Date</th>
						<th className='text-left pl-2 hidden xl:table-cell'>Image</th>
						<th className='text-left px-4'>Name</th>
						<th className='text-left px-4'>Price</th>
						<th className='text-right px-4'>Status</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => (
						<tr
							key={order.id}
							className={`border-b border-myGray/30 text-gray-300 font-poppins text-[14px] hover:bg-zinc-900 cursor-pointer `}
						>
							<td className='px-4 whitespace-nowrap'>
								<p className='text-sm leading-4 '>{order.date}</p>
							</td>
							<td className='text-left pl-2 py-3 hidden xl:table-cell whitespace-nowrap'>
								<div className='w-12 h-12 flex items-center justify-center border bg-zinc-900 border-myGray/60 rounded-lg'>
									<img
										className=' w-8 h-8 rounded-lg object-contain'
										src={order.img}
										alt='product'
									/>
								</div>
							</td>
							<td className='px-4 whitespace-nowrap'>
								<p className='text-sm leading-4 '>{order.name}</p>
							</td>
							<td className='px-4 whitespace-nowrap'>
								<p className='text-sm leading-4 '>{order.price.toFixed(2)}</p>
							</td>
							<td className='px-4 text-right'>
								<p className='text-sm leading-4 '>{order.status}</p>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default YourOrders;
