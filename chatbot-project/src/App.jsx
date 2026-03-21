import { useState, useEffect} from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import { chatbot } from 'supersimpledev';

import './App.css'

function App(){
        /* const [chatMessages,setChatMessages]= React.useState([{
          message: 'hello chatbot',
          sender: 'user',
          id:'id1'
        },
        {
          message:'Hello! How can I help you?',
          sender:'robot',
          id:'id2'
        },
        {
          message:'can you get me todays date',
          sender:'user',
          id:'id3'
        },
        {
          message:'Today is March 9',
          sender:'robot',
          id:'id4'
        }]);
        */

        //const[chatMessages,setChatMessages]=array
       // const chatMessages =array[0]
       //const setChatMessages= array[1]
      const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages'))||[]);

      useEffect(()=>{
        chatbot.addResponses({
          'goodbye':'Goodbye.Have a great day!',
          'give me a unique Id':function(){
            return `sure here is the unique ID: ${crypto.randomUUID()}`
          }
        });
      },[]);

      useEffect(()=>{
        localStorage.setItem('messages',JSON.stringify(chatMessages))
      }, [chatMessages]);

        return (
         
        <div className="app-container">
          {chatMessages.length ===0 &&
            (
            <p className="welcome-message">
              Welcome to My Chatbot Project Send your message using the textbox below. 
            </p>
          )}
            
              <ChatMessages 
              chatMessages={chatMessages}/>
                <ChatInput
              chatMessages = {chatMessages}
              setChatMessages={setChatMessages}
              />

            </div>
        );
      }


export default App
