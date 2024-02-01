

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold">404</h1>
                <p className="text-xl font-semibold mb-4">Oops! Page not found</p>
                <p className="text-lg">The page you are looking for might be in another galaxy.</p>
                <a href="/" className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-white text-gray-800 rounded-full hover:bg-gray-200 transition duration-300">
                    Go Home
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
