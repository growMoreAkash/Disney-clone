
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Detail from "./components/Detail";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
