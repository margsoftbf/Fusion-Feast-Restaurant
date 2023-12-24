import React from 'react';

interface PromoProps {
	promoCode: string;
	setPromoCode: (code: string) => void;
	isPromoApplied: boolean;
	handleApplyPromoCode: () => void;
	triedToApply: boolean;
}

const Promo: React.FC<PromoProps> = ({
	promoCode,
	setPromoCode,
	isPromoApplied,
	handleApplyPromoCode,
	triedToApply,
}) => {
	return (
		<div className='border-t py-2 border-gray-200 flex flex-col items-center gap-2 justify-between w-full'>
			<div className='flex items-center gap-2 justify-between w-full'>
				<input
					value={promoCode}
					onChange={(e) => setPromoCode(e.target.value)}
					disabled={isPromoApplied}
					type='text'
					className='bg-gray-200 block w-2/3 text-xs rounded-md border-0 py-1 indent-2 text-gray-900 shadow-sm  ring-inset ring-gray-300 placeholder:text-gray-400 outline-none'
					placeholder='Coupon Code'
				/>
				<button
					onClick={handleApplyPromoCode}
					disabled={isPromoApplied}
					className='w-1/3 inline-flex  py-1 bg-myOrange rounded-md justify-center items-center text-xs text-black font-oswald tracking-wider hover:bg-third hover:text-white transition duration-300 ease-in-out'
				>
					Apply code
				</button>
			</div>
			{triedToApply &&
				(isPromoApplied ? (
					<div className='flex items-center gap-2 justify-between w-full'>
						<span className='text-xs text-green-900 font-bold font-oswald ml-1'>
							Promo code applied
						</span>
					</div>
				) : (
					<div className='flex items-center gap-2 justify-between w-full'>
						<span className='text-xs text-red-900 font-bold font-oswald ml-1'>
							Error: Invalid promo code
						</span>
					</div>
				))}
		</div>
	);
};

export default Promo;
