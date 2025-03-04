import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to(".mask-clip-path", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });
    })

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[13px]">
          Welcome to Zentry
        </h2>

        <AnimatedTitle title="Disc<b>o</b>ver The World's <br /> largest shared <b>a</b>dventure," containerClass="mt-5 !text-black text-center" />

        <div className="about-subtext font-circular-web opacity-50">
          <p>The Metagames begins-your life, now an epic MMORPG</p>
          <p>
            Zentry is the unified play layer that bridges players, agentic AI,
            and <br /> blockchains, creating a new economic paradigm.
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
