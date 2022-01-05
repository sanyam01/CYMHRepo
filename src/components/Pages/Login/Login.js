import React, {Fragment} from "react";
import LoginForm from "../../Forms/LoginForm";
import LoginFormMaterial from "../../Forms/LoginFormMaterial";

const Login = () => {

    const onAddMessageCall = (props) => {

        console.log("I am in onAddMessage");
      };

    return <Fragment> 
        <LoginFormMaterial onAddMessage = {onAddMessageCall}/>
        


    </Fragment>

};

export default Login;