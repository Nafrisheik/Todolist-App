import React from "react";
import { Button, ButtonGroup } from 'reactstrap';
import { Fragment } from 'react';

const List=(props)=>{
    return(
        
        <ul>
            {props.items.map((each,index)=>{
                
                const clickDelete=()=>{
                    props.deleteTask(index);
                }
                const addPriority=(evt)=>{
                    props.setPriority(evt.target.value,index);
                    console.log(evt.target.value);
                }
                const addStatus=(evt)=>{
                    props.setStatus(evt.target.value,index);
                }
                return(
                    <Fragment key={index}>
                        <li >
                        <div className="row">
                        <div className="column left">{each.name}  &emsp; &emsp; &emsp; &emsp; &emsp; </div>
                        
                        <div className="switch-field column middle">
		<input type="radio" id={index+"1"} onClick={addPriority} name={index} value="Low" />
		<label htmlFor={index+"1"} >Low</label>
		<input type="radio" id={index+"2"} onClick={addPriority} name={index} value="Medium" />
		<label htmlFor={index+"2"}>Medium</label>
		<input type="radio" id={index+"3"} onClick={addPriority} name={index} value="High" />
		<label htmlFor={index+"3"}>High</label>
	</div>
    {/* <h6>Select Status</h6> */}
	<div className="regular-field column right">
		<input type="radio" id={index+"4"} onClick={addStatus} name={index+"4"} value="Pending"/>
		<label htmlFor={index+"4"}>Pending</label>&emsp;
		<input type="radio" id={index+"5"} onClick={addStatus} name={index+"4"} value="Completed" />
		<label htmlFor={index+"5"}>Completed</label>&emsp;
		
	</div>
                         {/* <ButtonGroup>
                    <Button name={index} onClick={addPriority} value="High">High</Button>
                    <Button name={index} onClick={addPriority} value="Medium">Medium</Button>
                    <Button name={index} onClick={addPriority} value="Low">Low</Button>
                  </ButtonGroup>&emsp;*/}
                  <Button onClick={clickDelete}>-</Button> 
                            </div>
                    </li>
                    <br></br>
                    </Fragment>
                    
                    
                );
            })}
        </ul>
    );
};

export default List;