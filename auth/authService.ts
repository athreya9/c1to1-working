'use client';

/**
 * Authentication Service for Connect1to1 Platform
 * 
 * This service handles user authentication and role-based access control.
 * It fixes the critical issue where all demo accounts redirect to the same vendor dashboard.
 */

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';

// Define types for better type safety
interface User {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  permissions?: string[];
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  demoLogin: (role: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  hasRole: (requiredRole: string) => boolean;
  hasPermission: (permission: string) => boolean;
  updateUser: (userData: Partial<User>) => void;
}

// Create authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Authentication provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Initialize auth state on load
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        // Only run on client side
        if (typeof window === 'undefined') return;
        
        const token = localStorage.getItem('c1to1_token');
        if (token) {
          // For demo purposes, we'll simulate an API call
          // In production, this would be a real API call
          try {
            // Attempt to get user data from API
            const response = await axios.get('/api/auth/me', {
              headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response.data);
          } catch (apiError) {
            // If API call fails, check for demo user in localStorage
            const demoUserData = localStorage.getItem('c1to1_user');
            if (demoUserData) {
              setUser(JSON.parse(demoUserData));
            } else {
              // If no demo user, clear token
              localStorage.removeItem('c1to1_token');
            }
          }
        }
      } catch (error) {
        console.error('Authentication error:', error);
        localStorage.removeItem('c1to1_token');
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  // Login function with proper role-based redirection
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // For demo purposes, we'll simulate a successful login
      // In production, this would be a real API call
      let userData: User;
      
      try {
        // Attempt to login via API
        const response = await axios.post('/api/auth/login', { email, password });
        const { token, user } = response.data;
        
        // Store token
        localStorage.setItem('c1to1_token', token);
        userData = user;
      } catch (apiError) {
        // Fallback for demo: Check if this is a demo account
        if (email.includes('vendor')) {
          userData = {
            id: 'v1',
            name: 'Vendor Demo',
            email,
            role: 'vendor',
            permissions: ['view_products', 'message_retailers']
          };
        } else if (email.includes('retailer')) {
          userData = {
            id: 'r1',
            name: 'Retailer Demo',
            email,
            role: 'retailer',
            permissions: ['view_vendors', 'message_vendors']
          };
        } else if (email.includes('admin')) {
          userData = {
            id: 'a1',
            name: 'Admin Demo',
            email,
            role: 'admin',
            permissions: ['manage_users', 'manage_content', 'view_analytics']
          };
        } else {
          throw new Error('Invalid credentials');
        }
        
        // Store demo user data
        localStorage.setItem('c1to1_token', 'demo_token');
        localStorage.setItem('c1to1_user', JSON.stringify(userData));
      }
      
      setUser(userData);
      
      // Redirect based on user role
      redirectBasedOnRole(userData.role || 'user');
      
      return { success: true };
    } catch (error: any) {
      console.error('Login error:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || error.message || 'Login failed. Please try again.' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Demo login function for testing different roles
  const demoLogin = async (role: string) => {
    try {
      setLoading(true);
      
      // Demo credentials based on role
      let email, password;
      switch (role) {
        case 'vendor':
          email = 'vendor_premium@connect1to1.com';
          password = 'demo123';
          break;
        case 'retailer':
          email = 'retailer_active@connect1to1.com';
          password = 'demo123';
          break;
        case 'admin':
          email = 'admin@connect1to1.com';
          password = 'demo123';
          break;
        default:
          throw new Error('Invalid role specified');
      }
      
      // Create demo user
      const userData: User = {
        id: `demo_${role}_${Date.now()}`,
        name: `${role.charAt(0).toUpperCase() + role.slice(1)} Demo`,
        email,
        role,
        permissions: role === 'admin' 
          ? ['manage_users', 'manage_content', 'view_analytics'] 
          : role === 'vendor'
            ? ['view_products', 'message_retailers']
            : ['view_vendors', 'message_vendors']
      };
      
      // Store demo data
      localStorage.setItem('c1to1_token', 'demo_token');
      localStorage.setItem('c1to1_user', JSON.stringify(userData));
      
      setUser(userData);
      
      // Redirect based on user role
      redirectBasedOnRole(role);
      
      return { success: true };
    } catch (error: any) {
      console.error('Demo login error:', error);
      return { 
        success: false, 
        message: error.message || 'Demo login failed. Please try again.' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('c1to1_token');
    localStorage.removeItem('c1to1_user');
    setUser(null);
    router.push('/login');
  };

  // Update user data
  const updateUser = (userData: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    
    // Update stored user data if using demo
    const token = localStorage.getItem('c1to1_token');
    if (token === 'demo_token') {
      localStorage.setItem('c1to1_user', JSON.stringify(updatedUser));
    }
  };

  // Helper function to redirect based on user role
  const redirectBasedOnRole = (role: string) => {
    switch (role) {
      case 'vendor':
        router.push('/vendor/dashboard');
        break;
      case 'retailer':
        router.push('/retailer/dashboard');
        break;
      case 'admin':
        router.push('/admin/dashboard');
        break;
      default:
        router.push('/dashboard');
    }
  };

  // Check if user has specific role
  const hasRole = (requiredRole: string) => {
    if (!user) return false;
    return user.role === requiredRole;
  };

  // Check if user has permission for specific action
  const hasPermission = (permission: string) => {
    if (!user || !user.permissions) return false;
    return user.permissions.includes(permission);
  };

  // Context value
  const value: AuthContextType = {
    user,
    loading,
    login,
    demoLogin,
    logout,
    hasRole,
    hasPermission,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Role-based route protection component
export function RoleProtectedRoute({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode; 
  allowedRoles?: string[] 
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
      } else if (allowedRoles && !allowedRoles.includes(user.role || '')) {
        // Redirect to appropriate dashboard if user doesn't have required role
        switch (user.role) {
          case 'vendor':
            router.push('/vendor/dashboard');
            break;
          case 'retailer':
            router.push('/retailer/dashboard');
            break;
          case 'admin':
            router.push('/admin/dashboard');
            break;
          default:
            router.push('/dashboard');
        }
      }
    }
  }, [user, loading, router, allowedRoles]);

  if (loading || !user) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  if (allowedRoles && !allowedRoles.includes(user.role || '')) {
    return null;
  }

  return <>{children}</>;
}
