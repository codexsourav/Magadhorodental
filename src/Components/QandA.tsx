import { useState } from "react";
import { IFAQData } from "../types/DataInterface";

function QandA({ data }: { data: IFAQData[] }) {
    return (
        <div className="m-auto max-w-[1400px] px-5 md:px-10 md:pt-20 mt-20">
            <div className="flex justify-center  items-center m-auto flex-col  h-full">
                <h1 className="md:text-5xl text-3xl font-extrabold text-slate-900">FAQ Questions</h1>
                <p className="text-center mt-5 mb-8">Here you find the answers to some of the most frequently asked questions regarding</p>
                {
                    data.map((e, i) => {
                        return <Accordion
                            key={"faq-" + i}
                            title={e.qus}
                            content={e.ans}
                            isLast={(data.length - 1) == i}
                        />
                    })
                }

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

export const Accordion: React.FC<AccordionProps> = ({ title, content, isLast = false }) => {
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
