import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
  <section id='clients' className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(({ logo, id }, index) => (
        <div
          key={id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img
            src={logo}
            alt={id}
            className={`sm:w-[192px] w-[100px] ss:mt-0 ${
              index > 1 ? 'mt-6' : 'mt-0'
            } object-contain hover:brightness-200 hover:scale-110 transition cursor-pointer`}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
