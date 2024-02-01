import { Link } from "react-router-dom"
import { AdminWrapper } from "../../Wrapper/AdminWrapper"
import { useEffect, useState } from "react"
import { IDoctorData } from "../../types/DataInterface"
import { apiUrl, makeRequest } from "../../lib/makeApi";
import ForbiddenPage from "../../pages/Error/ForbiddenPage";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

function AdminDoctors() {
  const [data, setData] = useState<IDoctorData[] | null>(null);
  const [errr, setErrr] = useState(false);

  const loadData = async () => {
    try {
      const responaseData = await makeRequest("/api/doctors", "GET");
      setData(responaseData.data);
    } catch (error) {
      setData([])
      setErrr(true);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteData = async (id: string) => {
    const ask = confirm("Are You Sure To Delete?");
    if (ask) {
      try {
        const responseData: AxiosResponse = await makeRequest("/api/doctor/" + id, "DELETE");
        toast.success(responseData.data.message);
        loadData();
      } catch (error: any) {
        toast.success(error.response.data.message);
      }
    }
  }


  if (errr) {
    return <ForbiddenPage />
  }

  return (
    <AdminWrapper>

      <Link to="/admin/doctor/add" className="text-right">Add Doctor</Link>
      {data == null ? <div className="flex justify-center items-center h-96 text-xl">
        Loading Doctors....
      </div> : <div className="flex justify-center items-center mt-8">
        <table className="min-w-full bg-white text-gray-800  text-center">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-gray-200">Image</th>
              <th className="py-3 px-6 bg-gray-200">Name</th>
              <th className="py-3 px-6 bg-gray-200">Position</th>
              <th className="py-3 px-6 bg-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr className="bg-white border-b" key={"doctor-" + i}>
                  <td className="py-3 px-6 flex justify-center items-center">
                    <img src={apiUrl + "/uploads/" + e.image} width={70} height={70} className="object-cover rounded-full shadow" />
                  </td>
                  <td className="py-3 px-6">{e.name}</td>
                  <td className="py-3 px-6">{e.position}</td>
                  <td className="py-3 px-6 ">
                    <div className="flex justify-center items-center gap-7">
                      <Link to={"/admin/doctor/" + e._id}>Edit</Link>
                      <p onClick={() => deleteData(e._id!)} className="text-red-600 cursor-pointer">Delete</p>
                    </div>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>}
    </AdminWrapper>
  )
}
export default AdminDoctors