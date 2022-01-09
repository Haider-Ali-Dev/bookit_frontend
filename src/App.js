import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';

function App() {
  const dispatch = useDispatch();
  const route = useSelector((state) => state.route.route)
  const name = useSelector((state) => state.userData.name)
  const isSignedIn = useSelector((state) => state.userGlobal.isUserSignedIn)

  return (
    <div>
      <Navbar/>
      {
        route === "home" && isSignedIn ? <div>
          <Home/>
          </div> : <div>
            { route === "signin" ? <SignIn/> : <Register/> }
          </div>
      }
    </div>
  );
}

export default App;
