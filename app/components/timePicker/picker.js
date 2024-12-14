import { useEffect, useRef } from "react"

export default function Picker({data,setTime,currentElem}){

const pickerRef = useRef(null)


const callbackFunction =(entries)=> {
    const [entry] = entries
    if(entry.isIntersecting)
        setTime(entry.target.innerText)

}   
const options = {
    root: pickerRef.current,
    rootmargin: "0px",
    threshold: 1.0
}

useEffect(()=>{
    const observer = new IntersectionObserver(callbackFunction,options)
    if (pickerRef.current){
        Object.values(pickerRef.current.childNodes).map(elem => observer.observe(elem))
    }
    return ()=>{
        if (pickerRef.current)
            Object.values(pickerRef.current.childNodes).map(elem => elem.isIntersecting && observer.unobserve(elem))
    }
},[pickerRef,options])

useEffect(()=>{
    if(pickerRef.current.childNodes)
        Object.values(pickerRef.current.childNodes).filter(e=>e.innerText==currentElem)[0].scrollIntoView({ behavior: 'smooth' })
},[pickerRef])

    return(
        <>
            <div style={{scrollbarWidth: 'none'}} className="scrollbar-hide snap-y snap-mandatory h-[4rem] w-full border-y-2 scroll-smooth overflow-scroll py-2" ref={pickerRef  }>

                {data.map((elem,index) => <p key={index} className="text-blue-700 snap-center snap-always text-3xl text-center p-2 focus:text-red-100">{elem}</p>)}
                <style jsx>{`
                    div::-webkit-scrollbar {
                    display: none;
                    }
                `}</style>
            </div>
        </>
    )
}
