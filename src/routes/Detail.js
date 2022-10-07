import './../App.css';
import {useEffect, useState} from "react";
import data from "./../buildingData.js"

import Input from './../components/Input.js';

function Detail(){

    let [elements, setElements] = useState(data);

    let [count, setCount] = useState(0);

    function incrementCount(step, index) {

        let newData = [...elements];
        
        newData[index].value += step

        setElements(newData)
    }
    function decrementCount(step, index) {
        
        let newData = [...elements]
        newData[index].value -= step

        setElements(newData)
    }


    // function decrementCount(e) {
    //     count = count - e;
    //     setCount(count);
    //   }



    return(
        <>  
            <h4 id="title-detail"> Building Data</h4>
            <div id="title-line"></div>
            <div className="grid-container">
                <Input />
                <div id="building-type-div" className="grid-item">
                    <label for="type-select" className="label-box">Building type</label>
                    <div className="input-group">
                        <select name="building-type" id="building-type-select" className="select-box">
                            <option value="">select</option>
                            <option value="Multi-Unit">Multi-Unit Residential</option>
                            <option value="Detached">Detached Residential</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Institutional">Institutional</option>
                            <option value="Office">Office</option>
                            <option value="Retail">Retail</option>
                            <option value="Mixed-used-including">Mixed-used including residential</option>
                            <option value="Mixed-used-without">Mixed-used without residential</option>
                            <option value="Other">Other</option>
                        </select> 
                    </div>                
                </div>
                {
                    elements.map(function(a,i){
                        return(
                            <InputElement count = {count} incrementCount = {incrementCount} decrementCount = {decrementCount} elements = {a} i = {i}/>
                        )
                    })
                }

                <div className="grid-item">
                    <label for="type-select" className="label-box">Name of the meters</label>
                    <div className="input-group">
                        <input type="text" placeholder='TO-DO' name="quantity" className="text-input"/>
                    </div>                
                </div>
                <div id="building-type-div" className="grid-item">
                    <label for="type-select" className="label-box">Window draftyness</label>
                    <div className="input-group">
                        <select name="building-type" id="building-type-select" className="select-box">
                            <option value="">select</option>
                            <option value="Multi-Unit">Medium</option>
                            <option value="Detached">Tight</option>
                            <option value="Hotel">Leaky</option>                           
                        </select> 
                    </div>                
                </div>
            </div>
            {

            }


       
        </>

    )
}

function InputElement(props) {
    return(
      <div className="grid-item">
        <label for="floor-area" className="label-box">{props.elements.title}</label>
        <div>
            <div className="input-group">                   
                <input type="number" step="1" max="" value={props.elements.value + props.count} name="quantity" className="quantity-field"/>
                <input type="button" value="-"disabled={props.elements.value <=0}  className="button-minus button-click" data-field="quantity" 
                onClick={function(){
                    {props.decrementCount(props.elements.step , props.i)}
                }}/>
                <input type="button" value="+" className="button-plus button-click" data-field="quantity"
                onClick={function(){
                   {props.incrementCount(props.elements.step , props.i)}
                }}/>
            </div>
        </div>      
      </div>
    )
  }

export default Detail;