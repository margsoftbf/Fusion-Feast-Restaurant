import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '@/types/types';

interface ModalContextType {
	isModalOpen: boolean;
	selectedProduct: Product | null;
	openModal: (product: Product) => void;
	closeModal: () => void;
	handleOpenModal?: (product: Product) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
	children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const openModal = (product: Product) => {
		setSelectedProduct(product);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProduct(null);
	};

	return (
		<ModalContext.Provider
			value={{
				isModalOpen,
				selectedProduct,
				openModal,
				closeModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}
	return context;
};
