import Link from "next/link"

export const options = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:"/about"
    },
    {
        name:"Project",
        link:"/project"
    },
    {
        name:"Component",
        link:"/customComponents"
    },
]

export default function Navigator({page}){
    return(
        <div className="flex max-md:flex-wrap max-md:w-[80vw] justify-center gap-[10vw] pt-20 items-center w-[50vw]">
            {options.map((elem,index)=>
                <a key={index} href={elem.link} style={{ pointerEvents: elem.link==page ? 'none' : 'auto', color: elem.link==page ? '#c4b5fd' : 'white' }} className='text-transform-none font-semibold text-2xl hover:text-violet-300'>{elem.name}</a>
            )}
      </div>
    )
}