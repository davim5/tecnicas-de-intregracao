import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { getWalkers } from '../services/api';
import { getUser } from '../services/auth';

interface Walker {
  id: number;
  name: string;
  price: number;
  rating: number;
}

function Dashboard() {
  const [walkers, setWalkers] = useState<Walker[]>([]);
  const user = getUser();

  useEffect(() => {
    const fetchWalkers = async () => {
      try {
        const res = await getWalkers();
        setWalkers(res.data);
      } catch (err) {
        console.log('Erro ao carregar passeadores', err);
      }
    };
    fetchWalkers();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {walkers.map((w) => (
        <Link to={`/walker/${w.id}`} key={w.id}>
          <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">{w.name}</h3>
            <p>Preço: R$ {w.price}/passeio</p>
            <p>⭐ {w.rating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Dashboard;
