import React, { ReactNode } from 'react';
import TopHeader from '../Components/TopHeader';
import Navbar from '../Components/Navbar';
import ContactForm from '../Components/ConatctForm';
import Branches from '../Components/Branches';
import Footer from '../Components/Footer';

interface MyComponentProps {
    children: ReactNode;
    className?: string,
}

export const UserWrapper: React.FC<MyComponentProps> = ({ children }) => {

    return (
        <>
            <TopHeader />
            <Navbar />
            {children}
            <ContactForm />
            <Branches />
            <Footer />
        </>
    );
};




export const ContainerWrapper: React.FC<MyComponentProps> = ({ children, className }) => {
    return (
        <div className={`m-auto max-w-[1400px] px-5 md:px-10 ${className}`}>
            {children}
        </div>
    )
}