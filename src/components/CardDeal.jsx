import { card } from '../assets';
import styles, { layout } from '../style';

import Button from './interface/Button';
import AnimatedImage from './interface/AnimatedImage';

const CardDeal = () => (
  <section id='deal' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button text='Get Started' styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <AnimatedImage reverse>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </AnimatedImage>
    </div>
  </section>
);

export default CardDeal;
