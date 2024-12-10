import { options } from "./navigatior"
export default function Footer(){
    const contact = {
        phone:"9945575310",
        email:"rakeshmirji@gmail.com",
        address:"Unkal, Hubballi",
        state:"Karnataka"
    }
    
    const name =`Rakesh Mirji`
    const about =`I am a Software Engineer from Hubbali, Karnataka, specializing in creating web applications with unique designs and excellent performance.`
    return(
        <>
        <div className="max-md:hidden w-full font-sm bg-black/60">
            <div className="flex justify-around ">
                <div className="max-w-[25vw] font-semibold">
                    <p>{name}</p>
                    <p>{about}</p>
                </div>
                <div>
                    <p className="font-semibold">Useful Links</p>
                    <div className="flex flex-col justify-center items-center font-medium gap-2">
                    {options.map((elem,index)=>
                        <a key={index} href={elem.link} className='hover:text-violet-300'>{elem.name}</a>
                    )}
                    </div>
                </div>
                <div className=" p-2">
                    <p className="font-semibold">Contact Info</p>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                    <p>{contact.address}</p>
                    <p>{contact.state}</p>
                </div>
            </div>
            <p>Copyright ©2024 Rakesh Mirji.All Rights Reserved | Designed by Rakesh</p>
        </div>
        </>
    )
}