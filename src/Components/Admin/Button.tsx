import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
    const baseClasses = 'py-2 px-4 rounded focus:outline-none focus:shadow-outline';

    let variantClasses = '';

    switch (variant) {
        case 'secondary':
            variantClasses = 'bg-gray-300 text-gray-700 hover:bg-gray-400';
            break;
        case 'success':
            variantClasses = 'bg-green-500 text-white hover:bg-green-600';
            break;
        case 'danger':
            variantClasses = 'bg-red-500 text-white hover:bg-red-600';
            break;
        default:
            variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
            break;
    }

    return (
        <button className={`${baseClasses} ${variantClasses}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
