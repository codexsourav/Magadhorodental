import { ReactNode } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";


function TopHeader() {
    return (
        <>
            <div className=" w-full h-20 bg-white hidden md:block ">
                <div className="flex justify-between items-center gap-5 m-auto max-w-[1400px] px-10 h-full">

                    <TopBox
                        link="tel:+91 9135086087"
                        icon={<FaPhoneAlt className="text-blue-950" size={12} />}
                        text="+91 9135086087"
                    />

                    <TopBox
                        link="mailto:magadhorodentalclinic@gmail.com"
                        icon={<MdEmail className="text-blue-950" size={12} />}
                        text="magadhorodentalclinic@gmail.com"
                    />

                    <TopBox
                        link="https://www.google.com/maps?ll=25.59082,85.159947&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=5197026168119514541"
                        icon={<FaMapMarkedAlt className="text-blue-950" size={12} />}
                        text="K-108, Hanuman Nagar Rd, Hanuman Nagar, Patna"
                    />
                    <TopBox
                        link="#"
                        icon={<IoTime className="text-blue-950" size={16} />}
                        text="Monday To Saterday 9.00AM - 8.00PM"
                    />

                </div>

            </div >
            <div className=" w-full h-14 md:h-20 flex justify-between items-center p-5 md:px-10 md:hidden">
                <MobileTopBox text="+91 9135086087"
                    link="tel:+91 9135086087"
                    icon={<FaPhoneAlt className="text-blue-950" size={12} />}
                />
                <MobileTopBox text="magadhorodentalclinic@gmail.com"
                    link="mailto:magadhorodentalclinic@gmail.com"
                    icon={<MdEmail className="text-blue-950" size={12} />}
                />

            </div>
        </>
    )
}
export default TopHeader;


function TopBox({ icon, text, link }: { text: string, icon: ReactNode, link: string }) {
    return (
        <a href={link} className="logo h-full  items-center gap-3 flex">
            <div className=" justify-center items-center hidden lg:flex">
                <div className="border-2 border-blue-950 w-8 h-8 flex justify-center items-center rounded-full">
                    {icon}
                </div>
            </div>
            <p className="font-bold text-blue-950 text-sm">{text}</p>
        </a >
    )
}



function MobileTopBox({ text, icon, link }: { text: string, icon: ReactNode, link: string, }) {
    return (
        <a href={link} className="logo h-full flex  items-center gap-3">
            <div className=" justify-center items-center sm:flex hidden">
                <div className="border-2 border-blue-950 w-8 h-8 flex justify-center items-center rounded-full">
                    {icon}
                </div>
            </div>
            <p className="font-bold text-blue-950 text-[12px] md:font-[10px]">{text}</p>
        </a >
    )
}