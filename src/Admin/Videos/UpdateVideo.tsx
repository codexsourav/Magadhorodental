import React, { useEffect, useState } from "react";
import Button from "../../Components/Admin/Button";
import InputBox from "../../Components/Admin/InputBox";
import { AdminWrapper } from "../../Wrapper/AdminWrapper";
import { toast } from "react-toastify";
import { IVideoData } from "../../types/DataInterface";
import { AxiosResponse } from "axios";
import { makeRequest } from "../../lib/makeApi";
import ForbiddenPage from "../../pages/Error/ForbiddenPage";
import { useParams } from "react-router-dom";

interface VideoForm {
    videoId: string;
    title: string;
}

function UpdateVideo() {
    const [errr, setErrr] = useState(false);
    const { id } = useParams();
    const [videoForm, setVideoForm] = useState<VideoForm>({
        videoId: "",
        title: "",
    });
    const [loading, setLoading] = useState(false);
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        fieldName: string
    ) => {
        setVideoForm({
            ...videoForm,
            [fieldName]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (!videoForm.videoId || !videoForm.title) {
            toast.error("Please fill out all fields");
            return;
        }
        saveVideo();
    };

    const saveVideo = async () => {
        try {

            const data: IVideoData = {
                videoId: videoForm.videoId,
                title: videoForm.title,
            }
            const responseData: AxiosResponse = await makeRequest("/api/video/" + id, "PUT", data);
            setLoading(false);
            if (responseData.status == 200) {
                toast.success(responseData.data.message);

            } else {
                toast.error(responseData.data.message);
            }
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message || error.toString());
        }
    }

    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/video/" + id, "GET");
            const data: IVideoData = responaseData.data;
            setVideoForm({
                videoId: data.videoId,
                title: data.title,
            })
        } catch (error) {
            console.log(error);

            setErrr(true);
        }
    };


    useEffect(() => {
        loadData();
    }, [])

    if (errr) {
        return <ForbiddenPage />
    }


    return (
        <AdminWrapper>
            <h1 className="font-bold text-2xl">Update Video</h1>

            <div className="mt-5 grid grid-cols-2 gap-6 w-full">
                <InputBox
                    label="Youtube Video ID"
                    type="text"
                    value={videoForm.videoId}
                    onChange={(e) => handleInputChange(e, "videoId")}
                />
                <InputBox
                    label="Title"
                    value={videoForm.title}
                    onChange={(e) => handleInputChange(e, "title")}
                />
            </div>
            <Button onClick={handleSubmit} disabled={loading}>{loading ? "Loading.." : "Update Video"}</Button>
        </AdminWrapper>
    );
}

export default UpdateVideo;
