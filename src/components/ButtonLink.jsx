import Link from 'next/link'


export function ButtonLink({href, text, appearance}){
    
    return(
        <Link className={`px-8 py-2 inline-block border ${appearance == "black background white text"? " bg-softblack text-bgcol":"border-softblack"}`} href={href}>{text}</Link>
    )
}