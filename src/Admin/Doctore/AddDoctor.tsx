import { ChangeEvent, useState } from 'react';
import { Editor } from '../../Components/Admin/Editor';
import InputBox from '../../Components/Admin/InputBox';
import { AdminWrapper } from '../../Wrapper/AdminWrapper';
import Button from '../../Components/Admin/Button';
import { toast } from 'react-toastify';
import { makeRequest, uploadFileRequest } from '../../lib/makeApi';
import { IDoctorData } from '../../types/DataInterface';
import { AxiosResponse } from 'axios';

function AddDoctor() {
    // State for image file
    const [image, setImage] = useState<string>("");
    const [uploading, setuploading] = useState(false);
    const [loading, setLoading] = useState(false)
    // States for input fields
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [education, setEducation] = useState('');

    const [fb, setFb] = useState("");
    const [insta, setInsta] = useState("");
    const [twitter, setTwitter] = useState("");
    const [google, setGoogle] = useState("")
    const [youtube, setYoutube] = useState("")

    // State for editor content
    const [editorContent, setEditorContent] = useState('');


    // Handle submit function
    const handleSubmit = async () => {
        // Basic validation
        if (!image) {
            toast.error("Please Select Doctor Image")
            return;
        }

        if (!name.trim()) {
            toast.error('Name is required');
            return;
        }

        if (!mobileNo.trim()) {
            toast.error('Mobile No is required');
            return;
        }

        if (!email.trim()) {
            toast.error('Email ID is required');
            return;
        }

        if (!position.trim()) {
            toast.error('Position Name is required');
            return;
        }

        if (!education.trim()) {
            toast.error('Education Info is required');
            return;
        }

        if (!fb.trim()) {
            toast.error('Enter Facbook Link or Add #');
            return;
        }
        if (!insta.trim()) {
            toast.error('Enter InstaGram Link or Add #');
            return;
        }
        if (!twitter.trim()) {
            toast.error('Enter Twitter Link or Add #');
            return;
        }
        if (!google.trim()) {
            toast.error('Enter Google Link or Add #');
            return;
        }
        if (!youtube.trim()) {
            toast.error('Enter Youtube Link or Add #');
            return;
        }
        // Your logic to handle the form submission goes here
        console.log('Form submitted:', {
            image,
            name,
            mobileNo,
            email,
            position,
            education,
            editorContent,
        });

        await saveData();
    };

    const saveData = async () => {
        try {
            setLoading(true);
            const data: IDoctorData = {
                content: editorContent,
                education: education,
                email: email,
                image: image!,
                mobile: mobileNo,
                name: name,
                position: position,
                links: {
                    fb,
                    insta,
                    twitter,
                    google,
                    youtube,
                }
            }
            const responseData: AxiosResponse = await makeRequest("/api/doctor", "POST", data);
            setLoading(false);
            if (responseData.status == 200) {
                toast.success(responseData.data.message);
                // Reset form fields after submission
                setImage("");
                setName('');
                setMobileNo('');
                setEmail('');
                setPosition('');
                setEducation('');
                setEditorContent('');
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
            setImage(responseData.filename);
            setuploading(false);
        } catch (error: any) {
            setuploading(false);
            toast.error(error.response.data.message || error.toString());
        }
    }

    return (
        <AdminWrapper>
            <h1 className="font-bold text-2xl">Add New Doctor</h1>
            <div className="mt-5 grid grid-cols-2 gap-6">
                {/* Use appropriate onChange handlers for file input */}
                <InputBox label={`Image ${uploading ? "Uploading..." : ""}`} disabled={uploading} type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.files ? uploadImage(e.target.files[0]) : null}
                />
                <InputBox label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-6">
                <InputBox label="Mobile No" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
                <InputBox label="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-6">
                <InputBox label="Position Name" value={position} onChange={(e) => setPosition(e.target.value)} />
                <InputBox label="Education Info" value={education} onChange={(e) => setEducation(e.target.value)} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-6">
                <InputBox label="Google Link" value={google} onChange={(e) => setGoogle(e.target.value)} />
                <InputBox label="Youtube Link" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-6">
                <InputBox label="Facebook Link" value={fb} onChange={(e) => setFb(e.target.value)} />
                <InputBox label="Instagram Link" value={insta} onChange={(e) => setInsta(e.target.value)} />
                <InputBox label="Twitter Link" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
            </div>
            <div className="mt-5">
                <Editor placeholder="" label="Write Doctor Description" value={editorContent} onChenge={(value) => setEditorContent(value)} />
            </div>
            <Button onClick={handleSubmit} disabled={loading}>{loading ? "Loading.." : "Add Doctor"}</Button>
        </AdminWrapper>
    );
}

export default AddDoctor;
