import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import './App.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import NewsArticle from './components/containers/NewsArticle';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news/:id" component={NewsArticle} />
          </Layout>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;