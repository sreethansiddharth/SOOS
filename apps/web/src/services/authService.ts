import { User } from '../types';

const STORAGE_KEY = 'aether_auth_user';

export const DEMO_CUSTOMER: User = {
  id: 'cust_demo_882',
  name: 'Rahul Sharma',
  email: 'rahul.sharma@demo.ac.in',
  role: 'customer',
};

export const DEMO_ADMIN: User = {
  id: 'admin_sys_001',
  name: 'Prof. Cloud Evaluator (Admin)',
  email: 'architect@aether-cloud.internal',
  role: 'admin',
};

export const authService = {
  getCurrentUser(): User | null {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    // Default to demo customer for immediate out-of-the-box browsing & checkout
    return DEMO_CUSTOMER;
  },

  async login(email: string, _password?: string, role: 'customer' | 'admin' = 'customer'): Promise<User> {
    await new Promise((r) => setTimeout(r, 150));
    const user: User = {
      id: role === 'admin' ? DEMO_ADMIN.id : `cust_${Date.now()}`,
      name: email.split('@')[0].replace('.', ' '),
      email,
      role,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  async loginAsDemoCustomer(): Promise<User> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_CUSTOMER));
    return DEMO_CUSTOMER;
  },

  async loginAsDemoAdmin(): Promise<User> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_ADMIN));
    return DEMO_ADMIN;
  },

  async register(name: string, email: string): Promise<User> {
    await new Promise((r) => setTimeout(r, 150));
    const user: User = {
      id: `cust_${Date.now()}`,
      name,
      email,
      role: 'customer',
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
