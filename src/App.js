
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
