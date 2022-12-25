import './App.scss';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import Courses from './container/Certificates/Certificates';
import Header from './container/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './container/Portfolio/Portfolio';
import SkillsAndExperience from './container/SkillsAndExperience/SkillsAndExperience';
import Testimonials from './container/Testimonials/Testimonials';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Portfolio />
      <SkillsAndExperience />
      <Courses />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
