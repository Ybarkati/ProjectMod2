import { useState } from 'react'
import Answer from '../components/Answer';
import AnswerInput from '../components/AnswerInput';
import { useTool } from "../components/ContextTools"

const API_KEY = "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";
const systemMessage = { 
    "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
  }
  
  function Help() {
    const {Open}=useTool()

    const [messages, setMessages] = useState([
      {
        message: "Hello, I'm ChatGPT! Ask me anything!",
        sentTime: "just now",
        sender: "ChatGPT"
      }
    ]);
    const [isTyping, setIsTyping] = useState(false);
  
    const handleSend = async (message) => {
      const newMessage = {
        message,
        direction: 'outgoing',
        sender: "user"
      };
  
      const newMessages = [...messages, newMessage];
      
      setMessages(newMessages);
  
      // Initial system message to determine ChatGPT functionality
      // How it responds, how it talks, etc.
      setIsTyping(true);
      await processMessageToChatGPT(newMessages);
    };
  
    async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
      // Format messages for chatGPT API
      // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
      // So we need to reformat
  
      let apiMessages = chatMessages.map((messageObject) => {
        let role = "";
        if (messageObject.sender === "ChatGPT") {
          role = "assistant";
        } else {
          role = "user";
        }
        return { role: role, content: messageObject.message}
      });
  
  
      // Get the request body set up with the model we plan to use
      // and the messages which we formatted above. We add a system message in the front to'
      // determine how we want chatGPT to act. 
      const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
          systemMessage,  // The system message DEFINES the logic of our chatGPT
          ...apiMessages // The messages from our chat with ChatGPT
        ]
      }
  
      await fetch("https://api.openai.com/v1/chat/completions", 
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]);
        setIsTyping(false);
      });
    }
  return (
        <div className='ChatBot' style={{marginLeft:Open? "160px":"80px",transition:" margin 300ms"}}>
          <div className='AnswerAndInput'>       
            <div className='AnswerList'>
              {messages.map((message, i) => {
                console.log(message)
                return <Answer key={i} model={message} />
              })}
               <div className='ChatTyping'>
               {isTyping ? "typing..." : null}
               </div>
            </div>
            <AnswerInput placeholder="Type message here" onSubmit={handleSend} />        
          </div>
        </div>
  )
}

export default Help
