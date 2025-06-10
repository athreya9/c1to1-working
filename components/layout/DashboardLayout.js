/**
 * Dashboard Layout Component for Connect1to1 Platform
 * 
 * This component provides the layout structure for all dashboard pages,
 * including proper navigation and role-based content.
 */

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../auth/authService';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AnalyticsService from '../../analytics/analyticsService';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { identifyUser } = AnalyticsService.useAnalytics();
  
  // Identify user for analytics when authenticated
  useEffect(() => {
    if (user) {
      identifyUser(user.id, {
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
        role: user.role,
        plan: user.plan,
        createdAt: user.createdAt
      });
    }
  }, [user, identifyUser]);
  
  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!user) {
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-16 flex min-h-screen">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
