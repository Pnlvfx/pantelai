import BgVideo from "@/components/home/BgVideo";
import HomeBlock from "@/components/home/HomeBlock";
import { clientUrl } from "@/config/config";
import { Metadata } from "next";
import { headers } from "next/headers";
import { userAgentFromString } from "next/server";
const title = "Try our text-to-video AI"; // "Try AInstein chat";
export const description =
  "Introducing our text-to-video, PantelAI most advanced system";
//"Introducing AInstein, PantelAI most advanced system";

const blockTitle = "Text-To-Video"; //"ChatGPT";
const blockDescription =
  "We use an AI which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.";
const blockUrl = "";

const Home = () => {
  const userAgent = headers().get("user-agent");
  let isBot = false;
  if (userAgent) {
    const ua = userAgentFromString(userAgent);
    isBot = ua.isBot;
  }

  return (
    <div>
      <div className="relative mt-[-64px] h-screen w-full md:mt-[-80px] min-h-[500px] lg:min-h-[600px]">
        <BgVideo isBot={isBot} />
        <div className="absolute inset-0 z-20 pointer-events-none bg-[rgba(0,0,0,.56)]">
          <div className="pnl-container absolute bottom-[13px] md:bottom-[22px] inset-x-0">
            <div className="cols-container">
              <div className="relative z-40 w-6-cols md:w-8-cols">
                {/* <Product
                  description={description}
                  url={''}
                  title={title}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HomeBlock
        description={blockDescription}
        title={blockTitle}
        url={blockUrl}
      /> */}
    </div>
  );
};

export default Home;

export const metadata: Metadata = {
  description,
  openGraph: {
    title: "PantelAI",
    description,
    images: {
      url: `${clientUrl}/intro-thumb.png`,
      alt: "AInstein talking with human in 2030!",
    },
  },
  twitter: {
    card: "summary_large_image",
    images: {
      url: `${clientUrl}/intro-thumb.png`,
      alt: "AInstein talking with human in 2030!",
    },
  },
};
