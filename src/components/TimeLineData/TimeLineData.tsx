import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface TimeLineDataProps {
  time: string;
  what: string;
  where: string;
  desc: string;
}

const TimeLineData = ({ desc, time, what, where }: TimeLineDataProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='px-3 py-1'>
      <div className='relative border-l border-gray-200 hover:border-cyan-500 transition duration-100'>
        <div className='mb-10 ml-6'>
          <span
            className={`absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ${
              theme === "light" ? "ring-[dark_bg]" : "ring-[dark_bg]"
            }`}
          >
            <svg
              className='w-2.5 h-2.5 text-cyan-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </span>
          <h3 className='flex items-center mb-1 text-lg font-semibold'>
            {where}
          </h3>
          <h4 className='text-base font-normal'>{what}</h4>
          <time className='tracking-[2px] block mb-2 text-sm font-normal leading-none text-gray-400'>
            {time}
          </time>
          <p
            className={`text-base font-normal ${
              theme === "light"  ? "sub_text_dark" : "sub_text_light"
            } `}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeLineData;
