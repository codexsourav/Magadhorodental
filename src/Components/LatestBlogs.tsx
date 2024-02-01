import { HiArrowLongRight } from "react-icons/hi2";
import { ContainerWrapper } from "../Wrapper/UserWrapper";
import { IBlogData } from "../types/DataInterface";
import { apiUrl } from "../lib/makeApi";
import { formatDate } from "../lib/date";

function LatestBlogs({ data }: { data: IBlogData[] }) {
  return (
    <ContainerWrapper className="md:pt-28 mt-10"  >
      <div className="flex justify-center  items-center gap-5 m-auto flex-col  h-full" id="blogs">
        <h1 className="md:text-5xl text-3xl font-extrabold text-slate-900">Latest Blogs</h1>
        <p className="text-center m-3">A Grand Tour Step Into the Larger World of Our Dental Achievements</p>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-7">
          {data.map((e, i) => {
            return <BlogBox data={e} key={"blog-" + i} />;
          })}

        </div>
        <a href="/blogs" className="border-2 border-blue-600 text-blue-600 px-7 py-2  uppercase hover:text-white hover:bg-blue-600 mt-5 mb-5 font-bold">Read All Blogs</a>
      </div>

    </ContainerWrapper >

  )
}
export default LatestBlogs;


export function BlogBox({ data }: { data: IBlogData }) {
  return (
    <div className="border h-auto w-full ">
      <div className="relative group">
        <img src={apiUrl + "/uploads/" + data.image} className="h-56 w-full object-cover " />
        <a href={"/blog/" + data.slug} className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50">
          <div className="flex items-center justify-center h-full cursor-pointer">
            <HiArrowLongRight className="text-white text-5xl" />
          </div>
        </a>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h1 className="font-bold capitalize overflow-hidden line-clamp-1 text-blue-950 text-sm flex justify-start items-start text-left">{data.title}</h1>
        <p className="text-[12px] overflow-hidden line-clamp-2">{data.description}</p>
        <p className="text-[12px] text-blue-950">Date: {formatDate(data.date!)}</p>

      </div>

    </div>
  )
}
