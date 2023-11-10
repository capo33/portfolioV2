import { TimeLineData } from "..";
import { IQualification } from "../../interfaces";

interface ITimeLineProps {
  educaction: IQualification[];
  workExperience: IQualification[];
}

const TimeLine = ({ educaction, workExperience }: ITimeLineProps) => {
  return (
    <section className='container mx-auto py-10'>
      <span className='font-semibold text-lg'>
        Experience & Education
      </span>
      <span className='ml-2 inline-block h-[1px] w-8 bg-cyan-400'></span>
      <h2 className='max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
        My
        <span className='text-cyan-500'> Qualification</span>
      </h2>
      <div className='grid lg:grid-cols-2'>
        <div>
          <h3 className='text-2xl font-bold flex py-5'>💼 Experience</h3>
          {workExperience.map((item) => {
            return (
              <TimeLineData
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
          <h3 className='text-2xl font-bold flex py-5'>📖 Education</h3>
          {educaction.map((item) => {
            return (
              <TimeLineData
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
    </section>
  );
};

export default TimeLine;
