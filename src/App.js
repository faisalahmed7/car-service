
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home'
import About from './Pages/About/About'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'  element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
