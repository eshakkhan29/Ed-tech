import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
