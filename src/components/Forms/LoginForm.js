import classes from "./BasicForm.module.css";
import React, { useRef } from "react";

const LoginForm = (props) => {

  const nameRef = useRef("");
  const addressRef = useRef("");
  const orgRef = useRef("");
  const messageRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form has been submitted");

    const messageInfo = {

      name: nameRef.current.value,
      address: addressRef.current.value,
      organisation: orgRef.current.value,
      message: messageRef.current.value,
    };

    props.onAddMessage(messageInfo);
  };

  

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["control-group"]}>
        <div className={classes["form-control"]}>
          <label htmlFor="name"> Email address </label>
          <input type="text" id="name" />
        </div>


        <div className={classes["form-control"]}>
          <label htmlFor="address">Password</label>
          <input type="text" id="address" />
        </div>
        

        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
