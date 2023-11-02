interface TechCardProps {
  data: {
    id: number;
    img: string;
    alt: string;
  }[];
  title: string;
}
const TechCard = ({ data,title }: TechCardProps) => {
  return (
    <div className='flex flex-col py-1'>
      <h3 className='text-xl font-semibold flex py-1'>{title}</h3>
      <ul className='flex flex-wrap items-center justify-start gap-2'>
        {data.map((icon) => (
          <li key={icon.id} className='flex items-center border rounded-md p-5'>
            <img src={icon.img} alt={icon.alt} className='w-12 hover:scale-125 transition-all duration-300 ease-in-out' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechCard;
