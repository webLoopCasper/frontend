import Image from "next/image";

function Design() {
  return (
    <section className=" h-[200vh]">
      <h2 className="text-center">
        2. <br /> Design og valg af materialer
      </h2>
      <p className=" max-w-[600px] mx-auto">Sammen med os finder vi frem til de materialer som jeres produkt være bedst i. Vi finder frem til hvad jeres design ville se godt ud på og hvad der giver det bedste mulige resultat.</p>
      <div className="max-w-[800px] mx-auto">
        <Image src={"/t-shirts.jpg"} width={1600} height={900} />
      </div>
    </section>
  );
}

export default Design;
