import { WorkExperience } from "..";
import { IQualification } from "../../interfaces";

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
          <h3 className='text-2xl font-bold flex py-5'>💼 Experience</h3>
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
          <h3 className='text-2xl font-bold flex py-5'>📖 Education</h3>
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
