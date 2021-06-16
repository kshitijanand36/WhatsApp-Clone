
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,  Switch , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
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
      </div>
    </div>
  );
}

export default App;
