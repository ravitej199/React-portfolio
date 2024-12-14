"use client"

import Image from 'next/image'
import Trash from '../../../public/images/trash.svg'
import { useState } from 'react'

export default function Records({list, setViewRecord}){
    // const data = list

    // console.log(data);
    const data = [{created_on:new Date,track_name:"20",name:"Adesh",age:"25",height:"181cm",weight:"81kg"},{created_on:new Date, track_name:"30",name:"Adesh",age:"25",height:"181cm",weight:"81kg"}]

    function scale(bmi){
        let choice = ""
            if (bmi<=15.9){
                choice = "Very Severely Underweight"
            }
            else if (bmi>=16.0 && bmi<=16.9){
                choice = "Severely Underweight"
            }
            else if (bmi>=17.0 && bmi<=15.9){
                choice = "Underweight"
            }
            else if (bmi>=18.5 && bmi<=24.9){
                choice = "Normal"
            }
            else if (bmi>=25 && bmi<=29.5) {
                choice = "Overweight"
            }
            else if (bmi>=30 && bmi<=39.9) {
                choice = "Obese Class 1"
            }
            else{
                choice = "Obese Class 2"
            }
        return choice
    }


    const monthObj= {0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December" }
    return(
        <>
            <button type="submit" className="mt-4 active:opacity-50 font-medium text-white text-center bg-blue-600 p-1 w-[40%] rounded-[50px]" onClick={()=>setViewRecord(false)}>Measure BMI &gt; </button>
            {data.length > 0 ?
            <div className='w-full'>
                <p className="text-black py-5 text-lg font-semibold">BMI Reports</p>
                <div className="flex flex-col gap-3 items-center">
                    {data.map((e,index)=>
                    <div key={index} className="flex justify-between p-2 bg-white w-[90vw] lg:w-full drop-shadow-sm rounded-lg text-center">
                        <div>
                            <p className="text-slate-500">{monthObj[(new Date(e.created_on)).getMonth()]}</p>
                            <p className="text-black font-medium">{(new Date(e.created_on)).getMonth()+1}-{(new Date(e.created_on)).getDate()}-{(new Date(e.created_on)).getFullYear()}</p>
                            <p className="text-slate-500">{(new Date(e.created_on)).getHours()}:{(new Date(e.created_on)).getMinutes()}</p>
                        </div>
                        <hr className='self-center border border-slate-300 h-14'></hr>
                        <div className=''>
                            <p className='text-black item-center'>BMI</p>
                            <div className={`${e.track_name < 18.4 ? "text-[#1B59F8]" : e.track_name > 25 ? "text-[#FB5549]" : "text-[#13C51A]"}`}>
                                <p className="text-current font-medium">{e.track_name}</p>
                                <p className="text-current">{scale(e.track_name)}</p>
                            </div>
                        </div>
                        <hr className='self-center border border-slate-300 h-14'></hr>
                        <div>
                            <p className="">{e.name}</p>
                            <p className="text-slate-500">Height: {e.height}cm</p>
                            <p className="text-slate-500"> Weight: {e.weight}kg</p>
                            <p className="text-slate-500">Age : {e.age}</p>
                        </div>
                        {/* <Image src={Trash} alt='delete' className='active:opacity-50' onClick={()=>remove(index)}></Image> */}
                    </div>
                    )}
                </div>
            </div>
        :
        <div className='text-black py-5 text-lg font-semibold'>
            <p className='text-black text-2xl font-semibold'>No History</p>
        </div>    
        }

        </>
    )
}