import React, {Fragment} from "react";
import LoginForm from "../../Forms/LoginForm";

const Login = () => {

    const onAddMessageCall = (props) => {

        console.log("I am in onAddMessage");
      };

    return <Fragment> 
        <LoginForm onAddMessage = {onAddMessageCall}/>

    </Fragment>

};

export default Login;