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
              <div className='flex items-center space-x-1.5 rounded bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600'>
                <a
                  href={link.link}
                  key={link.id()}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center justify-between gap-2'
                >
                  <span className='max-sm:hidden'>{link.icon}</span>
                  <span className='text-sm'>{link.title}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Card;