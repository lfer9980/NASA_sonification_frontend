import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Generate } from './pages/Generate';
import { About } from './pages/About';
import { ErrorPage } from './pages/Error';
import { Home } from './pages/Home';

import './styles/App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  /*
  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.data);
    });
  }, []); */

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/generate' element={<Generate />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
