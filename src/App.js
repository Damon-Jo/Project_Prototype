import './App.css';

import Detail from './routes/Detail.js';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/buildingData/" element={<Detail/>}/> 
      </Routes>
    </div>
  );
}

export default App;
