import { User, Client } from './types';

const DEMO_USER = {
  id: '1',
  email: 'demo.user@apex.com',
  full_name: 'Demo User',
  role: 'employee',
  department: 'IT',
  two_factor_enabled: false,
};

const DEMO_CLIENT = {
  id: '1',
  email: 'client.demo@apex.com',
  company_name: 'Demo Company',
  contact_person: 'John Doe',
  role: 'client',
  subscription_status: 'active',
};

export async function signIn(email: string, password: string) {
  // Demo authentication
  if (email === 'demo.user@apex.com' && password === 'ApexDemo2023#') {
    localStorage.setItem('user', JSON.stringify(DEMO_USER));
    return { user: DEMO_USER };
  }
  throw new Error('Invalid credentials');
}

export async function signInClient(email: string, password: string) {
  // For testing: Accept any credentials temporarily
  localStorage.setItem('client', JSON.stringify(DEMO_CLIENT));
  return { client: DEMO_CLIENT };
}

export async function signOut() {
  localStorage.removeItem('user');
  localStorage.removeItem('client');
}

export async function getCurrentUser(): Promise<User | null> {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

export async function getCurrentClient(): Promise<Client | null> {
  const clientStr = localStorage.getItem('client');
  return clientStr ? JSON.parse(clientStr) : null;
}

export async function updateProfile(userId: string, updates: {
  full_name?: string;
  department?: string;
  avatar_url?: string;
}) {
  const user = await getCurrentUser();
  if (user && user.id === userId) {
    const updatedUser = { ...user, ...updates };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    return updatedUser;
  }
  throw new Error('User not found');
}