
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import WalkerDetail from './components/WalkerDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <nav className="bg-white shadow-md p-4 flex justify-between">
          <h1 className="text-xl font-bold text-blue-600">DogWalk</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-500">Dashboard</Link>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
            <Link to="/register" className="hover:text-blue-500">Registro</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/walker/:id" element={<WalkerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
