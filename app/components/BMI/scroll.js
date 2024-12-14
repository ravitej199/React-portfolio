'use client'
import { useState,useRef } from 'react'
// import '../../styles/globals.css'

export default function Scroll({bmi,setElem,state,elem,background,unit,metric,maxCapacity}){
    const [precentage,setPrecentage]=useState(0)
    const scrollContainerRef = useRef(null);

    const handleWheel = (e) => {
        if (scrollContainerRef.current) {
          // Only scroll horizontally based on e.deltaY (vertical scroll movement)
          scrollContainerRef.current.scrollLeft += e.deltaY;
    
          // Prevent vertical scroll behavior from triggering
          e.preventDefault();
        }
      };
    const updatePrecentage=(obj)=>{
        setPrecentage(obj.scrollLeft/obj.scrollWidth*100)
        const val = Math.round((obj.scrollLeft/obj.scrollWidth*100)*maxCapacity/100)
        elem == "height" ?
        setElem({...state,[elem]:Math.round((obj.scrollLeft/obj.scrollWidth*100)*maxCapacity/100),[bmi]: String((state.weight/Math.pow((val/100),2)).toFixed(2))=="NaN" ? 0 : (state.weight/Math.pow((val/100),2)).toFixed(2) }):
        setElem({...state,[elem]:Math.round((obj.scrollLeft/obj.scrollWidth*100)*maxCapacity/100),[bmi]: String((val/Math.pow((state.height/100),2)).toFixed(2))=="NaN" ? 0 : (val/Math.pow((state.height/100),2)).toFixed(2) })

    }  
    const meter = Array.from({length: 90}, (_, i) =>"|")
    // console.log(state.height,state.weight)
    return(
        <>
        <div className=''>

            <p className='p-2 text-slate-500 font-medium'>
                {metric}
            </p>
            <div className={" p-2 relative flex justify-between h-[5rem] rounded-xl "+background}>
                <div className="text-black py-2 text-sm text-center font-medium self-end">
                    {metric}
                </div>
                <p className='absolute top-2 right-[30%] text-red-700 text-xl font-semibold'>|</p>
                <p className='text-black absolute bottom-0 right-[25%] text-sm font-semibold py-4 '>{Math.round(precentage*maxCapacity/100)} {unit}</p>
                <div style={{scrollbarWidth: 'none'}} ref={scrollContainerRef} onWheel={handleWheel} className="relative w-[60%]  overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide z-[100] " onScroll={(e)=>updatePrecentage(e.target)}>
                    <div className="flex gap-1 w-16 ml-[50%]" >
                        {meter.map((elem,index)=>
                        <p key={index} className='text-black'>
                            {elem}
                        </p>
                        )}
                        <p className='pr-[50%]'></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}