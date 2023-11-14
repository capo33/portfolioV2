import { motion } from "framer-motion";

interface IMitionAnimate {
  children: React.ReactNode;
}
const MitionAnimate = ({ children }: IMitionAnimate) => {
  return (
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.5 }}

      // transition={{ duration: 0.75, ease: "easeOut" }}
      // className='text-gray-900 relative top-0 left-0 w-full'
    >
      {children}
    </motion.div>
  );
};

export default MitionAnimate;
