import './../App.css';
import {useEffect, useState} from "react";
// import data from "./../buildingData.js"

function Input(props){


    return(
        <div className="text-xl">
            {/* <label for="floor-area" className="label-box">{props.elements.title}</label> */}
            {/* <label className="label-box">123</label> */}
            <label className="">{props.buildingElements.title}</label>
           
            <div >
                <input className='w-full rounded-lg bg-gray-100' type={props.buildingElements.type}/>
            </div>      
        </div>
    )
}

export default Input;