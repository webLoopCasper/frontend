"use client";
import Image from "next/image";

function Samtale() {
  return (
    <section className=" h-[200vh]">
      <h2 className="text-center">
        1. <br /> Uforpligtende samtale
      </h2>
      <p className=" max-w-[600px] mx-auto">Hav en uforpligtende samtale med J. anthony production omkring hvad der er muligt at få gjort for din produktion. Samtalen er total uforpligtende og på ingen måder bindende.</p>
      <div className="flex justify-between max-w-[800px] mx-auto">
        <Image src={"/t-shirts.jpg"} width={300} height={400} />
        <Image src={"/t-shirts.jpg"} width={300} height={400} />
      </div>
    </section>
  );
}

export default Samtale;
