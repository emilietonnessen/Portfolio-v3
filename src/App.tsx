import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Courses from './container/Courses/Courses';
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

      {/* Testimonials */}
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
    </div>
  );
}

export default App;
