import './App.css';

import Detail from './routes/Detail.js';
import ProjectInfo from './routes/ProjectInfo.js';
import BuildingData from './routes/BuildingData.js';
import OtherFeatures from './routes/OtherFeatures.js';
import Input from './components/Input.js';

import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        
        
        <Route path="/buildingData1/" element={<Detail/>}/>
        <Route path="/ProjectInformation/" element={<ProjectInfo/>}/>
        
        <Route path="/buildingData/" element={<BuildingData/>}/>
        <Route path="/otherFeatures/" element={<OtherFeatures/>}/>
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
