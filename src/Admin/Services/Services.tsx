
import { Link } from "react-router-dom"
import Card from "../../Components/Admin/Card"
import { AdminWrapper } from "../../Wrapper/AdminWrapper"
import { useEffect, useState } from "react";
import { IServicesData } from "../../types/DataInterface";
import { apiUrl, makeRequest } from "../../lib/makeApi";
import ForbiddenPage from "../../pages/Error/ForbiddenPage";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

function Services() {
    const [errr, setErrr] = useState(false);
    const [data, setData] = useState<IServicesData[] | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/services", "GET");
            setData(responaseData.data);
        } catch (error) {
            setErrr(true);
        }
    };

    const deleteData = async (id: string) => {
        const ask = confirm("Are You Sure To Delete?");
        if (ask) {
            try {
                const responseData: AxiosResponse = await makeRequest("/api/service/" + id, "DELETE");
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
            <Link to="/admin/service/add" className=" pb-5 block">Add New Service</Link>

            {
                data == null ? <div className="flex justify-center items-center h-96 text-xl">
                    Loading Doctors....
                </div> : <div className="grid grid-cols-3 gap-10">
                    {data?.map((e, i) => <Card id={e._id!} onDelete={(e) => deleteData(e)} key={"service-" + i} imageUrl={apiUrl + "/uploads/" + e.image} title={e.title} />)}
                </div>
            }
        </AdminWrapper>
    )
}
export default Services