import React, { ChangeEvent, useState } from "react";
import Button from "../../Components/Admin/Button";
import { Editor } from "../../Components/Admin/Editor";
import InputBox from "../../Components/Admin/InputBox";
import { AdminWrapper } from "../../Wrapper/AdminWrapper";
import { toast } from "react-toastify";
import { IBlogData } from "../../types/DataInterface";
import { makeRequest, uploadFileRequest } from "../../lib/makeApi";
import { AxiosResponse } from "axios";

interface BlogForm {
    title: string;
    image: string;
    keywords: string;
    description: string;
    content: string;
}

function NewBlogs() {
    const [uploading, setuploading] = useState(false);
    const [loading, setLoading] = useState(false)
    const [blogForm, setBlogForm] = useState<BlogForm>({
        title: "",
        image: "",
        keywords: "",
        description: "",
        content: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        fieldName: string
    ) => {
        setBlogForm({
            ...blogForm,
            [fieldName]: e.target.value,
        });
    };



    const handleSubmit = () => {
        // Validate the form fields before submitting
        if (!blogForm.title || !blogForm.image || !blogForm.keywords || !blogForm.description || !blogForm.content) {
            // Handle validation error, you can show an alert or provide feedback to the user
            toast.error("Please fill out all fields");
            return;
        }

        // Your logic to handle the form submission goes here
        console.log("Form submitted:", blogForm);
        saveData();
    };



    const saveData = async () => {
        try {
            setLoading(true);
            const data: IBlogData = {
                title: blogForm.title,
                content: blogForm.content,
                description: blogForm.description,
                image: blogForm.image,
                keywords: blogForm.keywords,
            }
            const responseData: AxiosResponse = await makeRequest("/api/blog", "POST", data);
            setLoading(false);
            if (responseData.status == 200) {
                toast.success(responseData.data.message);
                setBlogForm({
                    title: "",
                    image: "",
                    keywords: "",
                    description: "",
                    content: "",
                })
            } else {
                toast.error(responseData.data.message);
            }
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message || error.toString());
        }
    }

    const uploadImage = async (file: File) => {

        try {
            setuploading(true);
            const responseData = await uploadFileRequest(file);
            toast.success("Image Upload Successfully");
            setBlogForm({
                ...blogForm,
                image: responseData.filename,
            });
            setuploading(false);
        } catch (error: any) {
            setuploading(false);
            toast.error(error.response.data.message || error.toString());
        }


        // alert("OK")

    }


    return (
        <AdminWrapper>
            <h1 className="font-bold text-2xl">Add New Blog Post</h1>
            <div className="mt-5 grid grid-cols-2 gap-6">
                <InputBox
                    label="Blog Title"
                    value={blogForm.title}
                    onChange={(e) => handleInputChange(e, "title")}
                />
                <InputBox label={`Blog Image ${uploading ? "Uploading..." : ""}`} disabled={uploading} type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.files ? uploadImage(e.target.files[0]) : null}
                />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-6">
                <InputBox
                    label="Blog Keywords (max 120)"
                    maxLength={120}
                    value={blogForm.keywords}
                    onChange={(e) => handleInputChange(e, "keywords")}
                />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-6">
                <InputBox
                    label="Blog Description (max 150)"
                    maxLength={150}
                    value={blogForm.description}
                    onChange={(e) => handleInputChange(e, "description")}
                />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-6">
                <Editor
                    value={blogForm.content}
                    onChenge={(value) => setBlogForm({ ...blogForm, content: value })}
                    label="Write Blog Content"
                />
            </div>
            <br />
            <Button onClick={handleSubmit} disabled={loading}>{loading ? "Loading.." : "Add New Blog Post"}</Button>
        </AdminWrapper>
    );
}

export default NewBlogs;
