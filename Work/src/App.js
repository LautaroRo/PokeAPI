import './App.css';
import Main from './Components/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Especies from './Components/Especies';
import Usecontext from './Context/Usecontext';
import Header from './Components/Header';



function App() {
  return (
    <Usecontext>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/especies" element={<Especies/>}/>
      </Routes>
    </BrowserRouter>
    </Usecontext>
  );
}

export default App;
