import { motion } from 'framer-motion';

const AnimatedImage = ({ children, styles, delay }) => {
  const { width } = document.body.getBoundingClientRect();

  return (
    <motion.div
      className={styles}
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.75,
        type: 'tween',
        stiffness: 100,
        delay: width >= 768 ? 0.3 + delay : 0.3
      }}>
      {children}
    </motion.div>
  );
};

export default AnimatedImage;
