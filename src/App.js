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
import { ToastContainer, toast } from 'react-toastify';
import About from './Components/Home/About';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Components/Home/Spinner'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 3000);

  }, []);
  return (
    <>
      {
        isLoading === true ? <Spinner/>  :
      
    <div>
               <Navbar></Navbar>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/blog" element={<Blog></Blog>}></Route>
              <Route path="/features" element={<FeaturesPage />}></Route>
              <Route path="/portfolio" element={<PortfolioPage />}></Route>
              <Route path="/contact-me" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer />
    </div>
         
         
      }
    </>
    
  );
}

export default App;
