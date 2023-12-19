import { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
	date: string;
	time: string;
	name: string;
	email: string;
}

const BookingForm = () => {
	const initialFormData: FormData = {
		date: '',
		time: '',
		name: '',
		email: '',
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);

	const [errors, setErrors] = useState<Partial<FormData>>({});

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const newErrors: Partial<FormData> = {};

		if (formData.date.trim() === '') {
			newErrors.date = 'Please select date';
		}

		if (formData.time.trim() === '') {
			newErrors.time = 'Please select time';
		}

		if (formData.name.trim() === '') {
			newErrors.name = 'Name cannot be empty';
		}

		if (formData.email.trim() === '') {
			newErrors.email = 'Email cannot be empty';
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			setIsFormSubmitted(true);
			setTimeout(() => {
				setIsFormSubmitted(false);
			}, 3000);

			setFormData(initialFormData);
		}
	};

	return (
		<div className='bg-white rounded-lg h-24 w-[900px] shadow-md relative'>
			<form
				className='flex w-full h-full gap-6 items-center justify-center text-[14px]'
				onSubmit={handleSubmit}
			>
				<div className='relative'>
					<input
						type='text'
						id='date'
						name='date'
						className={`border rounded-lg p-2 outline-none w-44 ${
							errors.date ? 'border-red-500' : 'border-gray-300'
						}`}
						placeholder='Select Date'
						value={formData.date}
						onChange={handleInputChange}
						onFocus={(e) => (e.target.type = 'date')}
						onBlur={(e) => (e.target.type = 'text')}
					/>
					{errors.date && (
						<p className='absolute text-red-500 text-xs font-semibold ml-1 mt-1'>
							{errors.date}
						</p>
					)}
				</div>
				<div className='relative'>
					<input
						type='text'
						id='time'
						name='time'
						className={`border rounded-lg p-2 w-36 outline-none ${
							errors.time ? 'border-red-500' : ''
						}`}
						placeholder='Select Time'
						value={formData.time}
						onChange={handleInputChange}
						onFocus={(e) => (e.target.type = 'time')}
						onBlur={(e) => (e.target.type = 'text')}
					/>
					{errors.time && (
						<p className='absolute text-red-500 text-xs font-semibold ml-1 mt-1'>
							{errors.time}
						</p>
					)}
				</div>
				<div className='relative'>
					<input
						type='text'
						id='name'
						name='name'
						className={`border rounded-lg p-2 w-36 outline-none ${
							errors.name ? 'border-red-500' : ''
						}`}
						placeholder='Person'
						value={formData.name}
						onChange={handleInputChange}
					/>
					{errors.name && (
						<p className='absolute text-red-500 text-xs font-semibold ml-1 mt-1'>
							{errors.name}
						</p>
					)}
				</div>
				<div className='relative'>
					<input
						type='email'
						id='email'
						name='email'
						className={`border rounded-lg p-2 w-44 outline-none ${
							errors.email ? 'border-red-500' : ''
						}`}
						placeholder='E-mail'
						value={formData.email}
						onChange={handleInputChange}
					/>
					{errors.email && (
						<p className='absolute text-red-500 text-xs font-semibold ml-1 mt-1'>
							{errors.email}
						</p>
					)}
				</div>
				<button
					type='submit'
					className='bg-myOrange text-white rounded-md px-4 py-2 font-semibold font-openSans hover:bg-myOrange/80 transition-colors ease-in-out duration-300'
				>
					Book Table
				</button>
			</form>
			{isFormSubmitted && (
				<div className='relative flex justify-center'>
					<div className='absolute px-4 bg-green-200 text-green-800 p-2 mt-2 rounded-md'>
						Your table is booked!
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingForm;
