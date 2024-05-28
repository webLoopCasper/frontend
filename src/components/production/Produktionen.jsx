"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Produktionen() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    const tl = gsap.timeline();

    mm.add("(min-width:641px)", () => {
      tl.from(".big_image_text_2", { opacity: "100%" }).from(".big_image_2", { width: "30%", duration: 2 });
    });

    mm.add("(max-width: 640px)", () => {
      tl.from(".big_image_text_2", { opacity: "100%" }).from(".big_image_2", { width: "80%", duration: 2 });
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".big_image_container_2",
      start: "top top+=50px",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      pinSpacing: false,
    });
  });

  return (
    <section className=" big_image_container_2 px-2 h-[150vh] z-0 relative mb-12">
      <div className="m-4 big_image_text_2">
        <h2 className="pb-2 text-xl text-center md:text-2xl fair">
          4. <br /> Produktion
        </h2>
        <p className=" max-w-[600px] mx-auto">Når vi sammen har fundet frem til et produkt som du er tilfreds med vil vi bestille varen hjem og starte produktionen af dit nye tøj</p>
      </div>
      <div className="max-w-[800px] mx-auto big_image_2">
        <Image src={"/t-shirts.jpg"} width={1600} height={900} />
      </div>
    </section>
  );
}

export default Produktionen;
