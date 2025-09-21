import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Concepts from './Components/Concepts/Concepts';

function App() {
  return (
    
    <div className="App">
      

      <Routes>

        <Route path='/' index element={<Home />} />
        <Route path='/concepts' element={<Concepts/>}/>
      </Routes>

{/*       <ReactHome />
 */}    </div>
  );
}

export default App;
