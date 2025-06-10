
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use Next.js Image component
import { usePathname } from 'next/navigation';
import { useAuth } from '../../auth/authService';
import useAnalytics from '../utils/analyticsService';

// Enhanced Dashboard Layout with Connect1to1 branding
export default function DashboardLayout({ children }) {
  const { user, loading, logout } = useAuth(); // Added logout
  const pathname = usePathname();
  const { trackEvent } = useAnalytics();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Dashboard');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // Set page title based on current path
  useEffect(() => {
    if (pathname) {
      let title = 'Dashboard'; // Default title
      if (pathname.startsWith('/admin')) {
        title = 'Admin Dashboard';
      } else if (pathname.startsWith('/dashboard')) {
        title = 'Dashboard';
      } else {
        const pathSegments = pathname.split('/').filter(Boolean);
        if (pathSegments.length > 0) {
          title = pathSegments[pathSegments.length - 1]
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }
      }
      setPageTitle(title);

      // Track page view in dashboard
      if (user) {
        trackEvent('dashboard_page_view', {
          page: pathname,
          user_role: user.role
        });
      }
    }
  }, [pathname, trackEvent, user]);

  // Show loading state with brand colors
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        {/* Use brand color for spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-c1to1-teal"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading your dashboard...</p>
      </div>
    );
  }

  // Redirect handled by RoleProtectedRoute in parent component
  if (!user) {
    // This part might not be reached if RoleProtectedRoute handles redirect, but keep as fallback
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Session Expired</h2>
          <p className="text-gray-600 mb-6">Please log in again to continue</p>
          <Link href="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-c1to1-teal hover:bg-c1to1-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c1to1-teal">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // Define navigation based on role
  const getNavigation = (role) => {
    const baseNav = [
      { name: 'Dashboard', href: '/dashboard', icon: <HomeIcon /> },
      { name: 'Matches', href: '/matches', icon: <UsersIcon />, badge: 3 },
      { name: 'Meetings', href: '/meetings', icon: <CalendarIcon />, badge: 1 },
      { name: 'Messages', href: '/messages', icon: <ChatIcon />, badge: 2 },
      { name: 'Profile', href: '/profile', icon: <UserCircleIcon /> },
    ];
    const adminNav = [
      { name: 'Admin Dashboard', href: '/admin/dashboard', icon: <CogIcon /> },
      { name: 'Manage Vendors', href: '/admin/vendors', icon: <BuildingStorefrontIcon /> },
      { name: 'Manage Retailers', href: '/admin/retailers', icon: <BuildingOfficeIcon /> },
      { name: 'Settings', href: '/admin/settings', icon: <AdjustmentsHorizontalIcon /> },
    ];
    const resourceNav = [
      { name: 'Help Center', href: '/resources/help', icon: <QuestionMarkCircleIcon /> },
      { name: 'Guides', href: '/resources/guides', icon: <BookOpenIcon /> },
    ];

    if (role === 'admin') {
      return { main: adminNav, resources: resourceNav };
    } 
    // Assuming vendor and retailer share the same base nav for now
    return { main: baseNav, resources: resourceNav }; 
  };

  const navigation = getNavigation(user.role);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 flex-shrink-0">
          <Link href={user.role === 'admin' ? '/admin/dashboard' : '/dashboard'} className="flex items-center">
            {/* Use the uploaded logo */}
            <Image
              src="/logo.png" // Assuming logo.png is the correct one from upload
              alt="Connect1to1 Logo"
              width={32} // Adjust size as needed
              height={32}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-lg font-semibold text-c1to1-teal">Connect1to1</span>
          </Link>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-grow overflow-y-auto">
          <div className="px-4 py-6">
            {/* User Info */}
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-c1to1-teal to-c1to1-light-teal flex items-center justify-center text-white font-medium text-lg">
                  {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
                </div>
              </div>
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-gray-900 truncate">{user.email || 'User'}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role || 'Member'}</p>
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="space-y-1">
              {navigation.main.map((item) => (
                <NavItem
                  key={item.name}
                  href={item.href}
                  icon={item.icon}
                  current={pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard' && item.href !== '/admin/dashboard')}
                  badge={item.badge}
                >
                  {item.name}
                </NavItem>
              ))}
            </nav>

            {/* Resources Section */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Resources
              </h3>
              <nav className="space-y-1">
                {navigation.resources.map((item) => (
                  <NavItem
                    key={item.name}
                    href={item.href}
                    icon={item.icon}
                    current={pathname === item.href}
                  >
                    {item.name}
                  </NavItem>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        {/* Sidebar Footer (Logout) */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200">
           <button
              onClick={logout}
              className="group flex w-full items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-c1to1-teal hover:bg-gray-50"
            >
              <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-c1to1-teal" />
              Logout
            </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex h-16 bg-white shadow-sm flex-shrink-0">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-c1to1-teal lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" />
          </button>

          <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex flex-1 items-center">
              {/* Page Title */}
              <h1 className="text-xl font-semibold text-gray-900">{pageTitle}</h1>
            </div>

            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              {/* Notifications */}
              <button type="button" className="relative p-1 rounded-full text-gray-400 hover:text-c1to1-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c1to1-teal">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" />
                {/* Notification Badge */}
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>

              {/* Profile dropdown */}
              <div className="relative">
                <div>
                  <button
                    type="button"
                    className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c1to1-teal"
                    id="user-menu-button"
                    aria-expanded={profileMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-c1to1-teal to-c1to1-light-teal flex items-center justify-center text-white font-medium text-sm">
                      {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
                    </div>
                  </button>
                </div>
                {/* Dropdown menu */} 
                {profileMenuOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} onClick={() => setProfileMenuOpen(false)}>
                      Your Profile
                    </Link>
                    <button
                      onClick={() => { logout(); setProfileMenuOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 py-6">
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            {/* Main content rendered here */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

// Navigation item component with brand colors
function NavItem({ href, icon, children, current, badge }) {
  return (
    <Link
      href={href}
      className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
        current
          ? 'bg-c1to1-teal/10 text-c1to1-teal'
          : 'text-gray-600 hover:text-c1to1-teal hover:bg-gray-50'
      }`}
    >
      <div className={`mr-3 flex-shrink-0 h-5 w-5 ${current ? 'text-c1to1-teal' : 'text-gray-400 group-hover:text-c1to1-teal'}`}>
        {icon}
      </div>
      <span className="flex-1 truncate">{children}</span>
      {badge && (
        <span className={`ml-3 inline-block py-0.5 px-2 text-xs font-semibold rounded-full ${current ? 'bg-c1to1-teal text-white' : 'bg-gray-200 text-gray-700 group-hover:bg-gray-300'}`}>
          {badge}
        </span>
      )}
    </Link>
  );
}

// Icon Components (replace with actual imports or definitions)
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>;
const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.876-3.876A17.53 17.53 0 0112 15.75c-1.01-0-2-.197-2.922-.572-.973-.394-1.9-1.03-2.688-1.816a5.986 5.986 0 01-1.713-.941l-1.75-1.75a3.002 3.002 0 00-4.243 0zM15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const UserCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m18 0h-1.5m-15.036 6.372l-1.063 1.063M21.036 6.372l-1.063-1.063M12 19.5v-1.5m0-15V3m-6.372 15.036l1.063-1.063M6.372 3.964l1.063 1.063M12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>;
const BuildingStorefrontIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0114.25 12h4.5A.75.75 0 0119.5 12.75V21M4.5 3.75v16.5M13.5 3.75v16.5M5.25 3.75h13.5m-13.5 0a3 3 0 013-3h7.5a3 3 0 013 3M21 3.75v16.5M18.75 3.75h.75a3 3 0 013 3v10.5a3 3 0 01-3 3h-.75m-13.5 0h-.75a3 3 0 01-3-3V6.75a3 3 0 013-3h.75" /></svg>;
const BuildingOfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>;
const AdjustmentsHorizontalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>;
const QuestionMarkCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>;
const BookOpenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;
const ArrowLeftOnRectangleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>;
const XMarkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
const Bars3Icon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;
const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>;

