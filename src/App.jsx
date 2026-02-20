
import './App.css'
import About from './pages/About'
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          {/* Added a Home route so the page isn't empty on load */}
          <Route path ="/about" element={<About />} />
          <Route path='/' element={<Main />} />
        </Routes>
        
      </Router>
    </>
  )
}

export default App
