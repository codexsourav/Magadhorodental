import { useEffect, useState } from "react";
import { ContactCard } from "../../Components/Admin/Card"
import { AdminWrapper } from "../../Wrapper/AdminWrapper"
import { IContactFormData } from "../../types/DataInterface";
import { makeRequest } from "../../lib/makeApi";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import ForbiddenPage from "../../pages/Error/ForbiddenPage";

function Contact() {
    const [errr, setErrr] = useState(false);
    const [data, setData] = useState<IContactFormData[] | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/contacts", "GET");
            setData(responaseData.data);
        } catch (error) {
            setErrr(true);
        }
    };

    const deleteData = async (id: string) => {
        const ask = confirm("Are You Sure To Delete?");
        if (ask) {
            try {
                const responseData: AxiosResponse = await makeRequest("/api/contact/" + id, "DELETE");
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
            {
                data == null ? <div className="flex justify-center items-center h-96 text-xl">
                    Loading Doctors....
                </div> : data.length == 0 ? <div className="flex justify-center items-center h-96 text-xl">
                    No Contacts Found
                </div> : <div className="grid grid-cols-3 gap-10">
                    {
                        data.map((e, i) => <ContactCard id={e._id!} onDelete={deleteData} email={e.email} message={e.message} name={e.name} mobile={e.mobile} key={"conatct-" + i} />)
                    }
                </div>
            }
        </AdminWrapper>
    )
}
export default Contact