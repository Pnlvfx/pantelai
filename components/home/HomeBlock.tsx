import { chatUrl } from '@/config/config';
import Image from 'next/image';

const HomeBlock = () => {
  return (
    <div className="pb-[5.25rem]">
      <div className="mt-spacing-7">
        <div className="pnl-container border-t border-white pt-2 md:pt-3">
          <div className="cols-container">
            <div className="w-6-cols md:w-4-cols order-2 md:order-1 mt-10 md:mt-[10px]">
              <div className="ratio ratio1x1">
                <Image
                  sizes="100vw"
                  width={2048}
                  height={2048}
                  src={'/chat-intro.jpg'}
                  alt="ChatGPT graphic"
                  className="w-full h-full object-cover absolute inset-0 rotate-180"
                />
              </div>
            </div>
            <div className="w-6-cols md:w-4-cols order-1 md:order-2">
              <div className="md:pr-9 lg:pr-0 lg:w-4-cols">
                <h3 className="text-[1.75rem] leading-[110%]">ChatGPT</h3>
                <div className="mt-4 block">
                  <div>
                    <span className="w-full first:mt-0 text-[16px] leading-[130%]">
                      We use an OpenAI model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT
                      to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
                    </span>
                    <div className="mt-4">
                      <ul>
                        <li className="mt-1 first:mt-0">
                          <a rel="noopener" target="_blank" href={chatUrl} className="relative inline-block">
                            <span className="flex items-center">
                              <span className="underline underline-offset-4 text-[16px] leading-[130%]">Try AInstein chat</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlock;
