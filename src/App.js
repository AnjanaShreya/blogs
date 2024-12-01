import './App.css';
import Dashboard from './components/Dashboard';
import BlogForm from './components/Pages/BlogForm';
import ContactUs from './components/Pages/ContactUs';
import Internships from './components/Pages/Internships';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/internships" element={<Internships />} /> 
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/blogform' element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
