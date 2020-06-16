import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/Home';
import About from './components/layouts/About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;