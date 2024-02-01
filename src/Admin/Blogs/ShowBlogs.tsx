import { Link } from "react-router-dom"
import { BlogCard } from "../../Components/Admin/Card"
import { AdminWrapper } from "../../Wrapper/AdminWrapper"
import { AxiosResponse } from "axios";
import { makeRequest } from "../../lib/makeApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import ForbiddenPage from "../../pages/Error/ForbiddenPage";
import { IBlogData } from "../../types/DataInterface";

function ShowBlogs() {
    const [errr, setErrr] = useState(false);
    const [data, setData] = useState<IBlogData[] | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/blogs", "GET");
            setData(responaseData.data);
        } catch (error) {
            setErrr(true);
        }
    };

    const deleteData = async (id: string) => {
        const ask = confirm("Are You Sure To Delete?");
        if (ask) {
            try {
                const responseData: AxiosResponse = await makeRequest("/api/blog/" + id, "DELETE");
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
            <Link to="/admin/blog/add" className=" pb-5 block">Add New Blog</Link>
            {data == null ? <div className="flex justify-center items-center h-96 text-xl">
                Loading Doctors....
            </div> : data.map((e, i) => {
                return <BlogCard key={"blog-" + i} date={e.date!} title={e.title} id={e._id!} onDelete={deleteData} />;
            })}

        </AdminWrapper>
    );
}

export default ShowBlogs