import React, {useState} from 'react';
import  ChatBot  from "react-simple-chatbot";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import './bot.css'

const Bot = () => {

    const [popup, setPopup ] =useState(false);
    const handleClickOpen = () => {
        setPopup(!popup);
    }
   


    const steps = [

      {
  
        id: "Greet",
  
        message: "Hello, Welcome to StackOverflow",
  
        trigger: "Done",
  
      },
  
      {
  
        id: "Done",
  
        message: "Please enter your name!",
  
        trigger: "waiting1",
  
      },
  
      {
  
        id: "waiting1",
  
        user: true,
  
        trigger: "Name",
  
      },
  
      {
  
        id: "Name",
  
        message: "Hi {previousValue}, Please select your issue",
  
        trigger: "issues",
  
      },
  
      {
  
        id: "issues",
  
        options: [
  
          {
  
            value: "React",
  
            label: "React",
  
            trigger: "React",
  
          },
  
          { value: "Angular", label: "Angular", trigger: "Angular" },
  
        ],
  
      },
  
      {
  
        id: "React",
  
        message:
  
          "Thanks for letting your React issue, Our team will resolve your issue ASAP",
  
        end: true,
  
      },
  
      {
  
        id: "Angular",
  
        message:
  
          "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
  
        end: true,
  
      },
  
    ]; 
  

  return (
    <div className='bot-container'>
      <div className='chat_wrap'>
      <FontAwesomeIcon icon={faRobot} alt='upvotes' className='chat_icon' onClick={handleClickOpen} />
      </div>
        {popup ?
        <div className='bot'>
        <ChatBot steps={steps} />
    </div> : ""}
    </div>
  )
}

export default Bot
