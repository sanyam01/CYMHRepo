import React, {useCallback} from "react";
import { Fragment } from "react";
import classes from "./Contact.module.css";
import ContactInfo from "./ContactInfo";
import BasicForm from "../../Forms/BasicForm";

const Contact = () => {

  const addMessageHandler = useCallback(async (message) => {
    console.log("I am here");

    const response = await fetch('https://mywebsite-96700-default-rtdb.firebaseio.com/messages.json', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    console.log(JSON.stringify(message));

  });

  return (
    <Fragment>
      <p className={classes.header}> Contact Us </p>
      <div className={classes.rowC}>

        <ContactInfo />

        <BasicForm onAddMessage={addMessageHandler} />
      </div>
    </Fragment>
  );
};

export default Contact;
