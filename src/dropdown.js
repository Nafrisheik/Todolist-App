import React, {Fragment, useState} from "react";
import {Label, Input,FormGroup } from 'reactstrap';

const Dropdown=(props)=>{
const[status,setStatus]=useState("");

const updateStatus=(evt)=>{
    setStatus(evt.target.value);
}


    return(
        <FormGroup>
        <Label for="typeSelect">Filter list</Label>
        <Input type="select" name="select" id="typeSelect" value={status} onChange={updateStatus}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>         
        </Input>
      </FormGroup>
    )
}

export default Dropdown;