import React from 'react';

const cardInfoFields = [
	{
		id: 'name-on-card',
		label: 'First name',
		defaultValue: 'Marcin',
		autoComplete: 'cc-name',
		colSpan: 3,
	},
	{
		id: 'lastname-on-card',
		label: 'Last name',
		defaultValue: 'Garski',
		autoComplete: 'cc-name',
		colSpan: 3,
	},
	{
		id: 'card-number',
		label: 'Card number',
		defaultValue: '1234 4321 1234 4321',
		colSpan: 2,
	},
	{
		id: 'expiration-date',
		label: 'Expiration date (MM/YY)',
		defaultValue: '09/24',
		colSpan: 2,
	},
	{ id: 'cvc', label: 'CVC', defaultValue: '***', colSpan: 2 },
];

const Cardinfo = () => {
	return (
		<div className='border-b border-white/10 pb-12'>
			<h2 className='text-base font-semibold leading-7 text-myOrange'>
				Card info
			</h2>
			<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				{cardInfoFields.map(({ id, label, defaultValue, colSpan }) => (
					<div key={id} className={`sm:col-span-${colSpan}`}>
						<label
							htmlFor={id}
							className='block text-sm font-medium leading-6 text-white'
						>
							{label}
						</label>
						<div className='mt-2'>
							<input
								type='text'
								name={id}
								id={id}
								autoComplete='off'
								defaultValue={defaultValue}
								className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm pl-2 sm:text-sm sm:leading-6 ring-1 ring-inset ring-white/10'
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cardinfo;
