import './App.css';

import Detail from './routes/Detail.js';
import Demo from './routes/Demo.js';
import Input from './components/Input.js';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        
        
        <Route path="/buildingData/" element={<Detail/>}/>
        
        
        <Route path="/demo/" element={<Demo/>}/>
{/* 
        <Route>
          <Demo>
            <Input/>
          </Demo>
        </Route> */}





      </Routes>
    </div>
  );
}

export default App;
