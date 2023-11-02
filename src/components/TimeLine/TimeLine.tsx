import { IQualification } from "../../interfaces";

interface WorkExperienceProps {
  time: string;
  what: string;
  where: string;
  desc: string;
}

function WorkExperience(props: WorkExperienceProps) {
  return (
    <div className='px-3 py-1'>
      <div className='relative border-l border-gray-200 dark:border-gray-700 hover:border-blue-500'>
        <div className='mb-10 ml-6'>
          <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
            <svg
              className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </span>
          <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
            {props.where}
          </h3>
          <h4 className='text-base font-normal'>{props.what}</h4>
          <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {props.time}
          </time>
          <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ITimeLineProps {
  educaction: IQualification[];
  workExperience: IQualification[];
}

const TimeLine = ({ educaction, workExperience }: ITimeLineProps) => {
  return (
    <div className='container mx-auto py-5'>
      <h2 className='text-3xl font-bold underline py-5 '>Qualification</h2>
      <div className='grid lg:grid-cols-2'>
        <div>
          <h3 className='text-2xl font-bold flex  py-5'>💼 Experience</h3>
          {workExperience.map((item) => {
            return (
              <WorkExperience
                key={item.id}
                time={item.date}
                what={item.title}
                where={item.company}
                desc={item.description}
              />
            );
          })}
        </div>
        <div>
          <h3 className='text-2xl font-bold flex  py-5'>📖 Education</h3>
          {educaction.map((item) => {
            return (
              <WorkExperience
                key={item.id}
                time={item.date}
                what={item.title}
                where={item.company}
                desc={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
