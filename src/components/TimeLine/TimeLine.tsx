import { TimeLineData } from "..";
import { IQualification } from "../../interfaces";
import { HeaderTitle } from "../../shared";

interface ITimeLineProps {
  educaction: IQualification[];
  workExperience: IQualification[];
}

const TimeLine = ({ educaction, workExperience }: ITimeLineProps) => {
  return (
    <HeaderTitle
      topLine='Experience & Education'
      firstHeadLine='My'
      secondHeadLine=' Qualification'
    >
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
          <h3 className='text-2xl font-bold flex py-5'>📚 Education</h3>
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
    </HeaderTitle>
  );
};

export default TimeLine;
