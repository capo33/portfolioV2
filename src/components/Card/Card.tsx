import { AnchorTag } from "../../shared";
import { IProjects } from "../../interfaces";

interface CardProps {
  item: IProjects;
}

const Card = ({ item }: CardProps) => {
  return (
    <article
      className='rounded p-3 shadow-2xl flex flex-col justify-around'
      key={item.id()}
    >
      <div className='overflow-hidden rounded'>
        <img
          src={item.image}
          alt={item.title}
          className='w-full h-auto object-cover shadow-lg'
        />
        <div className='mt-1 p-2'>
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
  );
};

export default Card;
