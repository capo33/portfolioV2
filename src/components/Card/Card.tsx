import { useState } from "react";

import { MitionAnimate, Modal } from "..";
import { IProjects } from "../../interfaces";
import { usePreventScrolling } from "../../hooks";

interface CardProps {
  item: IProjects;
}

const Card = ({ item }: CardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  // to prevent scrolling when navbar is open
  usePreventScrolling(showModal);

  return (
    <MitionAnimate>
      <div className='rounded shadow-2xl flex flex-col items-center justify-center light_bg'>
        <h2 className='font-semibold mt-1 p-3'>{item.title}</h2>
        <img
          className='w-full h-48 object-cover rounded-t shadow-2xl'
          src={item?.image}
          alt='Placeholder'
        />

        {/* Project Modal */}
        {showModal ? (
          <Modal
            showModal={showModal}
            handleShowModal={handleShowModal}
            item={item}
          />
        ) : null}

        <button onClick={handleShowModal} className='btn w-full'>
          View Project
        </button>
      </div>
    </MitionAnimate>
  );
};

export default Card;
