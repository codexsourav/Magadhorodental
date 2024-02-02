import { useEffect, useState } from "react";
import AboutUs from "../Components/AboutUs";
import LatestBlogs from "../Components/LatestBlogs";
import Loader from "../Components/Loader";
import MainHeader from "../Components/MainHeader";
import OurDoctor from "../Components/OurDocrors";
import OurServices from "../Components/OurServices";
import QandA from "../Components/QandA";
import WatchVideos from "../Components/WatchVideos";
import { UserWrapper } from "../Wrapper/UserWrapper";
import { makeRequest } from "../lib/makeApi";
import { IHomeData } from "../types/DataInterface";

function Home() {

    const [data, setData] = useState<IHomeData | null>(null);


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/home", "GET");
            console.log(responaseData.data);

            setData(responaseData.data);
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        loadData();
    }, [])

    if (data == null) {
        return <Loader />;
    }
    // console.log(data);

    return (
        <UserWrapper>
            <MainHeader />
            {data.services.length == 0 ? null : <OurServices data={data.services} />}
            {data.doctors.length == 0 ? null : <OurDoctor data={data.doctors} />}
            <AboutUs />
            {data.videos.length == 0 ? null : <WatchVideos data={data.videos} />}
            {data.blogs.length == 0 ? null : <LatestBlogs data={data.blogs} />}
            {data.faqs.length == 0 ? null : <QandA data={data.faqs} />}
        </UserWrapper>
    )
}
export default Home