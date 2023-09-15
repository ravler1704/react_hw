import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/404';
import CatalogPage from './pages/CatalogPage';
import Main from './pages/Main';
import ProductView from './pages/ProductView';
import Cart from './pages/Cart';
import { restoreCart } from './actions/actionCreators';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreCart())
  }, []);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/catalog/:id' element={<ProductView />} />
            <Route exact path='/catalog' element={<CatalogPage />} />
            <Route exact path='/contacts' element={<Contacts />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/404' element={<NotFound />} />
            <Route exact path='/' element={<Main />} />
            <Route path='*' element={<Navigate to={'/404'} />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
