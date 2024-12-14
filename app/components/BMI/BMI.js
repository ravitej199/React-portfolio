"use client"

import BmiCalculate from './bmiCalculate'
import Records from './records'
import { useState } from 'react'

export default function BIM(){
    const [viewRecord,setViewRecord] = useState(false) 
    const[list,setList]=useState([])
    return(
        <>
            <div className=' bg-slate-200 w-full flex flex-col gap-4 p-5 relative'>
                {viewRecord ?<Records list={list} setViewRecord={setViewRecord}/> :<BmiCalculate list={list} setList={setList} setViewRecord={setViewRecord}/>}
            </div>
        </>
    )
}