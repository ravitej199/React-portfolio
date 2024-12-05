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
import shg from '../../public/shg.png'
import ayuci1 from '../../public/ayuci1.png'
import ayuci2 from '../../public/ayuci2.png'
import smart from '../../public/smart1.png'
import asset from '../../public/asset.png'
import mybio1 from '../../public/mybio1.png'
import mybio2 from '../../public/mybio2.png'
import mybio3 from '../../public/mybio3.png'
import mybio4 from '../../public/mybio4.png'




export default function Project(){
    const userAgent = navigator.userAgent.toLowerCase();
    const iPhone = (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod'))
    const android = userAgent.includes('android')
    const bioBackupApp = iPhone ? "https://apps.apple.com/in/app/mybiobackup/id6459410069" : android ? "https://play.google.com/store/apps/details?id=project.sathwik.mybiobackup&pcampaignid=web_share" : "https://mybiobackup.com/"

    return(<>
    <div className="flex justify-center">
        <div className="flex h-14 justify-center gap-24 p-20 items-center w-[50vw]">
        <Link href='/' className='font-semibold text-2xl hover:text-blue-700 hover:border-b-4 hover:border-blue-700'>Home</Link>
        <Link href='/about' className='font-semibold text-2xl hover:text-blue-700 hover:border-b-4 hover:border-blue-700'>About</Link>
      </div>
    </div>

<div className="p-10">
    <h1 className="text-5xl pt-10 font-semibold italic">My Projects</h1>

    <p className="text-2xl p-10 font-semibold"><a className="underline hover:text-blue-700" href="https://www.ayuci.com/">AYUCI</a></p>
    <div className="  p-10 max-md:!block flex justify-around">
        <div className=" min-w-[50vw]">
            <Image src={ayuci1} width={600} height={100} alt="game"  className="rounded-[10px]"/>
            {/* <Image src={Memory2} width={600} height={100} alt="game"/> */}
        </div>
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-justify font-medium">
            AYUCI is a hospital management  software solution, built entirely on the innovative SaaS platform.
            I was enterested with developing the back-end(GoLang) and Database. 
            Material UI and CSS have been used to create a user
            interface. On the Devops side, to deploy backend i was managing AWS
            services like EC2 for computing resources, RDS for database management,
            Caddy Server for web serving (which automatically implements HTTPS at no
            SSL certificate cost). S3 bucket for scalable storage has also been
            implemented. for this application Azile managment system has been
            managed.</p>
        </div>
    </div>

    <p className="text-2xl p-10 font-semibold"><a className="underline hover:text-blue-700" href="https://mysmartshala.com/">My Smartshala</a></p>
    <div className=" px-10 max-md:!block flex justify-around">
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-left text-justify font-medium">
            My Smartshala is a ERP, built entirely on the innovative SaaS platform.
            I was enterested with developing the front-end. 
            Material UI and CSS have been used to create a user
            interface. S3 bucket for scalable storage of test report has also been
            implemented. for this application Azile managment system has been
            managed.</p>
        </div>
        <div className="min-w-[50vw]">
            {/* <Image src={scraping1} width={600} height={100} alt="game" className="float-right"/> */}
            <Image src={smart} width={600} height={100} alt="game" className="float-right rounded-[10px]"/>
        </div>
    </div>

    <p className="text-2xl p-10 font-semibold"><a className="underline hover:text-blue-700" href="https://samarthmeditech.com">Asset Management</a></p>
    <div className="p-10 max-md:!block flex justify-around">
        <div className=" min-w-[50vw]">
            <Image src={asset} width={600} height={100} alt="game" className="rounded-[10px]"/>
            {/* <Image src={Memory2} width={600} height={100} alt="game"/> */}
        </div>
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-justify font-medium">
            Asset management is a software solution for assigning, maintaining, transporting, tracking and 
            disposing of organization assets in the most cost-effective manner.
            I was enterested with developing the back-end(GoLang) and Database. 
            Material UI and CSS have been used to create a user
            interface. On the Devops side, to deploy backend i was managing AWS
            services like EC2 for computing resources, RDS for database management,
            Caddy Server for web serving (which automatically implements HTTPS at no
            SSL certificate cost). S3 bucket for scalable storage has also been
            implemented. for this application Azile managment system has been
            managed.
            </p>
        </div>
    </div>

    <p className="text-2xl p-10 font-semibold">
        <a className="underline hover:text-blue-700" 
        // href="https://play.google.com/store/apps/details?id=project.sathwik.mybiobackup&pcampaignid=web_share"
        // href="https://mybiobackup.com/"
        // href="https://apps.apple.com/in/app/mybiobackup/id6459410069"
        href ={bioBackupApp}
        target="_blank"
        >
        My Biobackup
        </a>
    </p>
    <div className=" px-10 max-md:!block flex justify-around">
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-left text-justify font-medium">
            My Biobackup is a Personal Health Record(PHR) app that helps you to store & manage your health 
            reports and body vitals. With Eka care you can add lab reports, body vitals such as Blood Pressure(BP), 
            Blood sugar level & more. I was entrusted with developing front-end using NextJS & Tailwind CSS
            Our team implemented S3 bucket for scalable storage of test report has also been
            implemented. for this application Azile managment system has been
            managed.</p>
        </div>
        <div className="min-w-[50vw] flex justify-end gap-2">
            {/* <Image src={scraping1} width={600} height={100} alt="game" className="float-right"/> */}
            <Image src={mybio4} width={200} height={100} alt="game" className="rounded-[10px]"/>
            <Image src={mybio1} width={200} height={100} alt="game" className="rounded-[10px]"/>
            <Image src={mybio2} width={200} height={100} alt="game" className="rounded-[10px]"/>
            <Image src={mybio3} width={200} height={100} alt="game" className="rounded-[10px]"/>
        </div>
    </div>

    <h1 className="text-5xl pt-10 font-semibold italic">My Hobby Projects</h1>

    <p className="text-2xl p-10 font-semibold">Self Help Group</p>
    <div className=" px-10 max-md:!block flex justify-around">
        <div className="min-w-[50vw]">
            <Image src={shg} width={600} height={100} alt="game" className="rounded-[10px]"/>
            {/* <Image src={pet2} width={600} height={100} alt="game"/> */}
        </div>
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-justify font-medium">
                This Is a website to help create a self help group for rural regions,
                it is able help small business owners to lend money by grow other small scale business.
                It keeps track of money lent to the users on the recommendation of four or more users.
                This Project is Done By using Python, Falsk and ejs, sqlAlchemy</p>
        </div>
    </div>

    <p className="text-2xl p-10 font-semibold">Web Scraping</p>
    <div className=" px-10 max-md:!block flex justify-around">
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-left text-justify font-medium">
                This Is Web scraping website used to obtain large amounts of 
                data from websites. Most of this data is unstructured data in an HTML 
                format. Web Scrapers can extract all the data on particular sites or the
                specific data that a user wants. Ideally, it’s best if you specify the
                data you want so that the web scraper only extracts that data quickly.     
                This Project is Done By using Python, Jinja template , Beautiful Soup , and Jquery</p>
        </div>
        <div className="min-w-[50vw]">
            {/* <Image src={scraping1} width={600} height={100} alt="game" className="float-right"/> */}
            <Image src={scraping2} width={600} height={100} alt="game" className="float-right rounded-[10px]"/>
        </div>
    </div>

    <p className="text-2xl p-10  font-semibold">Pet Super care</p>
    <div className=" px-10 max-md:!block flex justify-around">
        <div className="min-w-[50vw]">
            <Image src={pet1} width={600} height={100} alt="game" className="rounded-[10px]"/>
            {/* <Image src={pet2} width={600} height={100} alt="game"/> */}
        </div>
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-justify font-medium">
                This Is a super website for pets with a pet Clinic Appointment system ,
                which is able to store legacy data for multiple client pet owners with multiple pet 
                and also capable of scheduling appointments from both doctor and client side.
                This Project is Done By using Html , Css and Javascript, NodeJs, MongoDB</p>
        </div>
    </div>

    <p className="text-2xl p-10 font-semibold">Drag and Drop Game</p>
    <div className=" px-10 max-md:!block  flex justify-around">
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-justify font-medium">
                This Is Game in which the player has to use their imagination to put together creative shapes and 
                come up with a design this project is in my github , Based on your creativity the sky is the limit 
                The Game This Project is Done By using Html , Css and Javascript</p>
        </div>
        <div className="min-w-[50vw]">
            {/* <Image src={dng2} width={600} height={100} alt="game" className="float-right"/> */}
            <Image src={dng1} width={600} height={100} alt="game" className="float-right rounded-[10px]"/>
        </div>
    </div>

    <p className="text-2xl p-10 font-semibold">Memory Game</p>
    <div className="  p-10 max-md:!block flex justify-around">
        <div className=" min-w-[50vw]">
            <Image src={Memory1} width={600} height={100} alt="game" className="rounded-[10px]"/>
            {/* <Image src={Memory2} width={600} height={100} alt="game"/> */}
        </div>
        <div className="flex items-center">
            <p className="hover:text-black hover:bg-white/40 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm bg-white/30 p-5 rounded-xl text-xl text-gray-800 text-justify font-medium">
                This Is Challenging Game Containing 4x4 Boxes That Highlights A Red Color 
                In Each Random Box For Certain Seconds When User Click All Colored Boxes The 
                Color Of Box Will Be Red And After Picking All Colored Boxes User Will Be Win 
                The Game This Project is Done By using Html , Css and Javascript</p>
        </div>
    </div>

</div>
    </>)
}