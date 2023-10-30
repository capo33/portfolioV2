import { motion, AnimatePresence } from "framer-motion";

interface IMitionAnimate {
  children: React.ReactNode;
}
const MitionAnimate = ({ children }: IMitionAnimate) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.article
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.article>
    </AnimatePresence>
  );
};

export default MitionAnimate;
