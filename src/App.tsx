import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import Portfolio from './container/Portfolio/Portfolio';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
