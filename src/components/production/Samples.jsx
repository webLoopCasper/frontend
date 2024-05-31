"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Samples({ data }) {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gsap_container_2",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.fromTo(
      ".image_3",
      {
        y: "100vh",
      },
      {
        y: "-75vh",
      }
    ).fromTo(
      ".image_4",
      {
        y: "150vh",
      },
      {
        y: "-100vh",
      },
      "<"
    );
  });

  return (
    <section className=" gsap_container_2 px-2 h-[200vh]">
      <h2 className="pb-2 text-xl text-center md:text-2xl fair">
        3. <br /> {data.headline}
      </h2>
      <p className=" max-w-[600px] mx-auto">{data.description}</p>
      <div className="flex justify-between max-w-[800px] mx-auto">
        <div className="w-1/3 image_4">
          <Image src={data.image1.url} width={300} height={400} sizes="100vw" />
        </div>
        <div className="w-1/3 image_3">
          <Image src={data.image2.url} width={300} height={400} sizes="100vw" />
        </div>
      </div>
    </section>
  );
}

export default Samples;
