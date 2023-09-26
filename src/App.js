import './App.css';
import About from './components/About/index'
import Experience from './components/Experience/index'
import Contact from './components/Contact/index'
import Projects from './components/Projects/index'
import Home from './components/Home/index'
import BaseLayout from './components/BaseLayout';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
     <>
      <Routes>
        <Route path="/" element= {<BaseLayout/>}/>
          <Route index element= {<Home/>}/>
          <Route path="about" element= {<About/>}/>
          <Route path="experience" element= {<Projects/>}/>
          <Route path="projects" element= {<Experience/>}/>
          <Route path="contact" element= {<Contact/>}/>
        <Route/>
      </Routes>
     </>
  );
}

export default App;
