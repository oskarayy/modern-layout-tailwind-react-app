import styles from '../style';
import Button from './interface/Button';

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow sm:mt-20 sm:mb-10 mt-12 mb-6`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div
      className={`${styles.flexCenter} basis-2/7 sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button text='Get Started' />
    </div>
  </section>
);

export default CTA;
