"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Samples() {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gsap_container_2",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
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
        y: "-50vh",
      }
    ).fromTo(
      ".image_4",
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
    <section className=" gsap_container_2 h-[200vh]">
      <h2 className="text-center">
        3. <br /> Rettelser af samples
      </h2>
      <p className=" max-w-[600px] mx-auto">I et tæt samarbejde sætter vi os ned sammen med dig og gennemgår de samples som vi har fået bestilt hjem til dig. Vi tager de ting med videre som du godt kan lide samt de ting som du gerne vil have lavet om på</p>
      <div className="flex justify-between max-w-[800px] mx-auto">
        <div className="image_4">
          <Image src={"/t-shirts.jpg"} width={300} height={400} />
        </div>
        <div className="image_3">
          <Image src={"/t-shirts.jpg"} width={300} height={400} />
        </div>
      </div>
    </section>
  );
}

export default Samples;
