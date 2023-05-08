import './App.css';
import Main from './Components/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Todos from './Components/Todos';
import Especies from './Components/Especies';
import Usecontext from './Context/Usecontext';

function App() {
  return (
    <Usecontext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/especies" element={<Especies/>}/>
      </Routes>

    </BrowserRouter>
    </Usecontext>
  );
}

export default App;
