import { useState } from 'react';
import { makeRequest } from '../lib/makeApi';
import { toast } from 'react-toastify';
import { keys } from '../lib/keys';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const requestData = await makeRequest("/api/login", "POST", {
                email: username,
                pass: password,
            });
            if (requestData.status == 200) {
                toast.success(requestData.data.message);
                localStorage.setItem(keys.authKey, requestData.data.token);
                navigate("/admin", { replace: true })
            } else {
                toast.error(requestData.data.message);
            }
        } catch (error: any) {
            toast.error(error.response.data.message || error.toString());
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Login Admin</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
