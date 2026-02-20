import './App.css'
import About from './pages/About'
import Main from './components/Main';
import Header from './components/Header';
// We swap BrowserRouter for HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      {/* HashRouter ignores the GitHub sub-folder and finds your routes correctly */}
      <Router>
        <Header />
        <Routes>
          {/* Main will now load correctly on the first visit */}
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
