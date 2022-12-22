import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import Portfolio from './container/Portfolio/Portfolio';
import SkillsAndExperience from './container/SkillsAndExperience/SkillsAndExperience';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Portfolio />
      <SkillsAndExperience />
    </div>
  );
}

export default App;
