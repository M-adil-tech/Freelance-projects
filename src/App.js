import React from 'react'
import Pop from './Component/Modal';
import { Register } from './Pages/Register';
import Signin from './Pages/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/signin' element={<Register/>} />
      </Routes>
    </Router>

</>
  );
}

export default App;
