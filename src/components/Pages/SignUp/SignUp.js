import React, { Fragment } from "react";
import SignUpForm from "../../Forms/SignUpForm";
import SignUpFormMaterial from "../../Forms/SignUpFormMaterial";
import AgeBox from "./AgeBox";

const SignUp = () => {
  return (
    <Fragment>
      <AgeBox />
      <SignUpFormMaterial />
    </Fragment>
  );
};

export default SignUp;
