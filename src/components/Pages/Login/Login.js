import React, { Fragment } from "react";
import LoginForm from "../../Forms/LoginForm";
import LoginFormMaterial from "../../Forms/LoginFormMaterial";

const Login = () => {
  const onSubmitHandler = (props) => {
    console.log("I am in onAddMessage");
  };

  return (
    <Fragment>
      <LoginFormMaterial submitHandler={onSubmitHandler} />
    </Fragment>
  );
};

export default Login;
