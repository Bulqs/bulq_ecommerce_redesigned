import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {

    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    custom?: string;
    icon?: IconType;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

}

const Buttons: React.FC<ButtonProps> = ({ onClick, icon: Icon, outline, label, disabled, small, custom }) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled} className={` disabled:opacity-70 disabled:cursor-not=allowed rounded-md hover:opacity-80 border-slate-700 flex items-center justify-center gap-2 
        ${outline ? "bg-appTitleBgColor border border-1 border-appNav hover:bg-appNav" : " bg-appNav hover:bg-appNav border-none"} 
        ${outline ? "text-white" : 'text-white'}
      
            ${small ? 'text-sm font-normal' : 'text-md font-semibold'}
            ${small ? 'py-2 px-2 border-[1px]' : 'py-3 px-4 border-2'}
            ${custom ? custom : ' '}
`}>
            {Icon && <Icon size={24} />}
            {label}
        </button >
    );
};

export default Buttons
