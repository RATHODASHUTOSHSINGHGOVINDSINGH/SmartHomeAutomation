import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    toast.info("Please log in to access the dashboard", {
      position: "top-right",
      autoClose: 3000,
      icon: "🔒",
    });
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
