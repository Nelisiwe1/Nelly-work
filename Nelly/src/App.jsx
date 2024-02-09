import React from 'react';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent';
import './index.css';
import Nav from './components/Nav/Nav.jsx'

function App() {
  return (
    <div id="bg-img">
      <Header />
      <MainContent />
      <Nav/>
    </div>
  );
}

export default App;

