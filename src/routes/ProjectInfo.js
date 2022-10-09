import './../App.css';
import {useEffect, useState} from "react";
import projectInfodata from "./../data/projectInfo.js";

import Input from './../components/Input.js';

function Demo(){

    let [projectInfoElements, setProjectInfoElement] = useState(projectInfodata);
    


    return(
         
        <div className='px-5'>
            <h4 className='text-3xl py-5'> Project Information & Parameters</h4>
            <div className='border-t-black border-2'></div>
            {/* <div className="grid-container"> */}
            <div className="grid grid-cols-3 gap-3">
                {
                    projectInfoElements.map(function(a,i){
                        return(
                            <Input buildingElements = {a} i = {i}/>
                        )
                    })
                }                
            </div>

        </div>
                   
        

    )
}


export default Demo;