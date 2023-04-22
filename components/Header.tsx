'use client';
import { LOGO } from '@/config/config';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    };

    document.addEventListener('scroll', onScroll);
    if (typeof window !== undefined) {
      //initial
      onScroll();
    }
  }, []);

  return (
    <div>
      <div className="h-16 md:h-20">
        <header
          className={`fixed top-0 left-0 right-0 z-[60] py-4 md:py-[22px] h-16 md:h-20 transition-all duration-300 ${
            transparent ? 'bg-transparent' : 'bg-black'
          }`}
        >
          <div className="pnl-container">
            <div className="cols-container items-center">
              <div className="relative flex align-baseline w-3-cols lg:w-2-cols">
                <Link className="w-[126px] outline-none inline-block relative z-10" href={'/'}>
                  <Image priority src={LOGO} width={32} height={32} alt="LOGO" className="rounded-full" />
                </Link>
              </div>
              <div className="hidden lg:w-6-cols lg:block"></div>
              <div className="flex flex-row flex-wrap justify-end w-3-cols md:w-5-cols lg:w-4-cols">
                <button>
                  <span>
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
