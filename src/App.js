import './App.css';
import About from './components/About/index'
import Experience from './components/Experience/index'
import Contact from './components/Contact/index'
import Projects from './components/Projects/index'
import Home from './components/Home/index'
import BaseLayout from './components/BaseLayout';
import {Routes, Route} from 'react-router-dom'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDW19YUTeaAWT1UiHswELYRYaT3BNnj1WE",
  authDomain: "rupesh-kashyap.firebaseapp.com",
  projectId: "rupesh-kashyap",
  storageBucket: "rupesh-kashyap.appspot.com",
  messagingSenderId: "489165676801",
  appId: "1:489165676801:web:08e0d1e894b7fb7e07bb00",
  measurementId: "G-4GP1Q5VPMB"
};

function App() {
  initializeApp(firebaseConfig);

  return (
     <>
      <Routes>
        <Route path="/" element= {<BaseLayout/>}>
          <Route index element= {<Home/>} />
          <Route path="about" element= {<About/>}/>
          <Route path="experience" element= {<Projects/>}/>
          <Route path="projects" element= {<Experience/>}/>
          <Route path="contact" element= {<Contact/>}/>
        </Route>
      </Routes>
     </>
  );
}

export default App;
