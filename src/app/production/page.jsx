import Design from "@/components/production/Design";
import Kontakt from "@/components/production/Kontakt";
import Produktionen from "@/components/production/Produktionen";
import Samples from "@/components/production/Samples";
import Samtale from "@/components/production/Samtale";
import Image from "next/image";
import { getProduktionData } from "@/data/loaders";
import { Headliner } from "@/components/Headliner";

let data = await getProduktionData();
 
function page() { 
  return (
    <div className="text-black bg-bgcol ">
      <section className="mb-20">
        <h1 className="text-center text-black">
          En rejse med <br /> J. Anthony production
        </h1>
         {/* <Headliner data={data.ProduktionBody[0]}/>    */}
        <div className="w-3/4 mx-auto sm:w-2/3">
          <Image src={"/t-shirts.jpg"} width={1600} height={900} priority={true} />
        </div>
      </section>
      <Samtale data={data.ProduktionBody[1].production1}/>
      <Design data={data.ProduktionBody[1].production2}/>
      <Samples />
      <Produktionen />
      <Kontakt />
    </div>
  );
}

export default page;
