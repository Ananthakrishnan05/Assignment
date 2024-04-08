
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Addblog from './Components/Addblog';
import Api from './Components/Api';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Api/>}/>
      <Route  path='/add' element={<Addblog/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
