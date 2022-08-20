import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './hook/RequireAuth';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }></Route>
        <Route path='/contact' element={
          <RequireAuth>
            <Contact />
          </RequireAuth>
        }></Route>
        <Route path='/services' element={
          <RequireAuth>
            <Services />
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
