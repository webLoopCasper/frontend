"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Produktionen() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".big_image_text_2", { opacity: "100%" }).from(".big_image_2", { width: "30%" });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".big_image_container_2",
      start: "top top+=50px",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      pinSpacing: false,
      markers: true,
    });
  });

  return (
    <section className=" big_image_container_2 h-[200vh]">
      <div className="big_image_text_2">
        <h2 className="text-center ">
          4. <br /> Produktion
        </h2>
        <p className=" max-w-[600px] mx-auto">Når vi sammen har fundet frem til et produkt som du er tilfreds med vil vi bestille varen hjem og starte produktionen af dit nye tøj</p>
      </div>
      <div className="big_image_2 max-w-[800px] mx-auto">
        <Image src={"/t-shirts.jpg"} width={1600} height={900} />
      </div>
    </section>
  );
}

export default Produktionen;
