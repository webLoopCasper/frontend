"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Samtale() {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gsap_container",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.fromTo(
      ".image",
      {
        y: "100vh",
      },
      {
        y: "-50vh",
      }
    ).fromTo(
      ".image_2",
      {
        y: "150vh",
      },
      {
        y: "-75vh",
      },
      "<"
    );
  });

  return (
    <section className="gsap_container px-2 h-[200vh]">
      <h2 className="pb-2 text-xl text-center sm:text-2xl fair">
        1. <br /> Uforpligtende samtale
      </h2>
      <p className=" max-w-[600px] mx-auto">Hav en uforpligtende samtale med J. anthony production omkring hvad der er muligt at få gjort for din produktion. Samtalen er total uforpligtende og på ingen måder bindende.</p>
      <div className="flex justify-between max-w-[800px] mx-auto">
        <div className="w-1/3 image">
          <Image src={"/t-shirts.jpg"} width={300} height={400} />
        </div>
        <div className="w-1/3 image_2">
          <Image src={"/t-shirts.jpg"} width={300} height={400} />
        </div>
      </div>
    </section>
  );
}

export default Samtale;
