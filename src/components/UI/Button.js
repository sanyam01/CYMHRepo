import React from 'react';
import classes from './Button.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Button = (props) => {

    const [buttonClick, setButtonClick] = useState(false);

    const setButtonHandler  = () => {


        setButtonClick ( (prevState) => { 
            return (prevState ? false : true);
        });

        console.log(buttonClick)
           
    } ;

    const linkName  = '/' + props.id;

    return (<NavLink activeClassName = {classes.active} to = {linkName}> <button className = {classes.button} onClick = {setButtonHandler}> {props.name} </button></NavLink>)


};
 
export default Button;