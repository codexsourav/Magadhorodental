import { useParams } from "react-router-dom";
import { ContainerWrapper, UserWrapper } from "../Wrapper/UserWrapper"
import { useEffect, useState } from "react";
import { IServicesData } from "../types/DataInterface";
import { makeRequest } from "../lib/makeApi";
import NotFoundPage from "./Error/NotFound";
import Loader from "../Components/Loader";

function Pricing() {
    const { id } = useParams();
    const [data, setData] = useState<IServicesData | null>(null);
    const [error, setError] = useState(false)


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/service/" + id, "GET");
            setData(responaseData.data);
            document.title = responaseData.data?.title ?? "Doctor Info";
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
                    <h1 className="md:text-3xl text-3xl font-extrabold text-slate-900 capitalize">{data.title}</h1>
                    <div className="mt-12" dangerouslySetInnerHTML={{ __html: data.content }}></div>

                </div>
            </ContainerWrapper>
        </UserWrapper>
    )
}
export default Pricing