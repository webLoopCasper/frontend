import { ButtonLink } from "./ButtonLink";
import { StrapiImage } from "./StrapiImage";



export function ImageAndText({data}){
    return( 
         
         <div className={ `bg-${data.backgroundColor}`}>   
            <div className=" py-16 max-w-screen-lg px-4 sm:px-12 mx-auto">
                <div className="md:flex"> 
                    <div className="md:w-3/6 mb-8">
                        <p className="fair mb-8 text-3xl">{data.headline}</p>
                        <p className="mb-8 text-sm">{data.description}</p>
                      {data.link && (
                        <ButtonLink href={data.link.url} text={data.link.text} appearance={data.link.appearance} />  
                      )} 
                        
                    </div>
                    <div className={`${data.imagePosition == "left"?"order-first md:mr-10":"md:ml-10"}  md:w-3/6`}>
                        <StrapiImage src={data.image.url} height={350}/>  
                    </div>  
                         
                    
                </div>
            </div>
        </div>
       
    )
}