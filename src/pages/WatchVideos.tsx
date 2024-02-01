import { useEffect, useState } from "react";
import { ContainerWrapper, UserWrapper } from "../Wrapper/UserWrapper"
import { IVideoData } from "../types/DataInterface";
import { makeRequest } from "../lib/makeApi";
import Loader from "../Components/Loader";
import { WatchVideoBox } from "../Components/WatchVideos";


function WatchVideos() {
    const [data, setData] = useState<IVideoData[] | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/videos", "GET");
            setData(responaseData.data);
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        document.title = "Our Latest Videos";
        loadData();
    }, [])

    if (data == null) {
        return <Loader />;
    }
    return (
        <UserWrapper>
            <ContainerWrapper>
                <div className="min-h-screen pt-16">
                    <h1 className="md:text-4xl text-3xl font-extrabold text-slate-900">Watch Our Daily Videos</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
                        {
                            data.map((e) => {
                                return <WatchVideoBox data={e} key={e._id!} />
                            })
                        }
                    </div>
                </div>
            </ContainerWrapper>
        </UserWrapper>
    )
}

export default WatchVideos;