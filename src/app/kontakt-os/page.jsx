import { Headliner } from "@/components/Headliner";
import { ContactSection } from "@/components/production/ContactSection";
import { getKontaktOsData } from "@/data/loaders"

let data = await getKontaktOsData();
console.log(data); 
 
function blockRenderer(data) {
    switch (data.__component) { 
      case "layout.headliner": 
        return <Headliner key={data.id} data={data} />;
      case "layout.contact-section": 
        return <ContactSection key={data.id} data={data} />;
      default:
        return null;
    }  
  } 


export default function KontaktOs(){

    return(
        <div >
             {data.KontaktOsBody.map(data => blockRenderer(data))}
             {/* <p>{data.KontaktOsBody[1].html}</p> */}
        </div>
          
    )
}