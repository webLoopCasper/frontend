
import { getHomepageData } from '@/data/loaders';


let data = await getHomepageData();
console.log(data);

export default function Home() {
  return (
   <div>
    <p>{data.id}</p>
   </div>
  );
}
