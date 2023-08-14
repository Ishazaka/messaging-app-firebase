import React, {useState, useEffect} from 'react';
import '../styles/Chat.css'
import { addDoc, collection, serverTimestamp , onSnapshot, query, where, orderBy } from 'firebase/firestore';
import {auth, db} from '../firebase-config'

const Chat = ({room}) => {
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState([])

  const messageRef =  collection(db , "messages")

useEffect(() => {
  const querymessages =  query(messageRef , where("room", "==" , room) , orderBy('createdAt'))
  const unsubscribe =  onSnapshot(querymessages, (snapshot) => {
    let messages = []
  snapshot.forEach((doc) => {
    messages.push({...doc.data() , id: doc.id})
  })
  setMessages(messages);

  return () => unsubscribe();

  }  );
}, [])

    


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
<div className='header'>
    <h1>Welcome to {room.toUpperCase()}</h1>
</div>

       <div className='messages'> {messages.map((message) => (
        <div className='message' key={message.id}>  <span className='user' >{message.user} </span> { message.text} </div>
        
           
        ))}
         </div>
        <form onSubmit={handleSubmit} className='new-message-form'>
        <input onChange={(e) => setNewMessage(e.target.value)} value={newMessage} className='new-message-input' type="text" placeholder="Type your message here..."   />
        <button type='submit' className='send-button'>Send</button>
        </form>

  
    </div>
  )
}

export default Chat