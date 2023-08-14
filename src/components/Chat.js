import { Firestore } from 'firebase/firestore';
import React, {useState} from 'react';
import '../styles/Chat.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {auth, db} from '../firebase-config'

const Chat = ({room}) => {
  const [newMessage, setNewMessage] = useState("")

  const messageRef =  collection(db , "messages")


    


    const handleSubmit = async (e) => {
     e.preventDefault()
    if(!newMessage){
        return;
    }
      
     await  addDoc(messageRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user : auth.currentUser.displayName,
        room,

     })

     setNewMessage("")

     console.log(newMessage)
    
    }
 

  return (
    <div className='chat-app'>
        <form onSubmit={handleSubmit} className='new-message-form'>
        <input onChange={(e) => setNewMessage(e.target.value)} value={newMessage} className='new-message-input' type="text" placeholder="Type your message here..."   />
        <button type='submit' className='send-button'>Send</button>
        </form>

  
    </div>
  )
}

export default Chat