import Link from "next/link";

export function ButtonLink({ href, text, appearance }) {
  return (
    // <Link className={`px-8 py-2 inline-block border ${appearance == "black background white text"? " bg-softblack text-bgcol":"border-softblack"}`} href={href}>{text}</Link>
    <Link className="flex w-[150px] px-8 py-2 outline-2 outline-softblack bg-softblack text-bgcol align-center justify-center group" href={href}>
      <div className="relative">
        {text}
        <div className="absolute right-[-30px] w-6 h-6 px-1 m-0 transition-all rotate-45 opacity-0 group-hover:opacity-100 top-[50%]  group-hover:right-[-20px] translate-y-[-30%]">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#F8F6F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />{" "}
            </g>
          </svg>
        </div>
      </div>
    </Link>
  );
}
