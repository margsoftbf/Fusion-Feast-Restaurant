type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
};

const ButtonFull: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
}) => {
	return (
		<button
			onClick={onClick}
			className={`inline-flex py-2 px-5 bg-myOrange rounded-lg justify-center items-center gap-2.5 text-base text-black font-oswald tracking-wider hover:bg-white transition duration-300 ease-in-out ${className}`}
		>
			{children}
		</button>
	);
};

export default ButtonFull;
