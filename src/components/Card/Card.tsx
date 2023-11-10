import { MitionAnimate } from "..";
import { IProjects } from "../../interfaces";

interface CardProps {
  item: IProjects;
}

const Card = ({ item }: CardProps) => {
  return (
    <MitionAnimate>
      <div className='rounded shadow-2xl flex flex-col items-center justify-center light_bg'>
        <h2 className='font-semibold mt-1 p-3'>{item.title}</h2>
        <img
          className='w-full h-48 object-cover rounded-t shadow-2xl'
          src={item?.image}
          alt='Placeholder'
        />

        <button className='btn w-full'>View Project</button>
      </div>
    </MitionAnimate>
  );
};

export default Card;
