import './../App.css';
import {useEffect, useState} from "react";
import buildingData from "./../buildingData2.js"

import Input from './../components/Input.js';

function Demo(){

    let [buildingElements, setBuildingElement] = useState(buildingData);
    


    return(
         
        <div className='px-5'>
            <h4 className='text-3xl py-5'> Building Data</h4>
            <div className='border-t-black border-2'></div>
            {/* <div className="grid-container"> */}
            <div className="grid grid-cols-3 gap-3">
                {
                    buildingElements.map(function(a,i){
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