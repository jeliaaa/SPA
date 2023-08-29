import { Route, Routes } from 'react-router-dom';
import './App.css';
import Personaji from './Personaji';
import Fact from './Fact';
import ErrPage from './ErrPage';

function App() {
  return (
    <div className='App'>
      <Routes >
        <Route index path="/about" element={<Personaji />} />
        <Route path="/facts/:id" element={<Fact />} />
        <Route path="*" element={<ErrPage />} />
      </Routes>
    </div>
  );
}

export default App;
