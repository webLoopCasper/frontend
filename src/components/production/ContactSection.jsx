import { StrapiImage } from "../StrapiImage";

export function ContactSection({data}){
    console.log(data);   
    return(
        <div className={ ''}>   
        <div className=" py-16 max-w-screen-lg px-4 sm:px-12 mx-auto">
            <div className="md:flex"> 
               <div className=" md:w-3/6 md:mr-10">
                    <StrapiImage src={data.image.url} height={350}/>  
                </div>  
                <div className="md:w-3/6 mb-8">
                    <p className="fair mb-8 text-3xl">{data.headline}</p>
                    <p className="mb-6 text-sm">{data.description}</p>
                    <p className="fair font-bold mb-2 text-sm">{data.phone}</p>
                    <p className="fair font-bold mb-6 text-sm">{data.mail}</p>
                    <p className="mb-2 text-sm">{data.text}</p>
                 
                    
                </div>
                
                     
                
            </div>
        </div>
    </div>
    )
}