import React, {Fragment, useState} from "react";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const InputField =(props)=>{

    const [input,setInput]=useState("");
    
    const updateInput=(evt)=>{
        setInput(evt.target.value) ;

    }
    
    const submitTask= () =>{
        if(input){
            props.addTask(input);
        };
            setInput("");
        
    }

    return(
        <Fragment>
        <InputGroup>
        <Input  type="text" value={input} onChange={updateInput}  placeholder="Enter task"/>
        <InputGroupAddon  addonType="append">
        <Button color="secondary" onClick={submitTask}>+</Button>
        </InputGroupAddon>
        </InputGroup>
            {/* <input type="text" value={input} onChange={updateInput}  placeholder="Enter task"></input>
            <button onClick={submitTask}>+</button> */}
        </Fragment>
    )
}
export default InputField;
