

import { Headliner } from "@/components/Headliner";
import { Profil } from "@/components/Profil";
import { getTeamData } from "@/data/loaders"


 let data = await getTeamData();
 export const metadata = { 
  title: data.title,
  description: data.metaDescription,
} 

 function blockRenderer(data) {
    switch (data.__component) { 
      case "layout.headliner":
        return <Headliner key={data.id} data={data} />;
      case "layout.profil":
        return <Profil key={data.id} data={data} />;
      default:
        return null; 
    }  
  }  


export default function Team(){ 
    return(
        <div>
            {data.TeamBody.map(data => blockRenderer(data))}
             
        </div>
    )
}