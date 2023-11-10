import React, { useEffect } from "react";
import { IProjects } from "../../interfaces";
import { AnchorTag } from "../../shared";

type ModalPopupProps = {
  showModal: boolean;
  handleShowModal: () => void;
  item: IProjects;
};

const Modal = ({ showModal, handleShowModal, item }: ModalPopupProps) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            className={`justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div className='relative w-full px-2 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-xl font-semibold'>Project Details</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={handleShowModal}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 dark_text text-lg font-semibold'>
                    Tech Stack:{" "}
                    <span className='font-normal'>{item.description}</span>
                  </p>
                  <div className=''>
                    <div className=' '>
                      {item.links.map((link) => {
                        return (
                          <div
                            className={`flex flex-col justify-start py-1.5 duration-100`}
                            key={link.id()}
                          >
                            <AnchorTag
                              href={link.link}
                              icon={link.icon}
                              label={link.title}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='bg-cyan-500 text-white font-bold text-sm px-6 py-3 rounded shadow hover:bg-cyan-600 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={handleShowModal}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
