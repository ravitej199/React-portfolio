'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Memory1 from '../../public/memory1.png'
import Memory2 from '../../public/memory2.png'
import scraping1 from '../../public/webscraping1.png'
import scraping2 from '../../public/webscraping2.png'
import pet1 from '../../public/pet2.png'
import pet2 from '../../public/pet1.png'
import dng1 from '../../public/dng2.png'
import dng2 from '../../public/dng1.png'

export default function Project(){
    return(<>
    <div className="flex justify-center">
        <div className="flex h-14 justify-center gap-24 p-20 items-center w-[50vw]">
        <Link href='/' className='font-semibold text-2xl hover:text-blue-700 hover:border-b-4 hover:border-blue-700'>Home</Link>
        <Link href='/about' className='font-semibold text-2xl hover:text-blue-700 hover:border-b-4 hover:border-blue-700'>About</Link>
      </div>
    </div>
    <h1 className="text-5xl text-center pt-10 font-semibold italic">My Projects</h1>

<div>
    <div className="p-24 flex justify-around">
        <div className="40vw relative top-0">
            <Image src={Memory1} width={600} height={100} alt="game"/>
            <Image src={Memory2} width={600} height={100} alt="game"/>
        </div>
        <div className=" text-center w-[40vw] ">
            <p className="text-2xl text-center p-10 font-semibold">Memory Game</p>
            <p className="text-xl text-gray-500 text-left p-10 font-medium">
                This Is Challenging Game Containing 4x4 Boxes That Highlights A Red Color 
                In Each Random Box For Certain Seconds When User Click All Colored Boxes The 
                Color Of Box Will Be Red And After Picking All Colored Boxes User Will Be Win 
                The Game This Project is Done By using Html , Css and Javascript</p>
        </div>
    </div>
    <div className="p-24 flex justify-around">
        <div className=" text-center w-[40vw]">
            <p className="text-2xl text-center p-10 font-semibold">Web Scraping</p>
            <p className="text-xl text-gray-500 text-left p-10 font-medium">
                This Is Web scraping website used to obtain large amounts of 
                data from websites. Most of this data is unstructured data in an HTML 
                format. Web Scrapers can extract all the data on particular sites or the
                 specific data that a user wants. Ideally, it’s best if you specify the
                  data you want so that the web scraper only extracts that data quickly.     
                  This Project is Done By using Python, Jinja template , Beautiful Soup , and Jquery</p>
        </div>
        <div className="40vw">
            <Image src={scraping1} width={600} height={100} alt="game"/>
            <Image src={scraping2} width={600} height={100} alt="game"/>
        </div>
    </div>
    <div className="p-24 flex justify-around">
        <div className="40vw relative top-0">
            <Image src={pet1} width={600} height={100} alt="game"/>
            <Image src={pet2} width={600} height={100} alt="game"/>
        </div>
        <div className=" text-center w-[40vw] ">
            <p className="text-2xl text-center p-10 font-semibold">Pet Super care</p>
            <p className="text-xl text-gray-500 text-left p-10 font-medium">
                This Is is a super website for pets with a pet Clinic Appointment system ,
                which is able to store legacy data for multiple client pet owners with multiple pet 
                and also capable of scheduling appointments from both doctor and client side.
                This Project is Done By using Html , Css and Javascript, NodeJs, MongoDB</p>
        </div>
    </div>
    <div className="p-24 flex justify-around">
        <div className=" text-center w-[40vw]">
            <p className="text-2xl text-center p-10 font-semibold">Drag and Drop Game</p>
            <p className="text-xl text-gray-500 text-left p-10 font-medium">
                This Is Game in which the player has to use their imagination to put together creative shapes and 
                come up with a design this project is in my github , Based on your creativity the sky is the limit 
                The Game This Project is Done By using Html , Css and Javascript</p>
        </div>
        <div className="40vw">
            <Image src={dng2} width={600} height={100} alt="game"/>
            <Image src={dng1} width={600} height={100} alt="game"/>
        </div>
    </div>
</div>
    </>)
}