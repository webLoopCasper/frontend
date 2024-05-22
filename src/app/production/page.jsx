import Design from "@/components/production/Design";
import Produktionen from "@/components/production/Produktionen";
import Samples from "@/components/production/Samples";
import Samtale from "@/components/production/Samtale";

import Image from "next/image";

function page() {
  return (
    <div className="text-black ">
      <section className="mb-20">
        <h1 className="text-center text-black">
          En rejse med <br /> J. Anthony production
        </h1>
        <div className="w-2/3 mx-auto">
          <Image src={"/t-shirts.jpg"} width={1600} height={900} priority={true} />
        </div>
      </section>
      <Samtale />
      <Design />
      <Samples />
      <Produktionen />
    </div>
  );
}

export default page;
