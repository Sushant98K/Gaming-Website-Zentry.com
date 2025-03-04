import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-start p-5 text-blue-50">
        <h1 className="bento-title font-zentry special-font">{title}</h1>
        {description && <p className="mt-3 max-w-64 text-s">{description}</p>}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-alt-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Explore the Zentry Universe
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in an IP-rich product universe where AI-driven
            gamification and hyper-personalization lead the human-agentic
            economy.
          </p>
        </div>
        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="border-hsla row-span-1 rounded-md md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
            />
          </div>
          <div className="bento-tilt_2 border-hsla row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="The player portal uniting humans & AI to play, compete, earn and showcase—gamifying social & Web3 experiences."
            />
          </div>
          <div className="bento-tilt_2 border-hsla row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="The agent of agents elevating agentic AI experience to be more fun and productive."
            />
          </div>
          <div className="bento-tilt_2 border-hsla">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title font-zentry special-font max-w-64 text-black">
                m<b>o</b>re co<b>n</b>ing s<b>o</b>on.
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end"/>
            </div>
          </div>
          <div className="bento-tilt_2 border-hsla">
            <BentoCard
              src="videos/feature-5.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
