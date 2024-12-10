'use client'
import React, { useState } from "react";
import Navigator from "../components/navigatior.js";
import VideoPlayer from "../components/videoPlayer.js";
import AudioPlayer from "../components/audioPlayer.js";
import TimePicker from "../components/timer.js";
import { videoSrc, videoComp, audioSrc, audioComp, timeData, pickerComp } from "@/public/data/projectData.js";

export default function CustomComponent(){

    const [state, setstate] =  useState(timeData)

    return(<>
    <div className="flex justify-center">
    <Navigator page={"/customComponents"}/>
    </div>

    <div className="p-10">
        <h1 className="text-4xl pt-10 font-semibold italic">Components</h1>
        
        <div className="">
            <Detail data={audioComp}/>
            <AudioPlayer src={audioSrc}/>
        </div>
        <div className="">
            <Detail data={videoComp}/>
            <VideoPlayer src={videoSrc}/>
        </div>
        <div className='flex flex-col items-center' >
            <Detail data={pickerComp}/>
            <div className="bg-slate-100 flex justify-center items-center h-[10vh] w-[50vw] rounded-[10px]" >
                <div className='w-[100px]' >
                    <TimePicker setState={setstate} state={state} />
                </div>
            </div>
        </div>
    </div>
    </>)
}

function Detail({data}){
    return(
        <div className="">
            <p className="text-2xl font-medium py-5">
                {data.name}
            </p>
            <p className="text-xl font-medium py-5">
                {data.content}
            </p>
            {data.attributes  && <p className="text-xl font-medium p-1">Attributes :</p>}
            {data.attributes  && Object.entries(data.attributes).map((elem, index)=>
                <div key={index} className="md:pl-10 flex gap-2 p-2">
                    <p className="h-min min-w-20 md:text-lg font-semibold text-slate-300 bg-slate-600 rounded-[5px] p-1">{`${elem[0]}:`}</p>
                    <p className="md:text-lg font-medium p-1">{elem[1]}</p>
                </div>
            ) 
            }
        </div>
    )
}