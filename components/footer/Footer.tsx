import Link from 'next/link';
import ScrollToTop from './ScrollToTop';
import Image from 'next/image';
import { LOGO } from '@/config/config';

const Footer = () => {
  return (
    <div className="pt-spacing-7 mt-spacing-7 w-full bg-black text-white">
      <div className="pnl-container">
        <div className="cols-container">
          <div className="w-6-cols md:w-8-cols md:mb-12 lg:w-4-cols lg:mb-0">
            <Link href={'/'}>
              <Image src={LOGO} width={32} height={32} alt="LOGO" />
            </Link>
          </div>
        </div>
        <div className="mt-40 border-t border-white pt-8">
          <div className="cols-container">
            <div className="w-3-cols md:w-2-cols lg:w-4-cols flex flex-col items-start md:min-h-[92px] lg:min-h-[100px]">
              <span className="text-[16px] leading-[130%] font-bold">PantelAI © 2019-2023</span>
              {/* <Link href={'/policies/terms-of-policies'}>Terms & policies</Link> */}
              <Link className="inline-block relative mt-[3px] md:mt-[1px] underline underline-offset-4" href={'/policies/privacy-policy'}>
                Privacy policy
              </Link>
            </div>
            <div id="social"></div>
          </div>
          <div className="cols-container mt-6 md:mt-0 md:-translate-y-full">
            <div className="w-3-cols md:w-6-cols lg:w-8-cols">
              <ScrollToTop />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-spacing-7 bg-white pb-spacing-7">
        <div className="mt-[23px]">
          {Array.from({ length: 24 }, (_, i) => i)
            .reverse()
            .map((reverse, i) => (
              <div key={i} className="bg-black" style={{ marginTop: i, height: reverse }} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
