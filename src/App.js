import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard1 from './pages/dashboard1';
import Gridlayout from './pages/gridBox';
//<Route path="/" element={<Dashboard1 />} />
function App() {
  return (
    <Router>
      <Routes>
      
      <Route path="/" element={<Gridlayout />} />
</Routes>
    </Router>
  );
}

export default App;
