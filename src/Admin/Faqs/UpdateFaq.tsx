import { useEffect, useState } from 'react';
import Button from '../../Components/Admin/Button';
import InputBox, { TextArea } from '../../Components/Admin/InputBox';
import { AdminWrapper } from '../../Wrapper/AdminWrapper';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { makeRequest } from '../../lib/makeApi';
import { IFAQData } from '../../types/DataInterface';
import ForbiddenPage from '../../pages/Error/ForbiddenPage';
import { useParams } from 'react-router-dom';

function UpdateFaq() {
    const [errr, setErrr] = useState(false);
    const { id } = useParams();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false)

    const handleQuestionChange = (e: any) => {
        const value = e.target.value;
        setQuestion(value);
    };

    const handleAnswerChange = (e: any) => {
        const value = e.target.value;
        setAnswer(value);
    };

    const handleAddNewFaq = async () => {
        console.log('Adding new FAQ:', { question, answer });
        // Validate before adding the FAQ
        if (!question || !answer) {
            toast.error("Enter Question Or Answer")
            return;
        }
        await saveFaq();
        // Your logic to add the FAQ goes here
    };

    const saveFaq = async () => {
        try {
            setLoading(true);
            const data: IFAQData = {
                ans: answer,
                qus: question,
            }
            const responseData: AxiosResponse = await makeRequest("/api/faq/" + id, "PUT", data);
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
    };



    const loadData = async () => {

        try {
            const responaseData = await makeRequest("/api/faq/" + id, "GET");
            const data: IFAQData = responaseData.data;
            setQuestion(data.qus);
            setAnswer(data.ans);
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
            <h1 className="font-bold text-2xl mb-10">Update FAQ</h1>
            <InputBox label="Question?" value={question} onChange={handleQuestionChange} />
            <TextArea label="Answer" value={answer} onChange={handleAnswerChange} />
            <Button onClick={handleAddNewFaq} disabled={loading} >{loading ? "Loading" : "Update FAQ"}</Button>
        </AdminWrapper>
    );
}

export default UpdateFaq;
