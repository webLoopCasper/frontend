
export function Headliner({data}){
   
    const underline = data.underline;
    const headline = data.headline1.split(" "); 
    const Tag = data.tag;

    const wordsNotUnderline = headline.length - underline;
    const underlineText = headline.slice(wordsNotUnderline,headline.length).join(' ');
    const notUnderlineText = headline.slice(0,wordsNotUnderline).join(' ');
    
    let headlinePosition;
    
    if (data.position == "right") {
        headlinePosition = "flex justify-end"; 
    }else if (data.position == "center"){
        headlinePosition = "flex justify-center"; 
    }else{
        headlinePosition = "flex justify-start"; 
    }

    return(
        <>   
            <div className={"py-16 max-w-screen-lg px-4 sm:px-12 mx-auto "+headlinePosition}>  
                <Tag className="fair text-2xl sm:text-4xl">{notUnderlineText+" "} 
                {underlineText && <span className="border-b border-softblack">{underlineText}</span> }
                {data.headline2 && <span className="relative top-5"> {data.headline2}</span>}
                </Tag>
            </div>
        </>
    )
}