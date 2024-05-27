

export function Headline({data}){
    console.log(data);
    return(
        <div className="px-4 p-10 sm:px-12 mx-auto max-w-screen-lg">
            <p className="inline-block border-b border-softblack fair text-3xl sm:text-5xl">{data.headline}</p>
        </div>
        
    )
}