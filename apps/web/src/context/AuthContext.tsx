import React, { createContext, useContext, useState } from 'react';
import { User } from '../types';
import { authService, DEMO_CUSTOMER, DEMO_ADMIN } from '../services/authService';

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string, role?: 'customer' | 'admin') => Promise<User>;
  loginAsDemoCustomer: () => Promise<User>;
  loginAsDemoAdmin: () => Promise<User>;
  register: (name: string, email: string) => Promise<User>;
  logout: () => void;
  switchRole: (role: 'customer' | 'admin') => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => authService.getCurrentUser());

  const login = async (email: string, password?: string, role: 'customer' | 'admin' = 'customer') => {
    const logged = await authService.login(email, password, role);
    setUser(logged);
    return logged;
  };

  const loginAsDemoCustomer = async () => {
    const logged = await authService.loginAsDemoCustomer();
    setUser(logged);
    return logged;
  };

  const loginAsDemoAdmin = async () => {
    const logged = await authService.loginAsDemoAdmin();
    setUser(logged);
    return logged;
  };

  const register = async (name: string, email: string) => {
    const registered = await authService.register(name, email);
    setUser(registered);
    return registered;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const switchRole = (role: 'customer' | 'admin') => {
    if (role === 'admin') {
      setUser(DEMO_ADMIN);
      localStorage.setItem('aether_auth_user', JSON.stringify(DEMO_ADMIN));
    } else {
      setUser(DEMO_CUSTOMER);
      localStorage.setItem('aether_auth_user', JSON.stringify(DEMO_CUSTOMER));
    }
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        loginAsDemoCustomer,
        loginAsDemoAdmin,
        register,
        logout,
        switchRole,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
