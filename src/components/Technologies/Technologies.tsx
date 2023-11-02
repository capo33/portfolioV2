import {
  BackEndIcons,
  CloudIcon,
  DatabaseIcons,
  FrontEndIcons,
  GameIcons,
  StylesIcons,
  ToolsIcons,
} from "../../data/AboutData";

const Technologies = () => {
  return (
    <section className='container mx-auto py-10'>
      <span className='text-main-color font-semibold text-lg'>
        Technologies
      </span>
      <span className='ml-2 inline-block h-[1px] w-8 bg-blue-400'></span>
      <h2 className='max-w-5xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
        Tech
        <span className='text-blue-500'> Stack</span>
      </h2>
      {/* Add My Tech skills in responsive way */}
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 py-5'>
        <div className='flex flex-col py-1'>
          <h3 className='text-xl font-semibold flex py-1'>Frontend</h3>
          <ul className='flex flex-wrap items-center justify-start gap-2'>
            {FrontEndIcons.map((icon) => (
              <li
                key={icon.id}
                className='flex items-center border rounded-md p-5'
              >
                <img src={icon.img} alt={icon.alt} className='w-12' />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col py-1'>
          <h3 className='text-xl font-semibold flex py-1'>Styles</h3>
          <ul className='flex flex-wrap items-center justify-start gap-2'>
            {StylesIcons.map((icon) => (
              <li
                key={icon.id}
                className='flex items-center border rounded-md p-5'
              >
                <img src={icon.img} alt={icon.alt} className='w-12' />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col py-1'>
          <h3 className='text-xl font-semibold flex py-1'>Backend</h3>
          <ul className='flex flex-wrap items-center justify-start gap-2'>
            {BackEndIcons.map((icon) => (
              <li
                key={icon.id}
                className='flex items-center border rounded-md p-5'
              >
                <img src={icon.img} alt={icon.alt} className='w-12' />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col py-1'>
          <h3 className='text-xl font-semibold flex py-1'>Database & API</h3>
          <ul className='flex flex-wrap items-center justify-start gap-2'>
            {DatabaseIcons.map((icon) => (
              <li
                key={icon.id}
                className='flex items-center border rounded-md p-5'
              >
                <img src={icon.img} alt={icon.alt} className='w-12' />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col py-1'>
          <h3 className='text-xl font-semibold flex py-1'>Tools</h3>
          <ul className='flex flex-wrap items-center justify-start gap-2'>
            {ToolsIcons.map((icon) => (
              <li
                key={icon.id}
                className='flex items-center border rounded-md p-5'
              >
                <img src={icon.img} alt={icon.alt} className='w-12' />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col py-1'>
          <h3 className='text-xl font-semibold flex py-1'>Game</h3>
          <ul className='flex flex-wrap items-center justify-start gap-2'>
            {GameIcons.map((icon) => (
              <li
                key={icon.id}
                className='flex items-center border rounded-md p-5'
              >
                <img src={icon.img} alt={icon.alt} className='w-12' />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col py-1'>
          <h3 className='text-xl font-semibold flex py-1'>Cloud</h3>
          <ul className='flex flex-wrap items-center justify-start gap-2'>
            {CloudIcon.map((icon) => (
              <li
                key={icon.id}
                className='flex items-center border rounded-md p-5'
              >
                <img src={icon.img} alt={icon.alt} className='w-12' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
