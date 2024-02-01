import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="bg-gray-800 border-r-2 sticky top-0 border-blue-950 text-white w-full  h-screen inset-y-0 left-0">
      <p className="text-2xl font-extrabold mb-4">Admin</p>
      <nav>
        <ul>
          <li className="border-b-2 border-t-2 w-full ">
            <Link to="/admin" className="text-white hover:bg-blue-700 w-full block bg-blue-900 p-3">
              Home
            </Link>
          </li>
          <li className="border-b-2  w-full ">
            <Link to="/admin/doctors" className="text-white hover:bg-blue-700 w-full block bg-blue-900 p-3">
              Doctors
            </Link>
          </li>
          <li className="border-b-2  w-full ">
            <Link to="/admin/services" className="text-white hover:bg-blue-700 w-full block bg-blue-900 p-3">
              Services
            </Link>
          </li>
          <li className="border-b-2  w-full ">
            <Link to="/admin/videos" className="text-white hover:bg-blue-700 w-full block bg-blue-900 p-3">
              Videos
            </Link>
          </li>
          <li className="border-b-2  w-full ">
            <Link to="/admin/blogs" className="text-white hover:bg-blue-700 w-full block bg-blue-900 p-3">
              Blogs
            </Link>
          </li>
          <li className="border-b-2  w-full ">
            <Link to="/admin/contacts" className="text-white hover:bg-blue-700 w-full block bg-blue-900 p-3">
              Contacts
            </Link>
          </li>
          <li className="border-b-2  w-full ">
            <p onClick={() => {
              localStorage.clear();
              window.location.replace("/admin/login");
            }} className="text-white hover:bg-blue-700 w-full block bg-blue-900 p-3 cursor-pointer">
              Logout
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
