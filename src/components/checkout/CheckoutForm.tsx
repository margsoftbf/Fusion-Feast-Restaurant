import useCart from '@/hooks/useCart';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { PaymentFormDataTypes } from '@/types/types';
import { clearCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';

const CheckoutForm = () => {
    const dispatch = useDispatch();
	const { orderTotal } = useCart();
	const initialFormData: PaymentFormDataTypes = {
		email: '',
		nameOnCard: '',
		cardNumber: '',
		expirationDate: '',
		cvc: '',
		address: '',
		city: '',
		state: '',
		postalCode: '',
	};

	const [formData, setFormData] =
		useState<PaymentFormDataTypes>(initialFormData);

	const [errors, setErrors] = useState<Partial<PaymentFormDataTypes>>({});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleInputMax = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === 'card-number') {
			e.target.value = e.target.value.slice(0, 16);
		} else if (e.target.id === 'cvc') {
			e.target.value = e.target.value.slice(0, 3);
		} else if (e.target.id === 'postal-code') {
			e.target.value = e.target.value.slice(0, 5);
		}
	};

	const validateForm = (): boolean => {
		let isValid = true;
		let newErrors: Partial<PaymentFormDataTypes> = {};

		if (!formData.email) {
			newErrors.email = 'Email is required';
			isValid = false;
		}
		if (!formData.nameOnCard) {
			newErrors.nameOnCard = 'Name is required';
			isValid = false;
		}
		if (!formData.cardNumber) {
			newErrors.cardNumber = 'Card number is required';
			isValid = false;
		} else if (formData.cardNumber.length < 16) {
			newErrors.cardNumber = 'Card number must be 16 digits';
			isValid = false;
		}

		if (!formData.expirationDate) {
			newErrors.expirationDate = 'Expiration date is required';
			isValid = false;
		} else if (
			!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expirationDate)
		) {
			newErrors.expirationDate = 'Invalid date format (MM/YY)';
			isValid = false;
		}

		if (!formData.cvc) {
			newErrors.cvc = 'CVC is required';
			isValid = false;
		} else if (formData.cvc.length < 3) {
			newErrors.cvc = 'CVC must be 3 digits';
			isValid = false;
		}

		if (!formData.address) {
			newErrors.address = 'Address is required';
			isValid = false;
		}
		if (!formData.city) {
			newErrors.city = 'City is required';
			isValid = false;
		}
		if (!formData.state) {
			newErrors.state = 'State is required';
			isValid = false;
		}
		if (!formData.state) {
			newErrors.state = 'State is required';
			isValid = false;
		}

		if (!formData.postalCode) {
			newErrors.postalCode = 'Postal Code required';
			isValid = false;
		} else if (formData.postalCode.length < 5) {
			newErrors.postalCode = 'Postal must be 5 digits';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (validateForm()) {
			console.log('Form data submitted:', formData);

			setIsFormSubmitted(true);
			setTimeout(() => setIsFormSubmitted(false), 3000);

			setFormData(initialFormData);
            dispatch(clearCart());
		}
	};

	return (
		<div className='mx-auto max-w-lg rounded-md bg-white p-4 lg:mt-4 relative'>
			<form className='mt-2 text-white ' onSubmit={handleSubmit}>
				<div className='grid grid-cols-12 gap-x-4 gap-y-6'>
					<div className='col-span-full'>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-black'
						>
							Email address
						</label>
						<div className='mt-1'>
							<input
								type='email'
								id='email'
								name='email'
								autoComplete='email'
								value={formData.email}
								onChange={handleInputChange}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.email ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.email && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.email}
								</p>
							)}
						</div>
					</div>

					<div className='col-span-full'>
						<label
							htmlFor='name-on-card'
							className='block text-sm font-medium text-black'
						>
							Name on card
						</label>
						<div className='mt-1'>
							<input
								type='text'
								id='name-on-card'
								name='nameOnCard'
								autoComplete='cc-name'
								value={formData.nameOnCard}
								onChange={handleInputChange}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.nameOnCard ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.nameOnCard && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.nameOnCard}
								</p>
							)}
						</div>
					</div>

					<div className='col-span-full'>
						<label
							htmlFor='card-number'
							className='block text-sm font-medium text-black'
						>
							Card number
						</label>
						<div className='mt-1'>
							<input
								type='number'
								id='card-number'
								name='cardNumber'
								autoComplete='cc-number'
								onInput={handleInputMax}
								value={formData.cardNumber}
								onChange={handleInputChange}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.cardNumber ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.cardNumber && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.cardNumber}
								</p>
							)}
						</div>
					</div>

					<div className='col-span-8 sm:col-span-9'>
						<label
							htmlFor='expiration-date'
							className='block text-sm font-medium text-black'
						>
							Expiration date (MM/YY)
						</label>
						<div className='mt-1'>
							<input
								type='text'
								name='expirationDate'
								id='expiration-date'
								autoComplete='cc-exp'
								value={formData.expirationDate}
								onChange={handleInputChange}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.expirationDate ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.expirationDate && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.expirationDate}
								</p>
							)}
						</div>
					</div>

					<div className='col-span-4 sm:col-span-3'>
						<label
							htmlFor='cvc'
							className='block text-sm font-medium text-black'
						>
							CVC
						</label>
						<div className='mt-1'>
							<input
								type='text'
								name='cvc'
								id='cvc'
								autoComplete='csc'
								onInput={handleInputMax}
								value={formData.cvc}
								onChange={handleInputChange}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.cvc ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.cvc && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.cvc}
								</p>
							)}
						</div>
					</div>

					<div className='col-span-full'>
						<label
							htmlFor='address'
							className='block text-sm font-medium text-black'
						>
							Address
						</label>
						<div className='mt-1'>
							<input
								type='text'
								id='address'
								name='address'
								autoComplete='street-address'
								value={formData.address}
								onChange={handleInputChange}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.address ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.address && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.address}
								</p>
							)}
						</div>
					</div>

					<div className='col-span-full sm:col-span-4'>
						<label
							htmlFor='city'
							className='block text-sm font-medium text-black'
						>
							City
						</label>
						<div className='mt-1'>
							<input
								type='text'
								id='city'
								name='city'
								autoComplete='address-level2'
								value={formData.city}
								onChange={handleInputChange}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.city ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.city && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.city}
								</p>
							)}
						</div>
					</div>

					<div className='col-span-full sm:col-span-4'>
						<label
							htmlFor='state'
							className='block text-sm font-medium text-black'
						>
							State / Province
						</label>
						<div className='mt-1'>
							<input
								type='text'
								id='state'
								name='state'
								autoComplete='address-level1'
								value={formData.state}
								onChange={handleInputChange}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.state ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.state && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.state}
								</p>
							)}
						</div>
					</div>

					<div className='col-span-full sm:col-span-4'>
						<label
							htmlFor='postal-code'
							className='block text-sm font-medium text-black'
						>
							Postal code
						</label>
						<div className='mt-1'>
							<input
								type='text'
								id='postal-code'
								name='postalCode'
								autoComplete='postal-code'
								value={formData.postalCode}
								onChange={handleInputChange}
								onInput={handleInputMax}
								className={`block w-full border-gray-300 bg-gray-200 shadow-sm border rounded-lg p-1 outline-none text-black ${
									errors.postalCode ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
							{errors.postalCode && (
								<p className='text-red-500 text-xs font-semibold mt-1'>
									{errors.postalCode}
								</p>
							)}
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4 mt-4'>
					<button
						type='submit'
						className='mt-6 w-full rounded-md border border-transparent bg-myOrange px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-secondary hover:text-white transition duration-300 ease-in-out'
					>
						Pay ${orderTotal.toFixed(2)}
					</button>
					<button
						type='submit'
						className='flex w-full items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-third hover:text-white transition duration-300 ease-linear'
					>
						<span className='sr-only'>Pay with Apple Pay</span>
						<svg className='h-5 w-auto' fill='currentColor' viewBox='0 0 50 20'>
							<path d='M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z' />
						</svg>
					</button>
				</div>
				{isFormSubmitted && (
					<div className='absolute top-2 left-1/2 transform -translate-x-1/2 w-full flex justify-center'>
						<p className=' bg-green-200 px-24 py-12 font-semibold text-green-800 rounded-md'>
							Order successful!
						</p>
					</div>
				)}
			</form>
		</div>
	);
};

export default CheckoutForm;
