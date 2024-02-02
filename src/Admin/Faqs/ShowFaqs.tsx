import { Link } from "react-router-dom"
import Button from "../../Components/Admin/Button"
import { Accordion } from "../../Components/QandA"
import { AdminWrapper } from "../../Wrapper/AdminWrapper"
import { useEffect, useState } from "react";
import ForbiddenPage from "../../pages/Error/ForbiddenPage";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import { makeRequest } from "../../lib/makeApi";
import { IFAQData } from "../../types/DataInterface";

function ShowFaqs() {
    const [errr, setErrr] = useState(false);
    const [data, setData] = useState<IFAQData[] | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/faqs", "GET");
            setData(responaseData.data);
        } catch (error) {
            setErrr(true);
        }
    };

    const deleteData = async (id: string) => {
        const ask = confirm("Are You Sure To Delete?");
        if (ask) {
            try {
                const responseData: AxiosResponse = await makeRequest("/api/faq/" + id, "DELETE");
                toast.success(responseData.data.message);
                loadData();
            } catch (error: any) {
                toast.success(error.response.data.message);
            }
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    if (errr) {
        return <ForbiddenPage />
    }
    return (
        <AdminWrapper>
            <Link to="/admin/faq/add" className=" pb-5 block">Add New Service</Link>
            {data == null ? <div className="flex justify-center items-center h-96 text-xl">
                Loading Doctors....
            </div> : <div className="w-full">
                {
                    data.map((e, i) => {

                        return (<div className="w-full" key={"FAq-" + i}>
                            <div className="flex justify-center items-center gap-5">
                                <Accordion content={e.ans} title={e.qus} isLast />
                                <div className="flex gap-5">
                                    <a href={"/admin/faq/" + e._id}><Button>Update</Button></a>
                                    <Button variant="danger" onClick={() => deleteData(e._id!)}>Delete</Button>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>

            }
        </AdminWrapper>
    )
}
export default ShowFaqs