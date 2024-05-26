"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Design() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".big_image_text", { opacity: "100%" }).from(".big_image", { width: "30%" });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".big_image_container",
      start: "top top+=50px",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      pinSpacing: false,
      markers: true,
    });
  });

  return (
    <section className=" big_image_container h-[200vh]">
      <div className="big_image_text">
        <h2 className="text-center">
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
