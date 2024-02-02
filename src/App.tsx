import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/Error/NotFound";
import Doctor from "./pages/Doctor";
import Pricing from "./pages/Pricing";
import AdminLogin from "./Admin/Login";
import Admin from "./Admin/Admin";
import AdminDoctors from "./Admin/Doctore/AdminDoctors";
import AddDoctor from "./Admin/Doctore/AddDoctor";
import UpdateDoctor from "./Admin/Doctore/UpdateDoctor";
import AddService from "./Admin/Services/NewServices";
import UpdateService from "./Admin/Services/UpdateServices";
import Services from "./Admin/Services/Services";
import Videos from "./Admin/Videos/Videos";
import NewVideo from "./Admin/Videos/NewVideo";
import UpdateVideo from "./Admin/Videos/UpdateVideo";
import ShowBlogs from "./Admin/Blogs/ShowBlogs";
import NewBlogs from "./Admin/Blogs/NewBlogs";
import UpdateBlogs from "./Admin/Blogs/UpdateBlogs";
import Contact from "./Admin/Contact/Contact";
import WatchVideos from "./pages/WatchVideos";
import Blogs from "./pages/Blogs";
import ReadBlog from "./pages/blog/ReadBlog";
import ShowFaqs from "./Admin/Faqs/ShowFaqs";
import UpdateFaq from "./Admin/Faqs/UpdateFaq";
import NewFaq from "./Admin/Faqs/NewFaq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />

        <Route path="/blogs" Component={Blogs} />
        <Route path="/watch" Component={WatchVideos} />
        <Route path="/blog/:id" Component={ReadBlog} />
        <Route path="/doctor/:id" Component={Doctor} />
        <Route path="/service/:id" Component={Pricing} />

        <Route path="/admin" Component={Admin} />
        <Route path="/admin/login" Component={AdminLogin} />

        <Route path="/admin/doctors" Component={AdminDoctors} />
        <Route path="/admin/doctor/add" Component={AddDoctor} />
        <Route path="/admin/doctor/:id" Component={UpdateDoctor} />

        <Route path="/admin/services" Component={Services} />
        <Route path="/admin/service/add" Component={AddService} />
        <Route path="/admin/service/:id" Component={UpdateService} />

        <Route path="/admin/videos" Component={Videos} />
        <Route path="/admin/video/add" Component={NewVideo} />
        <Route path="/admin/video/:id" Component={UpdateVideo} />

        <Route path="/admin/blogs" Component={ShowBlogs} />
        <Route path="/admin/blog/add" Component={NewBlogs} />
        <Route path="/admin/blog/:id" Component={UpdateBlogs} />

        <Route path="/admin/faqs" Component={ShowFaqs} />
        <Route path="/admin/faq/add" Component={NewFaq} />
        <Route path="/admin/faq/:id" Component={UpdateFaq} />

        <Route path="/admin/contacts" Component={Contact} />

        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;