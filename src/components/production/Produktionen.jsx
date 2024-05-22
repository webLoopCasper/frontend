import Image from "next/image";

function Produktionen() {
  return (
    <section className=" h-[200vh]">
      <h2 className="text-center">
        4. <br /> Produktion
      </h2>
      <p className=" max-w-[600px] mx-auto">Når vi sammen har fundet frem til et produkt som du er tilfreds med vil vi bestille varen hjem og starte produktionen af dit nye tøj</p>
      <div className="max-w-[800px] mx-auto">
        <Image src={"/t-shirts.jpg"} width={1600} height={900} />
      </div>
    </section>
  );
}

export default Produktionen;
