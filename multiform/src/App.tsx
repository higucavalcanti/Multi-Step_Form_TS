import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormProvider } from './contexts/FormContext';
import { FormStep3 } from './pages/FormStep3';


function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormStep1 />} />
          <Route path='/page2' element={<FormStep2 />} />
          <Route path='/page3' element={<FormStep3 />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}
export default App;