import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div
    className={`group ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-110 transition translate-x-0 translate-y-0`}>
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium  text-[18px] leading=[32px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
        <img
          src={arrowUp}
          alt='arrow up'
          className='w-[23px] h-[23px] object-contain translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition'
        />
      </div>
      <p className='font-poppins font-medium text-[18px] leading=[32px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
