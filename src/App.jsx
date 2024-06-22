import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProductsList from './pages/admin/products/ProductsList';

const App = () => {
  return (
    <div className='main d-flex flex-column vh-100'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin/products/create' element={<ProductsList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
