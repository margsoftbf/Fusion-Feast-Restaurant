import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product, ModalContextType, ModalProviderProps } from '@/types/types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
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
