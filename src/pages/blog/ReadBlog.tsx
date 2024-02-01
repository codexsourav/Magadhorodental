import { useParams } from "react-router-dom"
import { ContainerWrapper, UserWrapper } from "../../Wrapper/UserWrapper"
import { useEffect, useState } from "react";
import { IBlogData } from "../../types/DataInterface";
import { makeRequest } from "../../lib/makeApi";
import Loader from "../../Components/Loader";
import NotFoundPage from "../Error/NotFound";
import { formatDate } from "../../lib/date";

function ReadBlog() {
    const { id } = useParams();
    const [data, setData] = useState<IBlogData | null>(null);
    const [error, setError] = useState(false)


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/blog/" + id, "GET");
            setData(responaseData.data);
            document.title = responaseData.data?.title ?? "Blog";
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, [])

    if (error) {
        return <NotFoundPage />
    }

    if (data == null) {
        return <Loader />;
    }

    return (
        <UserWrapper>
            <ContainerWrapper>
                <div className="min-h-screen pt-16">
                    <h1 className="md:text-2xl text-3xl font-extrabold text-slate-900">{data.title}</h1>
                    <p className="mt-4">Date: {formatDate(data.date!)}</p>
                    <div className="mt-12" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </div>
            </ContainerWrapper>
        </UserWrapper>
    )
}
export default ReadBlog