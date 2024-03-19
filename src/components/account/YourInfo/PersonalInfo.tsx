import React from 'react';
const accountPersonalFormFields = [
	{
		id: 'first-name',
		label: 'First name',
		defaultValue: 'Marcin',
		autoComplete: 'given-name',
		colSpan: 3,
	},
	{
		id: 'last-name',
		label: 'Last name',
		defaultValue: 'Garski',
		autoComplete: 'family-name',
		colSpan: 3,
	},
	{
		id: 'street-address',
		label: 'Street address',
		defaultValue: 'Dewey St',
		autoComplete: 'street-address',
		colSpan: 3,
	},
	{
		id: 'email',
		label: 'Email address',
		defaultValue: 'test@test.com',
		type: 'email',
		autoComplete: 'email',
		colSpan: 3,
	},
	{
		id: 'city',
		label: 'City',
		defaultValue: 'Garfield',
		autoComplete: 'address-level2',
		colSpan: 2,
	},
	{
		id: 'region',
		label: 'State / Province',
		defaultValue: 'New Jersey',
		autoComplete: 'address-level1',
		colSpan: 2,
	},
	{
		id: 'postal-code',
		label: 'ZIP / Postal code',
		defaultValue: '07026',
		autoComplete: 'postal-code',
		colSpan: 2,
	},
];

const PersonalInfo = () => {
	return (
		<div className='border-b border-white/10 pb-12'>
			<h2 className='text-base font-semibold leading-7 text-myOrange'>
				Personal Information
			</h2>
			<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				{accountPersonalFormFields.map(
					({
						id,
						label,
						defaultValue,
						type = 'text',
						autoComplete,
						colSpan,
					}) => (
						<div key={id} className={`sm:col-span-${colSpan}`}>
							<label
								htmlFor={id}
								className='block text-sm font-medium leading-6 text-white'
							>
								{label}
							</label>
							<div className='mt-2'>
								<input
									type={type}
									name={id}
									id={id}
									autoComplete={autoComplete}
									defaultValue={defaultValue}
									className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm pl-2 sm:text-sm sm:leading-6 ring-1 ring-inset ring-white/10'
								/>
							</div>
						</div>
					)
				)}
				
			</div>
		</div>
	);
};

export default PersonalInfo;
