import { ChangeEvent, useEffect, useState } from 'react';
import { Editor } from '../../Components/Admin/Editor';
import InputBox from '../../Components/Admin/InputBox';
import { AdminWrapper } from '../../Wrapper/AdminWrapper';
import Button from '../../Components/Admin/Button';
import { toast } from 'react-toastify';
import { IDoctorData } from '../../types/DataInterface';
import { makeRequest, uploadFileRequest } from '../../lib/makeApi';
import { useParams } from 'react-router-dom';
import ForbiddenPage from '../../pages/Error/ForbiddenPage';
import { AxiosResponse } from 'axios';

function UpdateDoctor() {
  // State for image file
  const [image, setImage] = useState<string>("");
  const [errr, setErrr] = useState(false);
  const { id } = useParams();
  const [uploading, setuploading] = useState(false);
  const [loading, setLoading] = useState(false)

  // States for input fields
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [education, setEducation] = useState('');

  // State for editor content
  const [editorContent, setEditorContent] = useState('');

  const [fb, setFb] = useState("");
  const [insta, setInsta] = useState("");
  const [twitter, setTwitter] = useState("");
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
        }
      }
      const responseData: AxiosResponse = await makeRequest("/api/doctor/" + id, "PUT", data);
      setLoading(false);
      if (responseData.status == 200) {
        toast.success(responseData.data.message);
        // Reset form fields after submission
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

  const loadData = async () => {

    try {
      const responaseData = await makeRequest("/api/doctor/" + id, "GET");
      const data: IDoctorData = responaseData.data;
      setImage(data.image);
      setName(data.name);
      setMobileNo(data.mobile);
      setEmail(data.email);
      setPosition(data.position);
      setEducation(data.education);
      setEditorContent(data.content);
      setFb(data.links.fb);
      setInsta(data.links.insta);
      setTwitter(data.links.twitter);
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
      <h1 className="font-bold text-2xl">Update Doctor</h1>
      <div className="mt-5 grid grid-cols-2 gap-6">
        {/* Use appropriate onChange handlers for file input */}
        <InputBox label={`Image ${uploading ? "Uploading..." : ""}`} disabled={uploading} type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.files ? uploadImage(e.target.files[0]) : null} />
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
      <div className="mt-5 grid grid-cols-3 gap-6">
        <InputBox label="Facebook Link" value={fb} onChange={(e) => setFb(e.target.value)} />
        <InputBox label="Instagram Link" value={insta} onChange={(e) => setInsta(e.target.value)} />
        <InputBox label="Twitter Link" value={twitter} onChange={(e) => setTwitter(e.target.value)} />

      </div>
      <div className="mt-5">
        <Editor placeholder="" label="Write Doctor Description" value={editorContent} onChenge={(value) => setEditorContent(value)} />
      </div>
      <Button onClick={handleSubmit} disabled={loading}>{loading ? "Updating.." : "Update Doctor"}</Button>
    </AdminWrapper>
  );
}

export default UpdateDoctor;
