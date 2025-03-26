import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const checkLoginState = () => {
      const storedAuthStatus = localStorage.getItem('isLoggedIn');
      const storedUser = localStorage.getItem('user');
      
      if (storedAuthStatus === 'true') {
        setIsLoggedIn(true);
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser));
          } catch (error) {
            // If parsing fails, set default user
            setUser({ email: 'test@example.com' });
          }
        } else {
          // Set default user if no stored user
          setUser({ email: 'test@example.com' });
        }
      }
      
      setIsLoading(false);
    };
    
    checkLoginState();
  }, []);

  const login = (userData = { email: 'test@example.com' }) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      user, 
      login, 
      logout, 
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
