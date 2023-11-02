interface WorkExperienceProps {
  time: string;
  what: string;
  where: string;
  desc: string;
}

function WorkExperience(props: WorkExperienceProps) {
  return (
    <ol className='relative border-l border-gray-200 dark:border-gray-700 hover:border-blue-500'>
      <li className='mb-10 ml-6'>
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
        <h4 className='text-base font-normal  '>{props.what}</h4>
        <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          {props.time}
        </time>
        <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
          {props.desc}
        </p>
      </li>
    </ol>
  );
}

const TimeLine = () => {
  const workExperienceData = [
    {
      id: 1,
      date: "09/2022 - 02/2023",
      title: "Software Developer",
      company: "Nordcloud IBM Company, Helsinki",
      description:
        "Designed reusable and reliable code for use within distributed cloud environments",
    },
    {
      id: 2,
      date: "04/2022 - 08/20220",
      title: "Full Stack Developer Intern",
      company: "Integrify, Helsinki",
      description:
        "Created, designed and presented 5 projects from concept to solution.",
    },
    {
      id: 3,
      date: "04/2019 - 07/2020",
      title: "The restaurateur - an entrepreneur",
      company: "Capo33, Helsinki",
      description:
        "Implemented effective inventory control systems to reduce food spoilage and waste",
    },
  ];

  const educactionData = [
    {
      id: 1,
      date: "08/2020 - Present",
      title: "Software development Angular and .Net",
      company: "Business College Helsinki",
      description:
        "I have completed the coding part & what remains is the theoretical part",
    },
    {
      id: 2,
      date: "2012 - 2015",
      title: "Hotel, restaurant and catering industry",
      company: "Stadin Ammattiopisto, Varia, Vantaa",
      description:
        "I have learned how to care about Hygiene & Food Safety, Product Purchasing & Inventory Management",
    },
    {
      id: 3,
      date: "06/2003 - 06/2007",
      title: "Business management",
      company:
        "Higher Institute for Cooperative-administrative Studies Egypt, Cairo",
      description:
        "Financial accounting, marketing strategy, organizational leadership, and business decision-making",
    },
  ];

  return (
    <div className='py-5'>
      <h2 className='text-3xl font-bold underline py-5'>Qualification</h2>
      <div className='grid sm:grid-cols-2'>
        <div className=' '>
          <div className='timeline'>
            <h3 className='text-2xl font-bold flex justify-center py-5'>
              X- Experience
            </h3>

            {workExperienceData.map((item) => {
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
        <div className=''>
          <div className='timeline'>
            <h3 className='text-2xl font-bold flex justify-center py-5'>
              X- Education
            </h3>
            {educactionData.map((item) => {
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
    </div>
  );
};

export default TimeLine;
