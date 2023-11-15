interface ButtonScrollProps {
  theme: string;
  handleScrollToTop: () => void;
}
const ButtonScroll = ({ handleScrollToTop ,theme}: ButtonScrollProps) => {
  return (
    <button onClick={handleScrollToTop} className='fixed bottom-5 right-2 z-50'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={`${theme === "light" ? "dark_bg" : "light_bg"
          } h-10 w-10 rounded p-1`}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18'
        />
      </svg>
    </button>
  );
};

export default ButtonScroll;
