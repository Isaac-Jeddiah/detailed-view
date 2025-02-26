// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Dashboard1 from './pages/dashboard1';
import Dashboard2 from './pages/Listview';
import Gridlayout from './pages/gridBox';
import { ThemeProvider } from '@mui/material/styles';
import DetailsTable from './components/details';
import theme from './theme';
import './App.css';
import { FormProvider } from './context/Formcontext';
function App() {
  return (
    <>
   <ThemeProvider theme={theme}>
    <Router>
      
        <Routes>
          <Route path="/" element={<Dashboard1 />} />
          <Route path="/gridlayout" element={<Gridlayout />} />
        </Routes>
      
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;

