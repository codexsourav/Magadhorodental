import { useEffect, useState } from "react";
import { DahbordCard } from "../Components/Admin/Card"
import { AdminWrapper } from "../Wrapper/AdminWrapper"
import { makeRequest } from "../lib/makeApi";
import ForbiddenPage from "../pages/Error/ForbiddenPage";
interface AppStats {
    users: number;
    blogs: number;
    doctors: number;
    services: number;
    videos: number;
    conatcts: number;
}


function Admin() {
    const [errr, setErrr] = useState(false);
    const [data, setData] = useState<AppStats | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/dashboard", "GET");
            setData(responaseData.data);
        } catch (error) {
            setErrr(true);
        }
    };


    useEffect(() => {
        loadData();
    }, [])

    if (errr) {
        return <ForbiddenPage />
    }
    console.log(data);

    return (
        <AdminWrapper>
            <h1 className=" font-extrabold text-5xl mb-10">Welcome` Admin</h1>
            {
                data == null ? <div className="flex justify-center items-center h-96 text-xl">
                    Loading Doctors....
                </div> : <div className="grid grid-cols-4 gap-8">
                    <DahbordCard title="Total Users" value={data!.users ? data?.users.toString() : "0"} />
                    <DahbordCard title="Doctors" value={data!.doctors ? data?.doctors.toString() : "0"} />
                    <DahbordCard title="Services" value={data!.services ? data?.services.toString() : "0"} />
                    <DahbordCard title="Videos" value={data!.videos ? data?.videos.toString() : "0"} />
                    <DahbordCard title="Blogs" value={data!.blogs ? data?.blogs.toString() : "0"} />
                    <DahbordCard title="Contacts" value={data!.conatcts ? data?.conatcts.toString() : "0"} />
                </div>
            }
        </AdminWrapper>
    )
}
export default Admin