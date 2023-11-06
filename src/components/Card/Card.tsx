import { MitionAnimate } from "..";
import { AnchorTag } from "../../shared";
import { IProjects } from "../../interfaces";

interface CardProps {
  item: IProjects;
}

const Card = ({ item }: CardProps) => {
  return (
    <MitionAnimate>
      <article
      className='rounded p-3 shadow-2xl flex flex-col item- justify-around  bg-white dark:bg-gray-800 dark:text-white'
      key={item.id()}
    >
      <div className='flex flex-col rounded'>
        <img
          src={item.image}
          alt={item.title}
          className='w-full h-48 object-cover rounded-t'
        />
        <div className='flex flex-col items-start mt-1 p-2'>
          <h2 className='text-slate-700'>{item.title}</h2>
          <p className='mt-1 text-sm text-slate-400'>{item.description}</p>
        </div>
      </div>
      <div className='mt-1 p-2'>
        <div className='mt-3 flex justify-between'>
          {item.links.map((link) => {
            return (
              <div
                className='flex items-center space-x-1.5 rounded bg-gray-500 px-4 py-1.5 text-white duration-100 hover:bg-gray-600'
                key={link.id()}
              >
                <AnchorTag
                  href={link.link}
                  icon={link.icon}
                  label={link.title}
                  aClass='flex items-center justify-between gap-2'
                  sClass='max-sm:hidden'
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
      {/* <div className='rounded overflow-hidden p-3 shadow-2xl flex flex-col justify-around  bg-white dark:bg-gray-800 dark:text-white'>
        <img
          className='w-full h-48 object-cover rounded'
          src={item?.image}
          alt={item?.title}
          />
         <div className='flex flex-col items-start mt-1 p-2'>
          <h2 className='text-slate-700'>{item.title}</h2>
          <p className='mt-1 text-sm text-slate-400'>{item.description}</p>
        </div>
        <div className='mt-1 p-2'>
          <div className='mt-3 flex justify-between'>
            {item.links.map((link) => {
              return (
                <div
                  className='flex items-center space-x-1.5 rounded bg-gray-500 px-4 py-1.5 text-white duration-100 hover:bg-gray-600'
                  key={link.id()}
                >
                  <AnchorTag
                    href={link.link}
                    icon={link.icon}
                    label={link.title}
                    aClass='flex items-center justify-between gap-2'
                    sClass='max-sm:hidden'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </MitionAnimate>
  );
};

export default Card;
