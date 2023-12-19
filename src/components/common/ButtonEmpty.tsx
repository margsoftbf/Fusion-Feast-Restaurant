type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
};

const ButtonEmpty: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
}) => {
	return (
		<button
			onClick={onClick}
			className={`mt-2 border px-6 py-2 rounded-md border-myOrange hover:bg-myOrange hover:text-white text-myOrange transition ease-in-out duration-200 font-oswald ${className}`}
		>
			{children}
		</button>
	);
};

export default ButtonEmpty;
