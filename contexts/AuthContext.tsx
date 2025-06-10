'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// Define user interface
interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'vendor' | 'retailer' | 'admin';
  company?: string;
  profilePicture?: string;
}

// Define auth state interface
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Define auth context interface
interface AuthContextType extends AuthState {
  login: (email: string, password: string, rememberMe?: boolean) => Promise<User>;
  signup: (userData: Partial<User> & { password: string }) => Promise<User>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => User | undefined;
  hasRole: (role: 'vendor' | 'retailer' | 'admin') => boolean;
}

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes
const DEMO_USERS = {
  vendor: {
    id: 'vendor-123',
    email: 'vendor@example.com',
    firstName: 'John',
    lastName: 'Vendor',
    role: 'vendor' as const,
    company: 'Tech Innovations Inc.',
    profilePicture: '/images/default-profile.png'
  },
  retailer: {
    id: 'retailer-456',
    email: 'retailer@example.com',
    firstName: 'Sarah',
    lastName: 'Retailer',
    role: 'retailer' as const,
    company: 'Global Retail Solutions',
    profilePicture: '/images/default-profile.png'
  },
  admin: {
    id: 'admin-789',
    email: 'admin@example.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin' as const,
    company: 'Connect1to1',
    profilePicture: '/images/default-profile.png'
  }
};

// Auth Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  });

  // Initialize auth state from localStorage on component mount
  useEffect(() => {
    const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    const storedRole = typeof window !== 'undefined' ? localStorage.getItem('userRole') : null;
    
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
      } catch (error) {
        console.error('Error parsing stored user:', error);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('user');
        }
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: 'Session expired. Please log in again.'
        });
      }
    } else if (storedRole) {
      // If only role is stored (from signup process), use demo user
      const demoUser = DEMO_USERS[storedRole as keyof typeof DEMO_USERS];
      if (demoUser) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(demoUser));
        }
        setAuthState({
          user: demoUser,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null
        });
      }
    } else {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      });
    }
  }, []);

  // Login function
  const login = async (email: string, password: string, rememberMe: boolean = false) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // In a real app, this would be an API call to authenticate
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, check if email matches one of our demo users
      let user: User | null = null;
      
      if (email === 'vendor@example.com') {
        user = DEMO_USERS.vendor;
      } else if (email === 'retailer@example.com') {
        user = DEMO_USERS.retailer;
      } else if (email === 'admin@example.com') {
        user = DEMO_USERS.admin;
      } else {
        // For any other email, default to vendor for demo
        user = { ...DEMO_USERS.vendor, email };
      }
      
      if (user) {
        // Store user in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('userRole', user.role);
        }
        
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
        
        return user;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      }));
      throw error;
    }
  };

  // Signup function
  const signup = async (userData: Partial<User> & { password: string }) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // In a real app, this would be an API call to register
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a new user with the provided role or default to 'vendor'
      const role = userData.role || 'vendor';
      const newUser: User = {
        id: `user-${Date.now()}`,
        email: userData.email || '',
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: role as 'vendor' | 'retailer' | 'admin',
        company: userData.company,
        profilePicture: '/images/default-profile.png'
      };
      
      // Store user in localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(newUser));
        localStorage.setItem('userRole', newUser.role);
      }
      
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
      
      return newUser;
    } catch (error) {
      console.error('Signup error:', error);
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      }));
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('userRole');
    }
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
    
    router.push('/login');
  };

  // Update user profile
  const updateProfile = (updates: Partial<User>) => {
    if (!authState.user) return;
    
    const updatedUser = { ...authState.user, ...updates };
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    setAuthState(prev => ({
      ...prev,
      user: updatedUser
    }));
    
    return updatedUser;
  };

  // Check if user has specific role
  const hasRole = (role: 'vendor' | 'retailer' | 'admin') => {
    return authState.user?.role === role;
  };

  const value = {
    ...authState,
    login,
    signup,
    logout,
    updateProfile,
    hasRole
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
