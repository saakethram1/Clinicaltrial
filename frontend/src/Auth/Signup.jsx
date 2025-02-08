import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className=' h-screen   flex flex-col  border justify-center items-center'>
      <h2 className='text-2xl p-1 mb-4 text-white  bg-blue-500 rounded '>Signup Page</h2>
      <div className="border border-gray-400 rounded-lg p-6 shadow-lg">
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center items-center'>
      <div className='flex gap-5'>
        <label>Name</label>
        <input className='border rounded-sm w-[300px] h-8 p-2 focus:outline-none' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className='flex gap-5'>
        <label>Email</label>
        <input className='border rounded-sm w-[300px] h-8 p-2 focus:outline-none' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className='flex gap-5'>
        <label>Email</label>
        <input className='border rounded-sm w-[300px] h-8 p-2 focus:outline-none' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        
      </form>
      <div className='flex justify-end mt-2'>
      <button className='border bg-blue-500 cursor-pointer text-black rounded-sm p-1 hover:bg-white hover:text-blue-300' type="submit">Signup</button>
      </div>
      </div>
    </div>
  );
};

export default Signup;
