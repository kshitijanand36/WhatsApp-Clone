
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,  Switch , Route} from "react-router-dom";
import { useState } from 'react';
import Login from "./Login";
function App() {

  const [user, setUser] = useState(null);


  return (
    <div className="App">
      {user ? (
      <div class = "app__body">
        <Router>
          <Sidebar/>
          <Switch>
            <Route path = "/rooms/:roomId">
              <Chat/>
            </Route>

            <Route path = "/">
            </Route>
          </Switch>
        </Router>
      </div>)
      :
      (<Login />)}
    </div>
  );
}

export default App;
