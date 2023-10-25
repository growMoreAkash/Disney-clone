
import './App.css';
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
