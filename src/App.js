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
        <Route path="/article/:id" component={ArticlePage} />
      </div>
    </ThemeProvider>
  )
}

export default App;
