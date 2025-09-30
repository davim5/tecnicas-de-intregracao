
// src/components/Login.tsx (atualizado)
import { useState } from 'react';
import { loginUser } from '../services/api';
import { saveUser } from '../services/auth';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email });
      saveUser(res.data.user); // salva usuário no localStorage
      setMessage(`Bem-vindo, ${res.data.user.name}`);
    } catch (err: any) {
      setMessage(err.response?.data?.error || 'Erro no login');
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" />
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>
        {message && <p className="mt-2 text-green-600">{message}</p>}
      </div>
    </div>
  );
}

export default Login;