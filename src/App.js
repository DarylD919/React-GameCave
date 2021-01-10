import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Gameroom from './pages/Gameroom';
import Gallery from './pages/Gallery';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Services} />
        <Route path="/gameroom" component={Gameroom} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
