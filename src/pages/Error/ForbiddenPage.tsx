

const ForbiddenPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-red-500">403</h1>
                <p className="text-xl font-semibold mb-4">Access Forbidden</p>
                <p className="text-lg text-gray-600">
                    You don't have permission to access this resource.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
};

export default ForbiddenPage;
