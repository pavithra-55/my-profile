import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Books from './Pages/Books';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Experience from './Pages/Experience';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navigation person={{ name: "Pavithra Saravanan" }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='books' element={<Books />} />
        <Route path='experience' element={<Experience />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
