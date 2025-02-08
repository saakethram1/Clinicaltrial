import { Navigate } from 'react-router-dom';
import useAuth from '../context/AuthContext';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {auth.user?.name || 'User'}!</p>
    </div>
  );
};

export default Dashboard;
