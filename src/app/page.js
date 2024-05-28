import { getHomepageData } from "@/data/loaders";
import { Intro } from "@/components/Intro";
import { ImageAndText } from "@/components/ImageAndText";
import { CardSection } from "@/components/CardSection";
let data = await getHomepageData();

function blockRenderer(data) {
  switch (data.__component) {   
    case "layout.image-and-text":
      return <ImageAndText key={data.id} data={data} />;
    case "layout.intro":
      return <Intro key={data.id} data={data} />;
    case "layout.card-section":
      return <CardSection key={data.id} data={data} />;
    default:
      return null;
  }
}

export default function Home() {
  return <div>{data.ForsideBody.map((data) => blockRenderer(data))}</div>;
}
