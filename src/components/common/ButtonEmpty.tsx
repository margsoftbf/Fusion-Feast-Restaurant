import { ButtonProps } from "@/types/types";

const ButtonEmpty = ({
	children,
	onClick,
	className,
}: ButtonProps) => {
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
