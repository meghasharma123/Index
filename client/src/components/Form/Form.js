import React from "react";
import useStyle from './styles';

const Form = () =>{
    const classes = useStyle();

    return(
        <div>
            <h1 className={classes.form}>Form</h1>
        </div>
    );
}

export default Form;