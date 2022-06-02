import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import FeaturesPage from './Components/Features/FeaturesPage';
import Home from './Components/Home/Home';
import PortfolioPage from './Components/Portfolio/PortfolioPage';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Sidebar from './Components/Home/Sidebar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Sidebar/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/features" element={<FeaturesPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/contact-me" element={<Contact />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
