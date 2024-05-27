import { Card } from "./Card";




export function CardSection({data}){

    return(
        <div className=" max-w-screen-lg mt-12 px-4 sm:px-12 mx-auto">
            <h2 className="mb-8 text-3xl">{data.headline}</h2>
            <div className=" md:grid grid-cols-2 gap-x-10 ">
            {
                data.card.map((singleCard, index)=> <div className=" pb-12"><Card data={singleCard}/></div>)  
            } 
            </div> 
        </div>
    )

}