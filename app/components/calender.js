// "use client"

// import Image from "next/image";
// import Next from '../../public/images/next.svg'
// import Previous from '../../public/images/previous.svg'
// import { useEffect, useState } from "react";

// import Clock from '../../public/images/clock.svg'
// import Check from '../../public/images/check.svg'
// import Return from '../../public/images/return.svg'
// import Notification from '../../public/images/notification.svg'
// import Link from 'next/link'
// // import Edit from './edit'
// import axios from "axios";
// import '../../../global'
// import { postData } from "@/api";
// import Loading from "../components/loading";

// export default function CalenderReminder({addReminder}){
//     let calender = new Date();
//     const [state,setState] = useState({editData:{},medicineData:[],month:calender.getMonth(),date:calender.getDate(),year:calender.getFullYear()})
//     const [edit, setEdit]=useState(false)
//     const [load,setLoad] = useState(false)
//     const {month,date,year,medicineData,editData}=state


//     const is_taken=(pill, taken_list, time)=>{
        
//         const dose_date = `${pill.start_date.getFullYear()}-${String(pill.start_date.getMonth()+1).length < 2 ? "0"+String(pill.start_date.getMonth()+1) : String(pill.start_date.getMonth()+1)}-${String(pill.start_date.getDate()).length < 2 ? "0"+String(pill.start_date.getDate()) : String(pill.start_date.getDate())}`
        
//         const verify = taken_list.filter(e=> e.pill_id == pill.pill_id && e.taken_date == dose_date && e.takenTime == time)
//         taken_list.map(e=>{
//             console.log(e.taken_date,dose_date,"verify");
//         })
//         if(verify.length > 0) 
//             return(true)
//         return(false)

//     }
   
    
//     useEffect(()=>{
//         const start = async ()=>{
//             setLoad(true)
//             let user_id = localStorage.getItem('uid')
//             try{
//             const res1 = await axios.get(`${global.BASE_URL}/${global.PILL}/${global.REMINDER}/${user_id}}`,{headers:{
//                 "authorization":localStorage.getItem('token')
//             }})     
//             if(res1.data.response){
//             const res2 = await axios.get(`${global.BASE_URL}/${global.PILL}/${global.TAKEN}/${user_id}}`,{headers:{
//                 "authorization":localStorage.getItem('token')
//             }})     
//                 // const list=[]
//                 // res2.data.response.reduce((a,c)=> !list.includes(c.pill_id) && list.push(c.pill_id),0)
//                 // console.log(list);
//                 const reminders=[]
//                 // console.log(res2.data.response);

//                 for (let pill of res1.data.response){
//                     // res1.data.response.filter(e=>e.pill_id == i).map(
//                         // pill => {
//                         let duration = pill.duration
//                         let dates=[]
//                         pill.start_date = new Date(pill.start_date)
//                         pill.taken_date = new Date(pill.taken_date)

//                         while(duration > 0){
//                             if(pill.schedule.includes(pill.start_date.getDay())){
//                             for(let i = 0; i < pill.reminderTime.split(' ').length && duration > 0 ; i++){
//                                 duration -= 1
//                                 const dose_date = `${pill.start_date.getFullYear()}-${pill.start_date.getMonth()+1}-${pill.start_date.getDate()}`
//                                 // const dose_date = `${pill.start_date.getFullYear()}-${String(pill.start_date.getMonth()+1).length < 2 ? "0"+String(pill.start_date.getMonth()+1) : String(pill.start_date.getMonth()+1)}-${String(pill.start_date.getDate()).length < 2 ? "0"+String(pill.start_date.getDate()) : String(pill.start_date.getDate())}`
//                                 // const taken_date = `${pill.taken_date.getFullYear()}-${pill.taken_date.getMonth()+1}-${pill.taken_date.getDate()}`

//                                 dates.push({"pill_id":pill.pill_id, "user_id":pill.user_id, "dose":pill.dose, "medicine":pill.medicine ,'date' :dose_date, "doctor":pill.doctor_name, "taken":is_taken(pill, res2.data.response, pill.reminderTime.split(' ')[i] ), 'time':pill.reminderTime.split(' ')[i]})
 
//                                 }
//                             }
//                             pill.start_date.setDate(pill.start_date.getDate() + 1)
//                         }
//                         reminders.push(...dates)

//                     // })
//                 }
//                 if(reminders.length>0){
//                     setState({...state,medicineData:[...reminders]})
//                     console.log(reminders.filter(e=>e.taken == true));
//                 }
//             }
//         }
//         catch(err){
//             console.log(err)
//         }
//         setLoad(false)
//         }

//         if(medicineData.length == 0){
//             start()
//     }
// },[medicineData])

//     const dateObj = {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday" }
//     const monthObj= {0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December" }

//     const Schedule=({data})=>{
//         return(
//             <>
//             {/* {load && <Loading/>} */}
//                 <div className="my-3 active:opacity-75 active:bg-slate-100 w-full bg-white flex items-center justify-between p-2 px-5 rounded-xl" onClick={()=>{setState({...state,editData:data});setEdit(!edit)}}>
//                     <div className="flex gap-3 items-center">
//                         <svg className={data.taken ? "stroke-0 stroke-green-500 fill-green-500 h-[2rem] w-[2rem]" : "stroke-0 stroke-red-500 fill-red-500 h-[2rem] w-[2rem]"} width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M16.3978 11.2388L16.5388 11.0972C16.499 11.0528 10.5876 5.1444 8.7768 3.3348C8.7484 3.3064 8.7132 3.2882 8.6758 3.2804C8.002 2.7696 7.2008 2.5 6.353 2.5C4.2284 2.5 2.5 4.228 2.5 6.352C2.5 7.2418 2.8102 8.1096 3.3866 8.8098L11.1574 16.5916C11.8574 17.201 12.7546 17.5368 13.6838 17.5368C15.8084 17.5368 17.5368 15.8088 17.5368 13.6848C17.5368 12.7302 17.185 11.814 16.5464 11.105L16.3978 11.2388ZM2.9 6.352C2.9 4.4486 4.449 2.9 6.353 2.9C7.1364 2.9 7.8758 3.157 8.4908 3.643C8.5096 3.6578 8.5306 3.6688 8.5526 3.6762C8.8658 3.9892 10.378 5.5006 11.98 7.1022L7.1092 11.9728L3.6826 8.5416C3.1778 7.927 2.9 7.1494 2.9 6.352ZM13.6838 17.1368C12.8512 17.1368 12.0474 16.836 11.4302 16.2994L7.392 12.2558L12.2628 7.385C14.2076 9.3292 16.189 11.3106 16.2482 11.3722L16.2524 11.3766C16.8226 12.0114 17.1366 12.831 17.1366 13.685C17.1368 15.5882 15.5878 17.1368 13.6838 17.1368Z" strokeWidth="0.6"/>
//                             <path d="M12.7983 9.9305C12.7231 9.8499 12.5963 9.8457 12.5155 9.9211C12.4349 9.9965 12.4307 10.1231 12.5061 10.2039L14.1957 12.0692C15.1915 13.066 15.1915 14.5686 14.1957 15.5642C14.1175 15.6424 14.1175 15.7688 14.1957 15.847C14.2347 15.886 14.2859 15.9056 14.3371 15.9056C14.3883 15.9056 14.4395 15.886 14.4785 15.847C15.6163 14.7092 15.6163 12.9256 14.4831 11.7912L12.7983 9.9305Z" strokeWidth="0.6"/>
//                         </svg>
//                         <div className={data.taken ?"text-green-500":"text-red-500"}>
//                             <p className="font-medium">{data.medicine}</p>
//                             <p>{data.time}</p>
//                         </div>
//                     </div>
//                     <div className="flex gap-2">
//                         <svg className={data.taken ?"stroke-0 stroke-green-500 fill-green-500 h-[1.6rem] w-[1.6rem]":"stroke-0 stroke-red-500 fill-red-500 h-[1.8rem] w-[1.8rem] "} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M22.5204 17.2455L22.5106 17.213L20.4993 11.2451C20.2625 10.4326 20.1424 9.59068 20.1427 8.74442C20.1427 4.24722 16.497 0.601562 11.9998 0.601562C7.50261 0.601562 3.85695 4.24722 3.85695 8.74442C3.85784 9.57957 3.74105 10.4107 3.51006 11.2133L1.47923 17.2455C1.33568 17.7377 1.43224 18.2686 1.7398 18.6787C2.04736 19.0888 2.53003 19.3302 3.04264 19.3302H7.92836C7.92836 21.5787 9.75123 23.4016 11.9998 23.4016C14.2484 23.4016 16.0712 21.5787 16.0712 19.3302H20.957C21.4695 19.3302 21.9522 19.0888 22.2598 18.6787C22.5674 18.2686 22.6639 17.7377 22.5204 17.2455ZM11.9998 21.773C10.6506 21.773 9.55693 20.6793 9.55693 19.3302H14.4426C14.4426 20.6793 13.349 21.773 11.9998 21.773ZM15.2667 17.7113C15.2426 17.7101 15.2184 17.7101 15.1942 17.7113L8.95272 17.7219C8.86753 17.7081 8.78064 17.7081 8.69541 17.7219L3.03286 17.7317L5.06287 11.7003C5.34329 10.74 5.4856 9.74475 5.48552 8.74442C5.48552 5.14668 8.40206 2.23013 11.9998 2.23013C15.5975 2.23013 18.5141 5.14668 18.5141 8.74442C18.5146 9.75636 18.6602 10.763 18.9465 11.7336L20.9569 17.7016L15.2667 17.7113Z"/>
//                         </svg>
//                     {data.taken && <Image src={Check} alt="bell" className="stroke-[12px] stroke-red-500 fill-red-500"/>}
//                     </div>
//                 </div> 
//             </>
//         )
//     }

//     const Dates=({month,year})=>{
//         let dates = 1
//         let arr=[]
//         while( Boolean(new Date(`${month} ${dates}, ${year}`).getDate()) ){  
//             if(new Date(`${month} ${dates}, ${year}`).getDate() > arr[arr.length-1] ||arr.length == 0 ){  
//                 if(dates==1){
//                     arr.push(...' '.repeat(new Date(`${month} ${new Date(`${month} ${dates}, ${year}`).getDate()}, ${year}`).getDay()).split(""))
//                 }
//                 arr.push(new Date(`${month} ${dates}, ${year}`).getDate())
//             }
//             dates+=1
//         }
//         return(
//             <>
//             <ul className="grid grid-cols-7 gap-y-3">
//                 {arr.map((elem,index)=>
//                     <li key={index} onClick={()=>{elem!=" " && setState({...state,date:elem})}} className={(date==elem && monthObj[state.month] == month && year==state.year) ? 
//                         "flex justify-center items-center text-sm font-semibold border rounded-lg p-2 h-8 w-8 bg-blue-600 text-white ":
//                         "flex justify-center items-center text-sm font-semibold border rounded-lg p-2 h-8 w-8 bg-slate-100 "}>{elem}</li>
//                     )
//                 }
//             </ul>
//             </>
//         )
//     }

//     const handleClick=(num)=>{
//         ( (month+num)>=0 && (month+num)<=11 ) ?
//         setState({...state, 
//             month:new Date(`${monthObj[month+num]} 1, ${year}`).getMonth(),
//             year:new Date(`${monthObj[month+num]} 1, ${year}`).getFullYear(),
//         }) :
//         setState({...state,
//             month:new Date(`${monthObj[month+num>=12 ? 0 : 11 ]} 1, ${year+num}`).getMonth(),
//             year:new Date(`${monthObj[month+num>=12 ? 0 : 11 ]} 1, ${year+num}`).getFullYear(),
//         })
//     }
//     return(
//         <>
//         {load && <Loading/>}
//         <div className={edit ? "h-[90vh] overflow-hidden":""}>
//            {edit && <Edit data={editData} edit={setEdit} state={state} setState={setState}/>}
//         <div className="flex justify-between w-[90vw] pb-3">
//             <Link className="font-bold text-sm flex items-center gap-3" href='/Dashboard' >
//                 <Image src={Return} alt="back" />
//                 Medicine Reminder
//             </Link>
//             <Image src={Notification} alt="notify"/>
//         </div> 
//         <div className="relative min-h-[90vh] flex flex-col items-center gap-5">
//             <div className=" w-[90vw] rounded-xl  border-2 bg-white drop-shadow-lg">
//                 {state && <div className=" flex justify-around items-center p-2">
//                     <Image src={Previous} alt="<" className="w-[2rem]" onClick={()=>handleClick(-1)}/>
//                     <p className="text-md font-semibold">{monthObj[month]} {year}</p>
//                     <Image src={Next} alt=">" className="w-[2rem]" onClick={()=>handleClick(1)}/>
//                 </div>}
//                 <div>
//                 <ul className="grid grid-cols-7 pl-[4.5%] gap-y-3">
//                     <li className="text-sm font-semibold border rounded-lg p-2 w-8 text-center text-red-600">S</li>
//                     <li className="text-sm font-semibold border rounded-lg p-2 w-8 text-center">M</li>
//                     <li className="text-sm font-semibold border rounded-lg p-2 w-8 text-center">T</li>
//                     <li className="text-sm font-semibold border rounded-lg p-2 w-8 text-center">W</li>
//                     <li className="text-sm font-semibold border rounded-lg p-2 w-8 text-center">T</li>
//                     <li className="text-sm font-semibold border rounded-lg p-2 w-8 text-center">F</li>
//                     <li className="text-sm font-semibold border rounded-lg p-2 w-8 text-center">S</li>
//                 </ul>
//                 <ul className="pl-[4.5%] py-[4%]">
//                     <Dates month={monthObj[month]} year={year}/>
//                 </ul>
//                 </div>
//             </div>

//             <div className="min-h-[20vh] w-[90vw] pb-[5rem]">
                
//                 {   
//                     medicineData.length > 0 && medicineData.map(elem=>elem.date).includes(`${year}-${month+1}-${date}`) 
//                     ? 
//                     medicineData.filter(elem=>elem.date == `${year}-${month+1}-${date}`).map((elem,index) => <Schedule key={index} data={elem}/>)
//                     :
//                     <div className = "h-[30vh] flex flex-col justify-center items-center ">
//                         <Image src={Clock} alt='clock'/>
//                         <p className="text-blue-700 font-semibold">No schedule events</p>
//                     </div>
//                 }
//             </div>
//             <div className="w-screen absolute bottom-0 flex justify-center">
//                 <button className="font-semibold text-white text-center bg-blue-600 p-2 w-[70vw] rounded-[50px]" onClick={()=>addReminder(true)}>+ Scheduled Prescription</button>
//             </div>
//         </div>
//         </div>
//         </>
//     )
// }