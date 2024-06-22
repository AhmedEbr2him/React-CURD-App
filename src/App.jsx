<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
=======
import { Footer, Navbar } from './components/Layout';
>>>>>>> da0a1f21ed78a1063f20d14ea5ddd21e6999c2d9

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
=======
      <Navbar />
      <Footer />
>>>>>>> da0a1f21ed78a1063f20d14ea5ddd21e6999c2d9
    </>
  );
};
export default App;
