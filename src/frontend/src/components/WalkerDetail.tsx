import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { scheduleWalk } from '../services/api';

function WalkerDetail() {
  const { id } = useParams<{ id: string }>();
  const [scheduled, setScheduled] = useState<boolean>(false);

  const handleSchedule = async () => {
    try {
      const res = await scheduleWalk({ userId: 1, walkerId: Number(id), value: 30 });
      if (res.status === 201) setScheduled(true);
    } catch (err) {
      console.log('Erro ao agendar', err);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-2">Passeador {id}</h2>
        <p className="mb-4">Preço: R$ 30</p>
        {!scheduled ? (
          <button onClick={handleSchedule} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Agendar Passeio</button>
        ) : (
          <p className="text-green-600 font-semibold">Passeio agendado ✅</p>
        )}
      </div>
    </div>
  );
}

export default WalkerDetail;