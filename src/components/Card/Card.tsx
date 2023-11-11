import { useState } from "react";

import { MitionAnimate, Modal } from "..";
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
    <MitionAnimate>
      <div className='rounded flex flex-col items-center justify-center light_bg'>
        <img
          className='w-full h-48 object-cover'
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
          className='p-3 font-semibold bg-[#dcdcdc] hover:bg-[#bdbdbd] outline-none w-full'
        >
          {item?.title}
        </button>
      </div>
    </MitionAnimate>
  );
};

export default Card;
