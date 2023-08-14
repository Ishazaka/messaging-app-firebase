
import './App.css';
import Auth from './components/Auth';
import { useRef, useState } from 'react';
import Cookies from 'universal-cookie';
import Chat from  './components/Chat';
import {signOut} from 'firebase/auth'
import { auth } from './firebase-config';


const cookies = new Cookies()


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null)

  const userRefInput = useRef(null)


  const signUserOut = async () => {
   await signOut(auth);
    cookies.remove('auth-token');
    setRoom(null);
    setIsAuth(false) 
  }


  if (!isAuth) {
    return (

      <div className="App">
        <Auth setIsAuth={setIsAuth}/>

      </div>
    );
  }


  return (
    <>
      {room ?
       (
      <Chat room={room}/>
        )
        :
        (
          <div className='room'>
            <label>Enter Room Name</label>
            <input ref={userRefInput}/>
            <button onClick={() => setRoom(userRefInput.current.value)}> Enter Chat</button>
          </div>
        )}
        <div className='sign-out'>
        <button onClick={signUserOut}>Sign out</button>
        </div>
       
    </>
  )





}

export default App;
