import { ReactNode, useEffect } from "react";
import Sidebar from "../Components/Admin/Sidebar";
import { keys } from "../lib/keys";

interface MyComponentProps {
    children: ReactNode;
    className?: string,
}

export const AdminWrapper: React.FC<MyComponentProps> = ({ children, className }) => {
    useEffect(() => {
        if (!localStorage.getItem(keys.authKey)) {
            window.location.replace("/admin/login")
        }
    }, []);

    return (
        <div className={`grid grid-cols-5 w-full ${className}`}>
            <div className="col-span-1">
                <Sidebar />
            </div>
            <div className="p-12 col-span-4">
                {children}
            </div>
        </div>
    )
}