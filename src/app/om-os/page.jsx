
import { Headliner } from "@/components/Headliner";
import { ImageAndText } from "@/components/ImageAndText";
import { getOmOsData } from "@/data/loaders"


 let data = await getOmOsData();

 function blockRenderer(data) {
    switch (data.__component) {
      case "layout.headliner":
        return <Headliner key={data.id} data={data} />;
      case "layout.image-and-text":
        return <ImageAndText key={data.id} data={data} />;
      default:
        return null; 
    }  
  }  


export default function Omos(){ 
    return(
        <div>
            {data.omOsBody.map(data => blockRenderer(data))}
            {/* <Headline data={data.omOsBody[0]}/>
             <ImageAndText data={data.omOsBody[1]} /> 
             <ImageAndText data={data.omOsBody[2]} />  */}
        </div>
    )
}