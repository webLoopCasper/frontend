
import { StrapiImage } from "./StrapiImage";

export function Profil({data}){
   
    return(  
        <div className="">   
        <div className=" py-16 max-w-screen-lg px-4 sm:px-12 mx-auto">
            <div className="md:flex"> 
                <div className="md:w-3/6 mb-8">
                  <div className={data.imagePosition == "right"?"md:text-right":""}>
                  <p className="fair text-right inline-block text-3xl bg-desert py-3 px-4">{data.name}</p> <br />
                <p className="fair inline-block text-white mb-8 text-sm bg-softblue py-3 px-4">{data.jobTitle}</p>
                  </div>
                    <p className={`mb-8 text-sm ${data.imagePosition == "right"?"md:text-right":""}`}>{data.description}</p>
                </div>
                <div className={`${data.imagePosition == "left"?"order-first md:mr-10":"md:ml-10"}  md:w-3/6`}>
                    { <StrapiImage src={data.image.url} height={350}/>   }
                </div>  
                     
                
            </div>
        </div>
    </div>
    )
}