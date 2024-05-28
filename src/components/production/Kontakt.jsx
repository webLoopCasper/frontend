import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../ButtonLink";

function Kontakt() {
  const hreflink = "/kontakt";

  return (
    <section className="relative z-20 bg-desert">
      <div className="grid max-w-screen-lg py-10 mx-auto sm:grid-cols-2 ">
        <div className="">
          <Image src={"/t-shirts.jpg"} width={800} height={1600} sizes="100vw" />
        </div>
        <div className="self-end p-4 ">
          <h3 className="text-4xl ">Kontakt os!</h3>
          <p className="my-4 ">Skal du med på en rejse til en bedre produktion?</p>
          <ButtonLink text={"Kontakt"} href={"/kontakt"} />
        </div>
      </div>
    </section>
  );
}

export default Kontakt;
