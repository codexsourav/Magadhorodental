import { formatDate } from "../lib/date";
import { IVideoData } from "../types/DataInterface";

function WatchVideos({ data }: { data: IVideoData[] }) {
    return (
        <div className="m-auto max-w-[1400px] px-5 md:px-10 md:pt-28 mt-20" id="watch">
            <div className="flex justify-center  items-center gap-5 m-auto flex-col  h-full">
                <h1 className="md:text-5xl text-3xl font-extrabold text-slate-900">Watch Videos</h1>
                <p className="text-center m-3">A Grand Tour Step Into the Larger World of Our Dental Achievements</p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-12 w-full">
                    {data.map((e, i) => {
                        return <WatchVideoBox data={e} key={"video-" + i} />
                    })}
                </div>
                <a href="/watch" className="border-2 border-blue-600 text-blue-600 px-7 py-2  uppercase hover:text-white hover:bg-blue-600 mt-5 mb-5 font-bold">Watch All Videos</a>
            </div>

        </div>

    )
}
export default WatchVideos;


export function WatchVideoBox({ data }: { data: IVideoData }) {
    return (
        <div className="border h-auto relative">
            <div className="relative group">
                <iframe src={"https://www.youtube.com/embed/" + data.videoId} className="h-56 md:h-80 w-full object-cover " title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
            <div className="p-5">
                <h1 className=" md:text-xl text-sm  font-bold text-blue-950 overflow-hidden line-clamp-2">{data.title}</h1>
                <div className="w-full flex justify-between items-center border-t mt-5">
                    <p className="mt-2 text-blue-950">Date: {formatDate(data.date!)}</p>
                    <a href={"https://www.youtube.com/" + data.videoId} target="_black"><p className="mt-5 text-sm text-slate-800">Watch on Youtube</p></a>
                </div>
            </div>
        </div>
    )
}
