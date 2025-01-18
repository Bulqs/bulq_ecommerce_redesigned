import React from 'react';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const BrandAndCategoryModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
                <button onClick={onClose} className="absolute top-2 right-2">
                    ✖️
                </button>
                {children}
            </div>
        </div>
    );
};

export default BrandAndCategoryModal;
