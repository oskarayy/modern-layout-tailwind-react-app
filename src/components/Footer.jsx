import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import styles from '../style';

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img
          src={logo}
          alt='hoobank_icon'
          className='w-[266px] h-[72px] object-contain'
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[24px] text-white mb-4'>
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* // UNICODEU+000A9
// HEX CODE&#xa9;
// HTML CODE&#169;
// HTML ENTITY&copy;
// CSS CODE\00A9 */}

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite '>
        Copyright © 2021 HooBank. All Rights Reserved.
      </p>

      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((media, index) => (
          <img
            src={media.icon}
            key={media.id}
            alt={media.id}
            className={`w-[21px] h-[21px] object-contain ml-6`}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
