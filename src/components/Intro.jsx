import { StrapiImage } from "@/components/StrapiImage";
import { ButtonLink } from "./ButtonLink";

export function Intro({data}) {
   
  const headline = data.headline.split(" "); 
    return (
    <div className="md:flex max-w-screen-lg mt-12 px-4 sm:px-12 mx-auto mb-28">
      <div className="flex flex-col justify-between md:w-3/6">
        <div>
          <h1 className="text-4xl">
            <span className="border-b border-softblack">
              {headline[0]}
            </span>
            <span className="relative top-5">
              {" "+headline[1]}
            </span>
          </h1>
          <p className="mt-8 mb-6 text-sm">{data.description}</p>
          <div className="mb-10">
            <ButtonLink text={data.link.text} href={data.link.url}></ButtonLink>
          </div>

        </div>
        <div className=" mb-8 md:my-2">
          <div className="flex mb-2">
            <img className="mr-1.5" src="/dot.svg" alt="" />
            <p className=" text-xs"> Kontor København K, Danmark (Kjeld Langes Gade 14)</p>
          </div>
          <div className="flex">
            <img className="mr-1.5" src="/dot.svg" alt="" />
            <p className=" text-xs"> Kontor Dhaka Bangladesh (kanaiya Rd 2)</p>
          </div>

        </div> 
      </div>
      <div className="md:w-3/6">
        <div className=" ml-auto w-5/6 rounded-tr-3xl">
          <StrapiImage height={250} src={data.images.data[0].url}/>
        </div>
        <div className="relative -mt-20 w-5/6">
           <StrapiImage height={250} src={data.images.data[1].url}/> 
        </div>
       
      </div>
    </div>
     
    );
  }