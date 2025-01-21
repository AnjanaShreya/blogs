import './App.css';
import Dashboard from './components/Dashboard';
import BlogForm from './Pages/BlogForm';
import ContactUs from './Pages/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/blogform' element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
