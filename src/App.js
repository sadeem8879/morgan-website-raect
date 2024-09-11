import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AlignmentExample from './Component/Header/Header';
import AlignmentExample from './Component/painting/Mypainting';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";  // Uncomment this line
import Contact from "./pages/contact/Contact";    // Uncomment this line
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
    <>
      <Router>
        {/* <AlignmentExample /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />  {/* Correct closing */}
          <Route path="/contact" element={<Contact />} />   Correct closing
        </Routes>
      </Router>
    </>
  );
}

export default App;
