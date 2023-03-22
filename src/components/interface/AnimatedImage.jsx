import { motion } from 'framer-motion';

const AnimatedImage = ({ children, styles, reverse }) => (
  <motion.div
    className={styles}
    initial={{ opacity: 0, translateX: reverse ? 100 : -100 }}
    whileInView={{ opacity: 1, translateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, type: 'tween', delay: 0.25 }}>
    {children}
  </motion.div>
);

export default AnimatedImage;
