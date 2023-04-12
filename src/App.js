
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import { Route,Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes><Route path='/' element={<Home/>}/></Routes>
      <Routes><Route path='/add' element={<Add/>}/></Routes>
      <Routes><Route path='/edit' element={<Edit/>}/></Routes>
    </div>
  );
}

export default App;
