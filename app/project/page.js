'use client'
import React from "react";
import Navigator from "../components/navigatior.js";
import List from "../components/list.js";
import {ProjectList} from "../../public/data/projectData"
import Image from "next/image.js";
import Bar from "../../public/Bar.svg"

export default function Project(){
    return(<>
    <div className="flex justify-center">
    <Navigator page={"/project"}/>
    </div>

    <div className="p-10 overflow-hidden">
        <div className="w-screen p-5 flex justify-between items-center ">
            <div className="w-1/4 max-md:hidden"></div>
            <h1 className="text-5xl pt-10 font-semibold">My Projects</h1>
            <Image src={Bar} className="max-md:hidden"/>
        </div>

        {ProjectList.map((elem,index)=>
            <List key={index} data={elem} index={index} />
        )}
    </div>
    </>)
}
