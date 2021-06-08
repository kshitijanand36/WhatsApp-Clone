
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      
      <div class = "app__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
