
import { getHomepageData } from '@/data/loaders';
import { StrapiImage } from '@/components/StrapiImage';


let data = await getHomepageData();

console.log(data);
let url1 = data.ForsideBody[0].images.data[0].url;




export default function Home() {
  return (
   <div>
    <p>{data.id}</p>
     <StrapiImage priority={true} height={200} src={url1} /> 

   </div>
  );
}
