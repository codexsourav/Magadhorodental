import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { makeRequest } from '../lib/makeApi';

const ContactForm: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const validateForm = () => {
        // Simple validation example
        if (!name.trim()) {
            toast.error('Please enter your name.');
            return false;
        }

        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Please enter a valid email address.');
            return false;
        }

        if (!mobile.trim()) {
            toast.error('Please enter your mobile number.');
            return false;
        }

        if (!message.trim()) {
            toast.error('Please enter your message.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setLoading(true);
                await makeRequest("/api/contact", "POST", {
                    name, email, mobile, message,
                });
                setLoading(false);
                toast.success('Message Send Successfully.');
                setName('');
                setEmail('');
                setMobile('');
                setMessage('');
            } catch (error: any) {
                setLoading(false);
                toast.error(error.response.data.message || error.toString());
            }
        }
    };

    return (
        <div className="relative bg-[url('/images/service/4.jpg')]  z-10 mt-20 py-20 bg-no-repeat bg-cover bg-center" id='contact'>
            <div className="absolute inset-0  bg-black/30 w-full" style={{ zIndex: "-1" }}></div>

            <div className="m-auto max-w-[1400px] px-5 md:px-10 ">
                <div className="flex justify-center  items-center gap-5 m-auto flex-col  h-full">
                    <h1 className="md:text-5xl text-3xl font-extrabold text-white">Contact US</h1>
                    <p className="text-center m-3 text-gray-300">Feel free to reach out to us with any questions or inquiries. We're here to assist you!</p>
                    <form onSubmit={handleSubmit} className="w-full max-w-xl border-2 shadow-2xl mx-auto bg-white/20 backdrop-blur-3xl p-8  ">

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border bg-white/10 border-none backdrop-blur-3xl p-2 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border bg-white/10 border-none backdrop-blur-3xl p-2 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="mobile" className="block text-gray-600 text-sm font-medium mb-2">Your Mobile No</label>
                            <input
                                type="number"
                                id="mobile"
                                name="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="w-full border bg-white/10 border-none backdrop-blur-3xl p-2 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="w-full border bg-white/10 border-none backdrop-blur-3xl p-2 focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" disabled={loading} className="bg-blue-950/50 backdrop-blur-3xl text-white px-4 py-3  hover:bg-blue-950 focus:outline-none  focus:border-blue-300 w-full font-bold">
                            {loading ? "Loading..." : "Send Your Email"}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactForm;
