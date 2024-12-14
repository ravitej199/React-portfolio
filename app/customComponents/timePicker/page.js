"use client"
import TimePicker from "../../components/timePicker/timer.js";
import { useState } from "react";

export default function TimePickerComponent(){

    const [state, setstate] =  useState("09:00AM")
    return(
        <div className="hover:border-2 border-[#244f75] bg-[#1b2a36] flex justify-center items-center h-[10vh] w-[50vw] rounded-[10px]" >
            <div className='w-[30vw]' >
                <TimePicker setState={setstate} state={state} />
            </div>
    </div>
    )
}