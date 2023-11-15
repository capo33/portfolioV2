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
            className={`justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div className='relative w-full px-2 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-xl font-semibold'>{item.title}</h3>
                </div>

                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 dark_text text-lg font-semibold'>
                    <span className='block'>Tech Stack</span>
                    {item.description.map((desc) => (
                      <span key={desc} className='bg-cyan-100 hover:bg-cyan-200 dark_text text-xs font-semibold me-2 px-2.5 py-0.5 rounded border border-cyan-400 inline-flex items-center justify-center'>
                        {desc}
                      </span>
                    ))}
                  </p>
                  <div className=''>
                    <div className=' '>
                      {item.links.map((link) => {
                        return (
                          <div className='pt-2 flex flex-col'
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
                  <button type='button' onClick={handleShowModal}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z'
                      />
                    </svg>
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
