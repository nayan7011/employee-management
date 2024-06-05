import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Employee from './components/Employee'
import Employeelist from './components/Employeelist';
import Edit from './components/Edit';
function App() {
  return (
   <>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='employee' element={<Employee/>}/>
      <Route path='employee-list' element={<Employeelist/>}/>
      <Route path='edit/:id' element={<Edit/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
