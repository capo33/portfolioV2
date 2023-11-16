import { useState } from "react";

import { Modal } from "..";
import { IProjects } from "../../interfaces";
import { useEscapeClick, usePreventScrolling } from "../../hooks";

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

  // to close navbar when pressed escape
  useEscapeClick(() => {
    setShowModal(false);
  });

  return (
    <div className='rounded flex flex-col items-center justify-center light_bg '>
      <img
        className='w-full h-full object-cover'
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

      <button
        onClick={handleShowModal}
        className='p-3 font-semibold bg-cyan-500 hover:bg-cyan-600 outline-none w-full'
      >
        {item?.title}
      </button>
    </div>
  );
};

export default Card;
