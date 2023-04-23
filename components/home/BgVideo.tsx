'use client';

import { useRef, useState } from 'react';
import { VideoPauseFromBarIcon, VideoPlayFromBarIcon } from '../utils/SVG/PlayIcon';
import Image from 'next/image';

const BgVideo = ({ isBot }: { isBot: boolean }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const triggerPlay = () => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.pause();
        setIsPlaying(false);
      } else {
        ref.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full absolute inset-0 z-10">
        <div className="w-full h-full">
          <Image
            src="/intro-thumb.png"
            width={1920}
            height={1920}
            className="w-full h-full object-cover"
            alt="AInstein talking with human in 2030!"
          />
        </div>
      </div>
      <video
        ref={ref}
        autoPlay={!isBot}
        loop
        playsInline
        muted
        className={`relative z-20 h-full w-full object-cover transition-opacity ${isBot ? 'opacity-0' : 'opacity-100'}`}
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute right-4 bottom-4 z-50">
        <button
          onClick={triggerPlay}
          className="outline-none relative pt-[9px] pb-[10px] lg:pb-3 h-11 lg:h-12 bg-black hover:bg-white hover:text-black border border-black flex justify-center w-11 md:w-auto md:px-4 z-[300px] focus:border-white"
        >
          <span className="flex items-center justify-center">
            {isPlaying ? <VideoPauseFromBarIcon className="w-4 h-4" /> : <VideoPlayFromBarIcon className="w-4 h-4" />}
            <span className="ml-2 hidden md:inline leading-[130%]">{isPlaying ? 'Pause video' : 'Play video'}</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default BgVideo;
