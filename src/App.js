import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Importando as rotas
import Home from './Pages/Home/Home'
import Photos from './Pages/Photos/Photos'
import Psd from './Pages/Psd/Psd'
import Vectors from './Pages/Vectors/Vectors'
import Videos from './Pages/Videos/Videos'

function App() {
  return (

    // Rotas
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/photos" element={<Photos/>} />
          <Route path="/psd" element={<Psd/>} />
          <Route path="/vectors" element={<Vectors/>} />
          <Route path="/videos" element={<Videos/>} />
        </Routes>
      </Router>
  );
}

export default App;
