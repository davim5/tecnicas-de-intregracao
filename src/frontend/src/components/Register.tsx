import { useState } from 'react';
import { registerUser } from '../services/api';

function Register() {
  const [role, setRole] = useState<string>('dono');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleRegister = async () => {
    try {
      const res = await registerUser({ name, email, role });
      setMessage(`Usuário registrado: ${res.data.name}`);
    } catch (err: any) {
      setMessage(err.response?.data?.error || 'Erro ao registrar');
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Registro</h2>
        <div className="flex space-x-4 mb-4">
          <button onClick={() => setRole('dono')} className={`px-4 py-2 rounded ${role === 'dono' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Dono</button>
          <button onClick={() => setRole('passeador')} className={`px-4 py-2 rounded ${role === 'passeador' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Passeador</button>
        </div>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome" className="w-full p-2 border rounded mb-2" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
        {role === 'passeador' && <input type="text" placeholder="Preço por passeio (R$)" className="w-full p-2 border rounded mb-2" />}
        <button onClick={handleRegister} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Registrar</button>
        {message && <p className="mt-2 text-green-600">{message}</p>}
      </div>
    </div>
  );
}

export default Register;