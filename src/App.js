import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import DarkTheme from './themes/DarkTheme';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './pages/_routes';
//import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App;
