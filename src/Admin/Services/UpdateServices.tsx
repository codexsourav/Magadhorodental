import { useState, ChangeEvent, useEffect } from 'react';
import { Editor } from '../../Components/Admin/Editor';
import InputBox from '../../Components/Admin/InputBox';
import { AdminWrapper } from '../../Wrapper/AdminWrapper';
import Button from '../../Components/Admin/Button';
import { toast } from 'react-toastify';
import { makeRequest, uploadFileRequest } from '../../lib/makeApi';
import { IServicesData } from '../../types/DataInterface';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import ForbiddenPage from '../../pages/Error/ForbiddenPage';

function UpdateService() {
    const [errr, setErrr] = useState(false);
    const { id } = useParams();
    // State variables
    const [serviceImage, setServiceImage] = useState<string>("");
    const [serviceTitle, setServiceTitle] = useState<string>('');
    const [editorContent, setEditorContent] = useState<string>('');
    const [uploading, setuploading] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form submission with validation
    const handleSubmit = () => {
        // Basic validation
        if (!serviceImage) {
            toast.error('Service Image is required');
            return;
        }

        if (!serviceTitle.trim()) {
            toast.error('Service Title is required');
            return;
        }

        // Your logic to handle the form submission goes here
        console.log('Form submitted:', {
            serviceImage,
            serviceTitle,
            editorContent,
        });

        saveData();
    };
    const saveData = async () => {
        try {
            setLoading(true);
            const data: IServicesData = {
                content: editorContent,
                image: serviceImage,
                title: serviceTitle,
            }
            const responseData: AxiosResponse = await makeRequest("/api/service/" + id, "PUT", data);
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

    const uploadImage = async (file: File) => {
        // alert("OK")
        try {
            setuploading(true);
            const responseData = await uploadFileRequest(file);
            toast.success("Image Upload Successfully");
            setServiceImage(responseData.filename);
            setuploading(false);
        } catch (error: any) {
            setuploading(false);
            toast.error(error.response.data.message || error.toString());
        }
    }


    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/service/" + id, "GET");
            const data: IServicesData = responaseData.data;
            setServiceImage(data.image);
            setServiceTitle(data.title);
            setEditorContent(data.content);
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

    return (
        <AdminWrapper>
            <h1 className="font-bold text-2xl">Update Service</h1>
            <div className="mt-5 grid grid-cols-2 gap-6">
                <InputBox label={`Service Image ${uploading ? "Uploading..." : ""}`} disabled={uploading} type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.files ? uploadImage(e.target.files[0]) : null}
                />
                <InputBox label="Service Title" value={serviceTitle} onChange={(e: ChangeEvent<HTMLInputElement>) => setServiceTitle(e.target.value)} />
            </div>
            <div className="mt-5">
                <Editor placeholder="" label="Write Service Pricing Description" value={editorContent} onChenge={(content: string) => setEditorContent(content)} />
            </div>
            <Button onClick={handleSubmit} disabled={loading}>{loading ? "Loading..." : "Update Service"}</Button>
        </AdminWrapper>
    );
}

export default UpdateService;
