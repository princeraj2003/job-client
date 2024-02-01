import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Info from './components/Info.jsx';
import UserContextProvider from "./context/UserContextProvider.jsx";
import Cards from './components/Cards.jsx';

function App() {
  return (
    <UserContextProvider>
    <div className="App">
      <Header/>
      <Info/>
      <Cards/>
    </div>
    </UserContextProvider>
  );
}

export default App;
