
'use client'; // <-- ADDED: Mark as client component

/**
 * Authentication Service for Connect1to1 Platform
 * 
 * This service handles user authentication and role-based access control.
 * It fixes the critical issue where all demo accounts redirect to the same vendor dashboard.
 */

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // <-- UPDATED: Use next/navigation
import axios from 'axios';

// Create authentication context
const AuthContext = createContext(undefined); // Initialize with undefined

// Authentication provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Initialize auth state on load
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const token = localStorage.getItem('c1to1_token');
        if (token) {
          // In a real app, you'd verify the token with the backend
          // For demo, we'll assume the token is valid if present
          // and retrieve user data from localStorage if available
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          } else {
            // If user data isn't in localStorage, maybe fetch from API
            // const response = await axios.get('/api/auth/me', {
            //   headers: { Authorization: `Bearer ${token}` }
            // });
            // setUser(response.data);
            // For demo, just clear token if user data is missing
            localStorage.removeItem('c1to1_token');
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
  const login = async (email, password) => {
    try {
      setLoading(true);
      // Mock API call for demo
      await new Promise(resolve => setTimeout(resolve, 500)); 
      
      let loggedInUser = null;
      // Simplified demo login logic
      if (email === 'vendor@example.com' && password === 'password123') {
        loggedInUser = { id: 'vendor-123', email: email, role: 'vendor' };
      } else if (email === 'retailer@example.com' && password === 'password123') {
        loggedInUser = { id: 'retailer-456', email: email, role: 'retailer' };
      } else if (email === 'admin@example.com' && password === 'password123') {
        loggedInUser = { id: 'admin-789', email: email, role: 'admin' };
      } else {
         throw new Error('Invalid credentials');
      }

      const token = `demo-token-${loggedInUser.id}`; // Mock token
      
      // Store token and user data
      localStorage.setItem('c1to1_token', token);
      localStorage.setItem('user', JSON.stringify(loggedInUser)); 
      setUser(loggedInUser);
      
      // Redirect based on user role
      redirectBasedOnRole(loggedInUser.role);
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        message: error.message || 'Login failed. Please try again.' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Demo login function for testing different roles
  const demoLogin = async (role) => {
    try {
      setLoading(true);
      
      // Demo credentials based on role
      let email, password;
      switch (role) {
        case 'vendor':
          email = 'vendor@example.com';
          password = 'password123'; 
          break;
        case 'retailer':
          email = 'retailer@example.com';
          password = 'password123';
          break;
        case 'admin':
          email = 'admin@example.com';
          password = 'password123';
          break;
        default:
          throw new Error('Invalid role specified');
      }
      
      // Use the main login function for demo
      return await login(email, password);

    } catch (error) {
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
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login');
  };

  // Helper function to redirect based on user role
  const redirectBasedOnRole = (role) => {
    switch (role) {
      case 'vendor':
        // Redirect vendors to their dashboard (assuming it's /dashboard for now, adjust if needed)
        router.push('/dashboard'); 
        break;
      case 'retailer':
        // Redirect retailers to their dashboard (assuming it's /dashboard for now, adjust if needed)
        router.push('/dashboard'); 
        break;
      case 'admin':
        // Redirect admins to the admin dashboard
        router.push('/admin/dashboard'); // <-- CORRECTED: Redirect admin to specific path
        break;
      default:
        // Default redirect if role is unknown or not specified
        router.push('/dashboard');
    }
  };

  // Check if user has specific role
  const hasRole = (requiredRole) => {
    if (!user) return false;
    return user.role === requiredRole;
  };

  // Check if user has permission for specific action (placeholder)
  const hasPermission = (permission) => {
    if (!user) return false;
    // Implement actual permission logic here if needed
    return true; // Placeholder
  };

  // Context value
  const value = {
    user,
    isAuthenticated: !!user, // Derived state
    loading,
    login,
    demoLogin,
    logout,
    hasRole,
    hasPermission
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
export function RoleProtectedRoute({ children, allowedRoles }) {
  const { user, loading, isAuthenticated } = useAuth(); // Use derived state
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    } else if (!loading && isAuthenticated && allowedRoles && !allowedRoles.includes(user.role)) {
      // Redirect to appropriate dashboard if user doesn't have required role
      redirectBasedOnRole(user.role); // Use the helper function
    }
  }, [user, loading, isAuthenticated, router, allowedRoles]); // Add isAuthenticated dependency

  // Render loading state or null if redirecting
  if (loading || !isAuthenticated) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  // Render null if role is not allowed (while redirect happens)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return null; 
  }

  // Render children if authenticated and role is allowed
  return children;
}

