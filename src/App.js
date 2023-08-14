
import './App.css';
import Auth from './components/Auth';
import { useRef, useState } from 'react';
import Cookies from 'universal-cookie';
import Chat from  './components/Chat'


const cookies = new Cookies()


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null)

  const userRefInput = useRef(null)

  if (!isAuth) {
    return (

      <div className="App">
        <Auth setIsAuth={setIsAuth}/>

      </div>
    );
  }


  return (
    <div>
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
    </div>
  )





}

export default App;
