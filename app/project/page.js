'use client'
import React from "react";
import Navigator from "../components/navigatior.js";
import List from "../components/list.js";
import {ProjectList,HobbyList} from "../../public/data/projectData"


export default function Project(){
    return(<>
    <div className="flex justify-center">
    <Navigator page={"/project"}/>
    </div>

    <div className="p-10">
        <h1 className="text-5xl pt-10 font-semibold italic">My Projects</h1>

        {ProjectList.map((elem,index)=>
            <List key={index} data={elem} index={index} />
        )}


        <h1 className="text-5xl pt-10 font-semibold italic">My Hobby Projects</h1>
        {HobbyList.map((elem,index)=>
            <List key={index} data={elem} index={index} />
        )}

    </div>
    </>)
}