import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormStep1 />} />
        <Route path='/step2' element={<FormStep2 />} />
        <Route path='/ste33' element={<FormStep3 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;