import { Link } from "react-router-dom"
import { VideoCard } from "../../Components/Admin/Card"
import { AdminWrapper } from "../../Wrapper/AdminWrapper"
import { useEffect, useState } from "react";
import { IVideoData } from "../../types/DataInterface";
import { makeRequest } from "../../lib/makeApi";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import ForbiddenPage from "../../pages/Error/ForbiddenPage";

function Videos() {
    const [errr, setErrr] = useState(false);
    const [data, setData] = useState<IVideoData[] | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/videos", "GET");
            setData(responaseData.data);
        } catch (error) {
            setErrr(true);
        }
    };

    const deleteData = async (id: string) => {
        const ask = confirm("Are You Sure To Delete?");
        if (ask) {
            try {
                const responseData: AxiosResponse = await makeRequest("/api/video/" + id, "DELETE");
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
            <Link to="/admin/video/add" className=" pb-5 block">Add New Video</Link>
            {
                data == null ? <div className="flex justify-center items-center h-96 text-xl">
                    Loading Doctors....
                </div> : <div className="grid grid-cols-3 gap-10">
                    {data?.map((e, i) => {
                        return <VideoCard title={e.title} key={"Video-" + i} id={e._id!} videoid={e.videoId} onDelete={deleteData} />
                    })}
                </div>
            }
        </AdminWrapper>
    )
}
export default Videos