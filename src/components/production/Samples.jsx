import Image from "next/image";

function Samples() {
  return (
    <section className=" h-[200vh]">
      <h2 className="text-center">
        3. <br /> Rettelser af samples
      </h2>
      <p className=" max-w-[600px] mx-auto">I et tæt samarbejde sætter vi os ned sammen med dig og gennemgår de samples som vi har fået bestilt hjem til dig. Vi tager de ting med videre som du godt kan lide samt de ting som du gerne vil have lavet om på</p>
      <div className="flex justify-between max-w-[800px] mx-auto">
        <Image src={"/t-shirts.jpg"} width={300} height={400} />
        <Image src={"/t-shirts.jpg"} width={300} height={400} />
      </div>
    </section>
  );
}

export default Samples;
