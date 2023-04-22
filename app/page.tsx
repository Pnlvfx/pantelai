import BgVideo from '@/components/home/BgVideo';
import HomeBlock from '@/components/home/HomeBlock';
import { chatUrl } from '@/config/config';
import Link from 'next/link';
export const description = 'Introducing AInstein, PantelAI most advanced system';

export const metadata = {
  description,
};

const Home = () => {
  return (
    <div>
      <div className="relative mt-[-64px] h-screen w-full md:mt-[-80px] min-h-[500px] lg:min-h-[600px]">
        <BgVideo />
        <div className="absolute inset-0 z-20 pointer-events-none bg-[rgba(0,0,0,.56)]">
          <div className="pnl-container absolute bottom-[13px] md:bottom-[22px] inset-x-0">
            <div className="cols-container">
              <div className="relative z-40 w-6-cols md:w-8-cols">
                <h1 className="text-[2.625rem] md:text-[3.4375rem] leading-[110%] pointer-events-auto">{description}</h1>
                <ul className="mt-12 mr-[60px] flex flex-row flex-wrap items-center md:mr-0 pointer-events-auto">
                  <li className="mr-4 shrink-0 relative mb-[10px]">
                    <Link rel="noopener" target="_blank" href={chatUrl} className="relative inline-block">
                      <span className="flex items-center">
                        <span className="underline underline-offset-4 text-[16px] leading-[130%]">Try AInstein chat</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeBlock />
    </div>
  );
};

export default Home;
