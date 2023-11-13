import { motion } from "framer-motion";

interface IMitionAnimate {
  children: React.ReactNode;
}
const MitionAnimate = ({ children }: IMitionAnimate) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default MitionAnimate;
