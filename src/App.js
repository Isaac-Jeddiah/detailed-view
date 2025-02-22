// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard1 from './pages/dashboard1';
import Gridlayout from './pages/gridBox';
import DetailsTable from './components/details';
import ScrollableLayout from './components/ScrollableLayout';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Dashboard1 />} />
          <Route path="/gridlayout" element={<Gridlayout />} />
        </Routes>
      
    </Router>
  );
}

export default App;

