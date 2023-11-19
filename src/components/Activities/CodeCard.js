import { getElapsedTime } from "../../utils/getElapsedTime";

export default function CodeCard({ presenceData }) {
  return (
    <div className="flex flex-col justify-center items-center mt-4 border-4 border-slate-100 px-2 py-3 shadow-md shadow-slate-400">
      <div className="flex flex-row   shadow-lg ">
        <div className="relative">
          <img
            className="w-full h-full my-[6px] max-h-[80px] max-w-[80px] object-cover"
            src={`https://cdn.discordapp.com/app-assets/${presenceData.application_id}/${presenceData.assets.large_image}.png`}
            alt=""
          />
          <img
            className="bottom-2 bg-neutral-800 outline-neutral-800  left-3 ml-[55%] outline outline-[3px] max-w-[25px] max-h-[25px] rounded-full  absolute text-blue-500 "
            src={`https://cdn.discordapp.com/app-assets/${presenceData.application_id}/${presenceData.assets.small_image}.png`}
            alt=""
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 opacity-50"></div>
        <div className=" z-20 px-4 font-normal text-xs space-y-2">
          <p className="font-extrabold  text-[14px] pt-2">
            {presenceData.assets.small_text}
          </p>
          <p className="font-medium">{presenceData.details}</p>
          <p>{presenceData.state}</p>
          <p>{getElapsedTime(presenceData.timestamps.start)}</p>
        </div>
      </div>
    </div>
  );
}
