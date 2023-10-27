import { IProjects } from "../../interfaces";

interface CardProps {
  item: IProjects;
}

const Card = ({ item }: CardProps) => {
  return (
    <article
      className='rounded p-3 shadow-lg hover:shadow-xl flex flex-col justify-around'
      key={item.id()}
    >
      <div className='overflow-hidden rounded'>
        <img src={item.image} alt={item.title} />
        <div className='mt-1 p-2'>
          <h2 className='text-slate-700'>{item.title}</h2>
          <p className='mt-1 text-sm text-slate-400'>{item.description}</p>
        </div>
      </div>
      <div className='mt-1 p-2'>
        <div className='mt-3 flex   justify-between'>
          {item.links.map((link) => {
            return (
              <div className='flex items-center space-x-1.5 rounded bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600'>
                <a
                  href={link.link}
                  key={link.id()}
                  target='_blank'
                  rel='noreferrer'
                ></a>
                <span className='max-sm:hidden'>{link.icon}</span>
                <button className='text-sm'>{link.title}</button>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Card;
