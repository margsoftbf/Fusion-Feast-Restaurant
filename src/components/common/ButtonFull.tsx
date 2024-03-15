import { ButtonFullProps } from "@/types/types";

const ButtonFull = ({
	children,
	onClick,
	className,
}: ButtonFullProps) => {
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
