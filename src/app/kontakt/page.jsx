import Image from "next/image";

function Kontakt() {
  return (
    <div>
      <div className="mx-auto text-xl text-black max-w-fit">
        <p>Skal vi skabe noget</p>
        <div className="flex flex-row justify-center w-full gap-1 m-0 ">
          <img className="w-1/5 stroke-2 " src="/streg.svg" alt="streg" />
          <p>sammen?</p>
        </div>
      </div>
      <section className="grid max-w-4xl gap-6 mx-auto md:grid-cols-2 ">
        <div>
          <Image src={"/Oliver.png"} height={500} width={500} sizes="100vw" priority></Image>
        </div>
        <div className="flex flex-col justify-evenly text-softblack">
          <h1>Kontakt os!</h1>
          <p>Når din virksomhed skal have produceret kræver det en produktion som er pålidelig kvalitets bevidste og ambiøste Når din virksomhed skal have er pålidelig kvalitets bevidste og ambiøste Når din virksomhed skal have </p>
          <a href="mailto:Oliver@janthonyproduction.com">Mail: Oliver@janthonyproduction.com</a>
          <a href="tel:27922685">Tlf: 27 92 26 85</a>
          <p>Vi glæder os til at hører fra dig </p>
        </div>
      </section>
    </div>
  );
}

export default Kontakt;
