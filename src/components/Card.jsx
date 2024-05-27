import { StrapiImage } from "./StrapiImage";

export function Card({data}){
console.log(data);

    return(
        <div>
        <a href={data.link}>
            <StrapiImage height={200} src={data.image.url} />
            <p className="fair text-2xl my-1.5">{data.title}</p>
            <p>{data.description}</p> 
        </a>
        </div>
    )
}