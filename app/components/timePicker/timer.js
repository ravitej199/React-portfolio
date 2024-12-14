"use client"

import { useState } from "react"
import Clock from "../../../public/images/timer.svg"

import Image from "next/image"
import Picker from "./picker";

export default function Timer({setState,state,timing,elem}){

    const[edit,setEdit]=useState(false)

    const[hour,setHour]=useState(state.slice(0,2))
    const[min,setMin]=useState(state.slice(3,5))
    const[zone,setZone]=useState(state.slice(5))


    const updateTime=()=>{
        setState(`${hour}:${min}${zone}`)
        setEdit(!edit)
    }
    return(
        <>
        {edit ? 
            <div className="select-none fixed flex items-end top-0 left-0 bg-black/60 h-screen">
                <div className=" bg-white grid grid-rows-3 rounded-t-3xl h-[20rem] w-screen p-5">
                    <div className="flex flex-col row-span-1">
                        <p className="font-medium text-lg self-end active:opacity-75" onClick={()=>setEdit(!edit)}>X</p>
                        <div className="flex gap-5 items-center">
                            <Image src={Clock} alt="pill" className="h-[4rem] w-[2rem]"/>
                            <div>
                                <p className="font-semibold">Time</p>
                                <p className="text-slate-500">Scheduled at: {state}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 place-self-center grid-rows-3">
                        <div className="flex gap-3">
                        <Picker data={Array.from({length: 13}, (_, i) => String(i).length >1  ? i : "0"+i )} setTime={setHour} currentElem={ state.slice(0,2) }/>
                        <Picker data={Array.from({length: 60}, (_, i) => String(i).length >1  ? i : "0"+i )} setTime={setMin} currentElem={state.slice(3,5)}/>
                        <Picker data={["AM","PM"]} setTime={setZone} currentElem={state.slice(5)}/>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button type="submit" className="active:opacity-50 font-semibold text-white text-center bg-blue-600 p-2 w-[70vw] rounded-[50px]" onClick={()=>updateTime()} >Done</button>
                    </div>
                </div>
            </div>
        :
         <p className="cursor-pointer text-slate-800 font-medium bg-slate-200 text-sm border border-blue-500 rounded-lg p-2" onClick={()=>setEdit(!edit)} >{state}</p>}
        </>
    )
}