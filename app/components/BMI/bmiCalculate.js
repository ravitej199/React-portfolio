"use client"

import { useState } from "react"

import Scroll from "./scroll"
import BmiMeter from './bmiMeter'

export default function Calculate({list, setList, setViewRecord}){

    const[state,setState]=useState({height:0,weight:0,gender:"M",track_name:0})
    const{gender,height,weight,track_name}=state

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let formdata = new FormData(e.currentTarget)

        let data = {}
        for(let [name,value] of formdata){
            data[name]=value
            data["created_on"] = new Date
        }

        if(track_name>0){
            data = {...data,...state,track_name:String(track_name)}
            setList([data,...list])
            console.log(data)
        }
        setViewRecord(true)
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="w-full flex gap-5 justify-around">
                <div>
                    <p className="font-medium text-slate-500 p-1">Name</p>
                    <input type="text" name="name" className="text-black p-2 h-[3rem] w-[100%] rounded-lg outline outline-transparent border-2 border-slate-200" required></input>
                </div>
                <div>
                    <p className="font-medium text-slate-500 p-1">Age</p>
                    <input type="number" name="age" className="text-black p-2 h-[3rem] w-[80%] rounded-lg outline outline-transparent border-2 border-slate-200 text-center" required></input>
                </div>
                <div className="flex gap-2">
                    <div onClick={()=>setState({...state,gender:"M"})} className=" self-end">
                        <svg className={gender=='M' ? "stroke-0 stroke-blue-600 fill-blue-600 h-[3rem] w-[2rem]" : "stroke-0 stroke-[#333333] fill-[#333333] h-[3rem] w-[2rem]"} width="21" height="39" viewBox="0 0 21 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.20906 9.20312C5.43859 9.20647 4.7518 9.6978 4.50413 10.4268L1.02062 20.5888C0.239445 22.8654 3.65333 24.0448 4.43719 21.7676L6.05912 17.0256V36.3542C6.05912 39.1757 10.2917 39.1757 10.2917 36.3542V25.1246H11.3138V36.3542C11.3138 39.1757 15.5464 39.1757 15.5464 36.3542V17.0263L17.167 21.7682C17.9515 24.0448 21.3681 22.866 20.5835 20.5894L17.1007 10.4274C16.8537 9.69847 16.1662 9.20714 15.3958 9.20379H13.5891C12.2155 9.98096 10.5146 10.1349 8.95222 9.46151C8.77483 9.38453 8.60347 9.29751 8.44014 9.20379L6.20906 9.20312Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.8425 6.32439C13.9321 8.43364 11.4848 9.40291 9.37221 8.49321C7.26564 7.58619 6.29771 5.13555 7.20674 3.033C8.11711 0.920408 10.5644 -0.0488682 12.6696 0.861502C14.7829 1.77053 15.7522 4.21514 14.8425 6.32439Z"/>
                        </svg>
                    </div>
                    <div onClick={()=>setState({...state,gender:"F"})} className="self-end">
                        <svg className={gender=='F' ? "stroke-0 stroke-blue-600 fill-blue-600 h-[3rem] w-[2rem]" : "stroke-0 stroke-[#333333] fill-[#333333] h-[3rem] w-[2rem]"} width="24" height="39" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.50296 9.21875C6.88177 9.21875 6.31078 9.57152 6.03098 10.1291L0.902782 20.3059C-0.0939396 22.2759 2.85941 23.7679 3.85278 21.8019L7.52706 14.4976L8.11278 17.5239L3.7999 30.1412H19.9349L15.626 17.5239L16.205 14.4976L19.8867 21.8019C20.88 23.7679 23.8334 22.2759 22.8394 20.3059L17.7011 10.1291C17.422 9.57152 16.853 9.21875 16.2291 9.21875H14.1373C12.8233 9.85333 11.2475 9.94102 9.79362 9.31313C9.72735 9.28435 9.66509 9.24954 9.59815 9.21875H7.50296Z"/>
                            <path d="M7.52734 30.9336V36.4072C7.52734 39.0292 11.456 39.0292 11.456 36.4072V30.9336H7.52734Z" />
                            <path d="M12.2817 30.9336V36.4072C12.1425 39.1577 16.3436 39.1577 16.2043 36.4072V30.9336H12.2817Z"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.6916 6.33121C14.7778 8.44381 12.3265 9.41643 10.2139 8.50606C8.10135 7.59636 7.13207 5.14238 8.04177 3.03581C8.95549 0.923213 11.4068 -0.049409 13.5154 0.860961C15.632 1.77066 16.6013 4.2213 15.6916 6.33121Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-[100%]">
                    <Scroll bmi={'track_name'} setElem={setState} state={state} elem={"height"} background={"bg-indigo-200"} unit={"cm"} metric={"Height"} maxCapacity={280}/>
                </div>
                <div className="w-[100%]">
                    <Scroll bmi={'track_name'} setElem={setState} state={state} elem={"weight"} background={"bg-red-200"} unit={"kg"} metric={"Weight"}  maxCapacity={241}/>
                </div>
            </div>

            <p className="text-slate-500 py-2 text-xs"><span className="text-current font-semibold">Note :</span>Please adjust the height and weight by sliding the meter.</p>

            <button type="submit" className="mt-4 active:opacity-50 font-medium text-white text-center bg-blue-600 p-1  lg:w-[40%] w-[50%] rounded-[50px]" onClick={()=>setViewRecord(true)}>View Records &gt; </button>

            <div className="mb-4 flex justify-center h-[160px]">
                <BmiMeter bmi={track_name}/>
            </div>
            <div className=" flex flex-col">
                <p className="text-black p-3 text-lg font-semibold">BMI Track Details</p>
                <div className="p-3 bg-white rounded-2xl font-medium">
                    <div className={`p-2 border-b flex justify-between ${track_name<=15.9 && "text-[#1B59F8]" }`}>
                        <p className={`${track_name<=15.9 ? "text-[#1B59F8]" : "text-slate-500" }`}>Very Severely Underweight</p>
                        <p> ≤ 15.9</p>
                    </div>
                    <div className={`p-2 border-b flex justify-between ${track_name>=16.0 && track_name<=16.9 && "text-[#1B59F8]" }`}>
                        <p className={`${(track_name>=16.0 && track_name<=16.9) ? "text-[#1B59F8]" : "text-slate-500" }`}>Severely Underweight</p>
                        <p> 16.0 - 16.9</p>
                    </div>
                    <div className={`p-2 border-b flex justify-between ${track_name>=17.0 && track_name<=18.4 && "text-[#1B59F8]" }`}>
                        <p className={`${(track_name>=17.0 && track_name<=15.9) ? "text-[#1B59F8]" : "text-slate-500" }`}>Underweight</p>
                        <p>17.0 - 18.4</p>
                    </div>
                    <div className={`p-2 border-b flex justify-between ${track_name>=18.5 && track_name<=24.9 && "text-[#13C51A]" }`}>
                        <p className={`${(track_name>=18.5 && track_name<=24.9) ? "text-[#13C51A]" : "text-slate-500" }`}>Normal</p>
                        <p>18.5 - 24.9</p>
                    </div>
                    <div className={`p-2 border-b flex justify-between ${track_name>=25 && track_name<=29.5 && "text-[#FB5549]" }`}>
                        <p className={`${(track_name>=25 && track_name<=29.5) ? "text-[#FB5549]" : "text-slate-500" }`}>Overweight </p>
                        <p> 25 - 29.9</p>
                    </div>
                    <div className={`p-2 border-b flex justify-between ${track_name>=30 && track_name<=39.9 && "text-[#FB5549]" }`}>
                        <p className={`${(track_name>=30 && track_name<=39.9) ? "text-[#FB5549]" : "text-slate-500" }`}>Obese Class 1</p>
                        <p> 30 - 39.9</p>
                    </div>
                    <div className={`p-2 border-b flex justify-between ${track_name>=40 && "text-[#FB5549]" }`}>
                        <p className={`${track_name>=40 ? "text-[#FB5549]" : "text-slate-500" }`}>Obese Class 2</p>
                        <p> ≥ 40</p>
                    </div>
                </div>
                <div>
                <div className="w-full flex justify-center p-5">
                    <button type="submit" className="active:opacity-80 font-semibold text-lg p-2 w-[50vw] text-white bg-blue-600 rounded-3xl">Save</button>
                </div>
                </div>
            </div>
        </form>
        </>
    )
}
