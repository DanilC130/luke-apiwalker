import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Planet from './components/Planet';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="/people/:id" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
