import Design from "@/components/production/Design";
import Kontakt from "@/components/production/Kontakt";
import Produktionen from "@/components/production/Produktionen";
import Samples from "@/components/production/Samples";
import Samtale from "@/components/production/Samtale";
import Image from "next/image";
import { getProduktionData } from "@/data/loaders";
import { Headliner } from "@/components/Headliner";

let data = await getProduktionData();

export const metadata = {
  title: data.title,
  description: data.metaDescription,
}


function page() {
  console.log(data.ProduktionBody);
  return (
    <div className="text-black bg-bgcol ">
      <section className="mb-20">
        <Headliner data={data.ProduktionBody[1]} />
        <div className="w-3/4 mx-auto sm:w-2/3">
          <Image src={data.ProduktionBody[2].image.url} width={1600} height={900} priority={true} sizes="100vw" />
        </div>
      </section>
      <Samtale data={data.ProduktionBody[0].production1} />
      <Design data={data.ProduktionBody[0].production2} />
      <Samples data={data.ProduktionBody[0].production3} />
      <Produktionen data={data.ProduktionBody[0].production4} />
      <Kontakt data={data.ProduktionBody[0].contact} />
    </div>
  );
}

export default page;
