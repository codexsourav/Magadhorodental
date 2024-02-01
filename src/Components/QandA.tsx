import { useState } from "react";

function QandA() {
    return (
        <div className="m-auto max-w-[1400px] px-5 md:px-10 md:pt-20 mt-20">
            <div className="flex justify-center  items-center m-auto flex-col  h-full">
                <h1 className="md:text-5xl text-3xl font-extrabold text-slate-900">FAQ Questions</h1>
                <p className="text-center mt-5 mb-8">Here you find the answers to some of the most frequently asked questions regarding</p>
                <Accordion
                    title="My Age is 36 years, Can I go for Braces? What will be the cost of Invisible Braces / Aligners in Patna?"
                    content="Apart From Other Advantages Of Invisible Braces Over Traditional Braces Like, Removable, More Comfortable, Boosts Self-Confidence, Fewer Dental Visit, Freedom To Eat Any Food, Shorter Treatment Period, Prevent Other Dental Issue, Allow For Better Oral Hygiene One Of Best Advantages Is, It Can Be Done At Any Age If You Have Good Periodontal Health. Invisible Braces Are Effective At Any Age.We Have Done Successful Treatment Of 41 Years Old Patients At Magadh Oro Dental By Professional Aligners."
                />
                <Accordion
                    title="If the root is fine, we can restore it with post & core after root canal treatment."
                    content="Apart From Other Advantages Of Invisible Braces Over Traditional Braces Like, Removable, More Comfortable, Boosts Self-Confidence, Fewer Dental Visit, Freedom To Eat Any Food, Shorter Treatment Period, Prevent Other Dental Issue, Allow For Better Oral Hygiene One Of Best Advantages Is, It Can Be Done At Any Age If You Have Good Periodontal Health. Invisible Braces Are Effective At Any Age.We Have Done Successful Treatment Of 41 Years Old Patients At Magadh Oro Dental By Professional Aligners."
                />
                <Accordion
                    title="What type of Oral & Maxillofacial Prosthesis available at Magadh Oro Dental, Patna?"
                    content="From Basic Prosthesis Like Full Mouth Complete Dentures, Flexible Removable Partial Dentures, Cast Partial Denture, Implant Supported Overdenture, Implant Supported Fixed Denture Our Prosthodontist Dr. Lav Kumar Has Done So Many Cases Of Full Mouth Rehabilitation In Hemi Maxillectomy Or Full Maxillectomy Cases. We Have Done Facial & Eye Prosthesis After Cancer Surgery, At Magadh Oro Dental - Implant & Orthodontic Clinic , Patna"
                />
                <Accordion
                    title="What To Do If My Permanent Teeth Become Loose ?"
                    content="Dr. Abhishek Verma, Most Experienced Periodontist In Patna, Treat Loose Teeth At Magadh Oro Dental - Implant & Orthodontic Clinic By 1 Deep Cleaning Of Teeth. Once You Develop The Late Stages Of Periodontitis, Pockets May Form, & Bacteria Causing Infections To The Bones And Gums. Our Periodontist At Magadh Oro Dental - Implant & Orthodontic Clinic Cleans Bacteria Out Of These Pockets With The Help Of Deep Scaling. If You Do Not Clean Out The Bacteria, They Will Spread Further And Make Your Loose Teeth Issue Worsen. 2 Splinting Our Periodontist Supports Your Loose Tooth By Placing A Tiny, Flexible Splint Around It To Prevent It From Moving. This Splint Will Be Attached To Your Teeth Using Dental Cement. It Will Be Left Intact For At Least Two Weeks Or Until Your Tissues And Ligaments Have Completely Healed. 3 Periodontal Flap Surgery Dr. Abhishek Verma Will Make A Cut Into Your Gums And Retract Tissues So That He Can Perform A Root Planning Or Scaling. The Gum Tissues Are Then Reattached After The Procedure Is Done. This Treatment Option Also Helps In Preventing Tooth Loss. 4 Bone Grafts Simple Scaling And Root Planning May Not Be Enough When Dealing With Bacteria Found Deep Under The Gum Line. You May Have To Go For Bone Graft To Deal With Getting A Loose Tooth. This Procedure Involves Pulling The Gum Tissue Further Away From The Teeth For Deeper Cleaning While At The Same Time Filling In Every Pocket Using A Bone Graft. 5 Mouthguards In Cases Where Teeth Grinding Is The Cause Of The Problem, Our Periodontist Will Give You A Mouth Guard To Wear While Sleeping. This Will Help You From Grinding Your Teeth And Clenching Your Jaws At Night."
                    isLast={true}
                />
            </div>
        </div>

    )
}
export default QandA;


interface AccordionProps {
    title: string;
    content: React.ReactNode;
    isLast?: boolean,
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isLast = false }) => {
    const accordionId = title.toLowerCase().replace(/ /g, '-');
    const [show, setShow] = useState(false)
    return (
        <div id={`accordion-collapse-${accordionId}`} data-accordion="collapse" className="w-full max-w-[900px]">
            <h2 id={`accordion-collapse-heading-${accordionId}`}>
                <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue-950 border ${isLast ? "border-b-1" : "border-b-0"} border-gray-200  outline-none   hover:bg-gray-100 gap-3`}
                    data-accordion-target={`#accordion-collapse-body-${accordionId}`}
                    aria-expanded="true"
                    aria-controls={`accordion-collapse-body-${accordionId}`}
                >
                    <span>{title}</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 ${show ? "rotate-0" : "rotate-180"} shrink-01`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id={`accordion-collapse-body-${accordionId}`} className={show ? "block" : "hidden"} aria-labelledby={`accordion-collapse-heading-${accordionId}`}>
                <div className={`p-5 border ${isLast ? "border-b-1" : "border-b-0"} border-gray-200 `}>
                    {content}
                </div>
            </div>
        </div>
    );
};
