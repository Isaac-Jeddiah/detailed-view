// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Dashboard1 from './pages/dashboard1';
import Dashboard2 from './pages/Listview';
import Gridlayout from './pages/gridBox';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Gridlayout />} />
          <Route path="/homescreen" element={<Gridlayout />} />
          <Route path="/gridlayout" element={<Gridlayout />} />
          <Route path="/listview" element={<Dashboard2 />} />
          <Route path="/detailview" element={<Dashboard1 />} />
          <Route path="/detailview/:id" element={<Dashboard1WithProps />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function Dashboard1WithProps() {
  const { id } = useParams();
  return <Dashboard1 id={id} />;
}

export default App;
