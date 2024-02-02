import { useState } from 'react';
import Button from '../../Components/Admin/Button';
import InputBox, { TextArea } from '../../Components/Admin/InputBox';
import { AdminWrapper } from '../../Wrapper/AdminWrapper';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { makeRequest } from '../../lib/makeApi';
import { IFAQData } from '../../types/DataInterface';

function NewFaq() {
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
            const responseData: AxiosResponse = await makeRequest("/api/faq", "POST", data);
            setLoading(false);
            if (responseData.status == 200) {
                toast.success(responseData.data.message);
                setQuestion('');
                setAnswer('');
            } else {
                toast.error(responseData.data.message);
            }
        } catch (error: any) {
            setLoading(false);
            toast.error(error.response.data.message || error.toString());
        }
    };

    return (
        <AdminWrapper>
            <h1 className="font-bold text-2xl mb-10">Add New FAQ</h1>
            <InputBox label="Question?" value={question} onChange={handleQuestionChange} />
            <TextArea label="Answer" value={answer} onChange={handleAnswerChange} />
            <Button onClick={handleAddNewFaq} disabled={loading} >{loading ? "Loading" : "Add New FAQ"}</Button>
        </AdminWrapper>
    );
}

export default NewFaq;
