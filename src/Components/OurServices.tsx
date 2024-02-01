import { HiArrowLongRight } from "react-icons/hi2";
import { IServicesData } from "../types/DataInterface";
import { apiUrl } from "../lib/makeApi";

function OurServices({ data }: { data: IServicesData[] }) {
    return (
        <div className="m-auto max-w-[1400px] px-5 md:px-10 md:pt-28 mt-20" id="services">
            <div className="flex justify-center  items-center gap-5 m-auto flex-col  h-full">
                <h1 className="md:text-5xl text-3xl font-extrabold text-slate-900">Our Services</h1>
                <p className="text-center m-3">View the services & treatments our Dental Practice provides below</p>
                <div className="grid md:grid-cols-3 grid-cols-1  gap-7 w-full mt-2">
                    {
                        data.map((e, i) => {
                            return <OurServicesBox slug={e.slug!} image={apiUrl + "/uploads/" + e.image} title={e.title} key={"Service-" + i} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}



export default OurServices;


function OurServicesBox({ image, title, slug }: { image: string, title: string, slug: string }) {
    return (
        <div className="border h-auto w-full ">
            <div className="relative group">
                <img src={image} className="h-56 w-full object-cover " />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50">
                    <a href={"/service/" + slug} className="flex items-center justify-center h-full cursor-pointer">
                        <HiArrowLongRight className="text-white text-5xl" />
                    </a>
                </div>
            </div>
            <h1 className="font-bold capitalize py-5 text-xl flex justify-center items-center text-center">{title}</h1>
        </div>
    )
}
