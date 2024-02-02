import React, { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const InputBox: React.FC<InputProps> = ({ label, placeholder, ...props }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default InputBox;


export const TextArea: React.FC<TextareaProps> = ({ label, placeholder, ...props }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-gray-700  text-sm font-bold mb-2">{label}</label>}
            <textarea

                className="shadow appearance-none h-60 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={placeholder}
                {...props}
            ></textarea>
        </div>
    );
};

