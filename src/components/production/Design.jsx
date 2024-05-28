"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Design() {
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
    <section className=" big_image_container px-2 h-[200vh]">
      <div className="m-4 big_image_text">
        <h2 className="pb-2 text-xl text-center md:text-2xl fair">
          2. <br /> Design og valg af materialer
        </h2>
        <p className=" max-w-[600px] mx-auto">Sammen med os finder vi frem til de materialer som jeres produkt være bedst i. Vi finder frem til hvad jeres design ville se godt ud på og hvad der giver det bedste mulige resultat.</p>
      </div>

      <div className="max-w-[800px] mx-auto big_image">
        <Image src={"/t-shirts.jpg"} width={1600} height={900} />
      </div>
    </section>
  );
}

export default Design;
