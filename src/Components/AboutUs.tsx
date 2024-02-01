import { TiStarFullOutline } from "react-icons/ti";
import { FaTeethOpen } from "react-icons/fa";
import { RiMapPinTimeLine } from "react-icons/ri";


function AboutUs() {
    return (
        <div className="m-auto max-w-[1400px] px-5 md:px-10 md:pt-28 mt-20" id="about">
            <div className="flex justify-center  items-center gap-5 m-auto flex-col  h-full">
                <h1 className="md:text-5xl text-3xl font-extrabold text-slate-900">About US</h1>
                <p className="text-center m-3">We care for your Dental Health your cute smile our responsibility</p>
                <div className="grid md:grid-cols-5 grid-cols-1 gap-10">

                    <div className="md:col-span-2">
                        <img src="images/about.jpg" className="h-96 w-full object-cover border-2" />
                    </div>
                    <div className="md:col-span-3">
                        <h1 className="text-2xl font-extrabold mb-5 leading-10 text-blue-950">
                            Magadh Oro Dental is a Patna Based Dental Clinic
                            <br />
                            <span className="text-blue-600">We specialize in Cosmetic Dentistry</span>
                        </h1>
                        <p className="text-xl leading-10 text-slate-950">We Have Best Team Of Specialized Dentist - Oral Maxillofacial Surgen, Periodontist, Prosthodontist, Pediatric Dentist, Cosmetic Dentist, Implantologist & Endodontist Under One Roof.</p>
                        <div className="grid grid-cols-3 mt-5">
                            <div className="flex flex-col gap-3 md:justify-center md:items-center text-blue-950">
                                <TiStarFullOutline size={70} />
                                <h1 className="font-bold md:text-3xl text-2xl">100%</h1>
                                <p className="text-lg text-center">Patient Satisfaction</p>
                            </div>
                            <div className="flex flex-col gap-3 justify-center items-center text-blue-950">
                                <FaTeethOpen size={70} />
                                <h1 className="font-bold md:text-3xl text-2xl">10K+</h1>
                                <p className="text-lg text-center">Patients Served</p>
                            </div>
                            <div className="flex flex-col gap-3 justify-center items-center text-blue-950">
                                <RiMapPinTimeLine size={70} />
                                <h1 className="font-bold md:text-3xl text-2xl">24/7</h1>
                                <p className="text-lg text-center">Office Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default AboutUs;

