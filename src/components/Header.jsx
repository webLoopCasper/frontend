import Image from "next/image";

export default function Header({data}){
    return(
        <header className="border-b border-softgrey">
        <div className="flex justify-between content-center flex-wrap max-w-screen-lg h-16  px-4 sm:px-12 mx-auto">
            <a href={data.logoLink.url}>
                {data.logoLink.text}
            </a>
            <div className="flex">
                <a className="flex border-r border-softgrey" href={data.contactLink.url}>
                    {data.contactLink.text} 
                    <Image 
                    src="./arrow-up-right.svg"
                    width={20}
                    height={20}
                    />
                
                </a>
                <button className="ml-2">
                    <span className="w-8 h-0.5 bg-softblack block mb-1.5"></span>
                    <span className="w-8 h-0.5 bg-softblack block mb-1.5"></span>
                    <span className="w-8 h-0.5 bg-softblack block "></span>
                </button>
            </div>
           
        </div>


       </header>
    )
}