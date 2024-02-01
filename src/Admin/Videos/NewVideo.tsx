import React, { useState } from "react";
import Button from "../../Components/Admin/Button";
import InputBox from "../../Components/Admin/InputBox";
import { AdminWrapper } from "../../Wrapper/AdminWrapper";
import { toast } from "react-toastify";
import { IVideoData } from "../../types/DataInterface";
import { AxiosResponse } from "axios";
import { makeRequest } from "../../lib/makeApi";

interface VideoForm {
    videoId: string;
    title: string;
}

function NewVideo() {
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
            const responseData: AxiosResponse = await makeRequest("/api/video", "POST", data);
            setLoading(false);
            if (responseData.status == 200) {
                toast.success(responseData.data.message);
                setVideoForm({
                    videoId: "",
                    title: "",
                })
            } else {
                toast.error(responseData.data.message);
            }
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message || error.toString());
        }
    }


    return (
        <AdminWrapper>
            <h1 className="font-bold text-2xl">Add New Video</h1>

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
            <Button onClick={handleSubmit} disabled={loading}>{loading ? "Loading.." : "Add New Video"}</Button>
        </AdminWrapper>
    );
}

export default NewVideo;
