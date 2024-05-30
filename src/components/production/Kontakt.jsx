import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../ButtonLink";

function Kontakt({ data }) {
  return (
    <section className="relative z-20 bg-desert">
      <div className="grid max-w-screen-lg py-10 mx-auto sm:grid-cols-2 ">
        <div className="">
          <Image src={data.image.url} width={800} height={1600} sizes="100vw" />
        </div>
        <div className="self-end p-4 ">
          <h3 className="text-4xl ">{data.headline}</h3>
          <p className="mt-4 mb-8 ">{data.description}</p>
          <ButtonLink text={data.link.text} href={data.link.url} />
        </div>
      </div>
    </section>
  );
}

export default Kontakt;
