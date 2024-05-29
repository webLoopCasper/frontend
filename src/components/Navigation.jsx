"use client";

import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Navigation({ data, isOpen, setIsOpen }) {
  console.log(data.navLink);
  const naviLinks = [
    {
      link: "Forside",
      url: "/",
    },
    {
      link: "Om os",
      url: "/omos",
    },
    {
      link: "Production",
      url: "/production",
    },
    {
      link: "Teamet",
      url: "/teamet",
    },
    {
      link: "Kontakt",
      url: "/kontakt",
    },
  ];

  const container = useRef();

  const tl = useRef();

  const { contextSafe } = useGSAP(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        ".menu-overlay",
        {
          x: "101vw",
        },
        {
          x: 0,
          onReverseComplete() {
            setIsOpen(!isOpen);
          },
        }
      )
      .from(".menu-link-item-holder", { y: 100, opacity: 0, stagger: 0.1 });
  });

  const toggleTimeline = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-bgcol menu-overlay" ref={container}>
      <div className="flex justify-end h-16 max-w-screen-lg px-4 mx-auto sm:px-12">
        <button onClick={() => toggleTimeline()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-end max-w-4xl gap-12 mx-auto menu-copy">
        {data.navLink.map((page) => (
          <div className="px-4 transition-all cursor-pointer w-fit hover:translate-x-4 menu-link-item" key={page.url}>
            <div className="flex items-center menu-link-item-holder group ">
              <Link className="text-4xl sm:text-6xl " href={page.url}>
                <button onClick={() => toggleTimeline()}>{page.text}</button>
              </Link>
              <div className="hidden transition-all sm:group-hover:block">
                <Image src="./arrow-up-right.svg" width={40} height={40} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
