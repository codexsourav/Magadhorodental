import { useEffect, useState } from "react";
import { ContainerWrapper, UserWrapper } from "../Wrapper/UserWrapper"
import { IBlogData } from "../types/DataInterface";
import { makeRequest } from "../lib/makeApi";
import Loader from "../Components/Loader";
import { BlogBox } from "../Components/LatestBlogs";

function Blogs() {
    const [data, setData] = useState<IBlogData[] | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/blogs", "GET");
            setData(responaseData.data);
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        document.title = "Our Blogs"
        loadData();
    }, [])

    if (data == null) {
        return <Loader />;
    }
    return (
        <UserWrapper>
            <ContainerWrapper>
                <div className="min-h-screen pt-16">
                    <h1 className="md:text-4xl text-3xl font-extrabold text-slate-900">Read Latest Blogs</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8">
                        {
                            data.map((e) => {
                                return <BlogBox data={e} key={e._id!} />
                            })
                        }
                    </div>
                </div>
            </ContainerWrapper>
        </UserWrapper>
    )
}
export default Blogs