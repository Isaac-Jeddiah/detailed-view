// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Dashboard1 from './pages/dashboard1';
import Gridlayout from './pages/gridBox';
import DetailsTable from './components/details';

import './App.css';
import { FormProvider } from './context/Formcontext';
function App() {
  return (
    <>
    <FormProvider>

    
    <Router>
      
        <Routes>
          <Route path="/" element={<Dashboard1 />} />
          <Route path="/gridlayout" element={<Gridlayout />} />
        </Routes>
      
    </Router>
    </FormProvider>
    </>
  );
}

export default App;

