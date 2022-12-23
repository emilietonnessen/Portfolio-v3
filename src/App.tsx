import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Courses from './container/Certificates/Certificates';
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
      <Courses />

      {/* About 
      
      What am I looking for? 
      - Self development 
          - senior/mentor frontend developer
          - courses
          - events
      - team building exercises    
      - paid well
      - 
      
      
      */}

      {/* Testimonials */}
    </div>
  );
}

export default App;
