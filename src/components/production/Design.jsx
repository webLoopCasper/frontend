"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StrapiImage } from "../StrapiImage";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Design({ data }) {
  console.log(data);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    const tl = gsap.timeline();

    mm.add("(min-width:641px)", () => {
      tl.from(".big_image_text", { opacity: "100%" }).from(".big_image", { width: "30%", duration: 2 });
    });

    mm.add("(max-width: 640px)", () => {
      tl.from(".big_image_text", { opacity: "100%" }).from(".big_image", { width: "80%", duration: 2 });
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".big_image_container",
      start: "top top+=50px",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      pinSpacing: false,
    });
  });

  return (
    <section className=" big_image_container px-2 mb-12 h-[175vh]">
      <div className="m-4 big_image_text">
        <h2 className="pb-2 text-xl text-center md:text-2xl fair">
          2. <br /> {data.headline}
        </h2>
        <p className=" max-w-[600px] mx-auto">{data.description}</p>
      </div>

      <div className="max-w-[800px] mx-auto big_image">
        <Image src={data.image.url} width={1600} height={900} sizes="100vw" />
      </div>
    </section>
  );
}

export default Design;
