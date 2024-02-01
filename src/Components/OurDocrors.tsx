import { HiArrowLongRight } from "react-icons/hi2";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiFacebookLine } from "react-icons/ri";
import { IDoctorData } from "../types/DataInterface";
import { apiUrl } from "../lib/makeApi";





function OurDoctor({ data }: { data: IDoctorData[] }) {
    return (
        <div className="m-auto max-w-[1400px] px-5 md:px-10 md:pt-28 mt-20 " id="doctors">
            <div className="flex justify-center  items-center gap-5 m-auto flex-col  h-full">
                <h1 className="md:text-5xl text-3xl font-extrabold text-slate-900">Our Doctors</h1>
                <p className="text-center m-3">Our team at Dentally will take care of your precious smile</p>
                <div className="grid md:grid-cols-4 grid-cols-1  gap-7 w-full mt-2">
                    {
                        data.map((e, i) => {
                            return <OurDoctorBox data={e} key={"Service-" + i} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}



export default OurDoctor;


function OurDoctorBox({ data }: { data: IDoctorData }) {
    return (
        <div className="border h-auto w-full ">
            <div className="relative group">
                <img src={apiUrl + "/uploads/" + data.image} className="h-64 md:h-64 w-full object-cover " />
                <a href={"/doctor/" + data.slug} className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50">
                    <div className="flex items-center justify-center h-full cursor-pointer">
                        <HiArrowLongRight className="text-white text-5xl" />
                    </div>
                </a>
            </div>
            <div className="flex flex-col gap-4 py-4 ">
                <h1 className="font-bold capitalize  text-xl flex justify-center items-center text-center text-blue-950">{data.name}</h1>
                <p className="text-center text-sm line-clamp-1">{data.position}</p>
                <div className="flex justify-center items-center gap-6">
                    <a href={data.links.fb} target="_blank" className="flex justify-center items-center w-8 h-8 "><RiFacebookLine className="text-blue-950" size={18} /></a>
                    <a href={data.links.insta} target="_blank" className="flex justify-center items-center w-8 h-8 "><FaInstagram className="text-blue-950" size={18} /></a>
                    <a href={data.links.twitter} target="_blank" className="flex justify-center items-center w-8 h-8 "><FaXTwitter className="text-blue-950" size={18} /></a>
                </div>
            </div>
        </div>
    )
}
