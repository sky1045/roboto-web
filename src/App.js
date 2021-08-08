import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import DarkTheme from './themes/DarkTheme';
import { ThemeProvider } from '@material-ui/styles';
import { Route } from 'react-router-dom'
import ArticlePage from './pages/ArticlePage'
//import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <div className="App">
        <Header />
        <Route path="/" component={MainPage} exact />
        <Route path="/article" component={ArticlePage} />
      </div>
    </ThemeProvider>
  )
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
*/

export default App;
