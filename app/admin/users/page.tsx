'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardLayout from '../components/layout/DashboardLayout';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'vendor' | 'retailer';
  company: string;
  status: 'active' | 'pending' | 'inactive' | 'suspended';
  lastActive?: string;
  joinDate: string;
  avatar?: string;
  completionPercentage: number;
}

export default function UserManagementPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [roleFilter, setRoleFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  
  useEffect(() => {
    // Simulate API call to get users
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        const mockUsers: User[] = [
          {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah.johnson@ecoshop.com',
            role: 'retailer',
            company: 'EcoShop',
            status: 'active',
            lastActive: '2025-06-04T10:30:00',
            joinDate: '2024-11-15',
            avatar: '/profile-pics/sarah.jpg',
            completionPercentage: 95
          },
          {
            id: '2',
            name: 'Michael Chen',
            email: 'michael.chen@techmart.com',
            role: 'retailer',
            company: 'TechMart',
            status: 'active',
            lastActive: '2025-06-03T15:45:00',
            joinDate: '2024-12-05',
            avatar: '/profile-pics/michael.jpg',
            completionPercentage: 85
          },
          {
            id: '3',
            name: 'Emma Wilson',
            email: 'emma.wilson@greenretail.com',
            role: 'retailer',
            company: 'GreenRetail',
            status: 'active',
            lastActive: '2025-06-02T09:15:00',
            joinDate: '2025-01-20',
            avatar: '/profile-pics/emma.jpg',
            completionPercentage: 90
          },
          {
            id: '4',
            name: 'David Park',
            email: 'david.park@urbangadgets.com',
            role: 'retailer',
            company: 'Urban Gadgets',
            status: 'pending',
            joinDate: '2025-06-01',
            completionPercentage: 40
          },
          {
            id: '5',
            name: 'Lisa Rodriguez',
            email: 'lisa.rodriguez@naturetech.com',
            role: 'vendor',
            company: 'NatureTech',
            status: 'active',
            lastActive: '2025-05-30T11:05:00',
            joinDate: '2024-10-10',
            avatar: '/profile-pics/lisa.jpg',
            completionPercentage: 100
          },
          {
            id: '6',
            name: 'Robert Taylor',
            email: 'robert.taylor@futuremart.com',
            role: 'retailer',
            company: 'FutureMart',
            status: 'inactive',
            lastActive: '2025-04-15T14:30:00',
            joinDate: '2024-09-22',
            avatar: '/profile-pics/robert.jpg',
            completionPercentage: 75
          },
          {
            id: '7',
            name: 'Jennifer Adams',
            email: 'jennifer.adams@techhome.com',
            role: 'vendor',
            company: 'TechHome',
            status: 'active',
            lastActive: '2025-06-01T10:15:00',
            joinDate: '2025-02-18',
            avatar: '/profile-pics/jennifer.jpg',
            completionPercentage: 88
          },
          {
            id: '8',
            name: 'Carlos Mendez',
            email: 'carlos.mendez@electrohub.com',
            role: 'vendor',
            company: 'ElectroHub',
            status: 'suspended',
            lastActive: '2025-05-20T16:45:00',
            joinDate: '2024-08-30',
            avatar: '/profile-pics/carlos.jpg',
            completionPercentage: 65
          },
          {
            id: '9',
            name: 'Alex Johnson',
            email: 'alex.johnson@connect1to1.com',
            role: 'admin',
            company: 'Connect1to1',
            status: 'active',
            lastActive: '2025-06-04T11:30:00',
            joinDate: '2024-01-15',
            avatar: '/profile-pics/alex.jpg',
            completionPercentage: 100
          },
          {
            id: '10',
            name: 'Maria Garcia',
            email: 'maria.garcia@connect1to1.com',
            role: 'admin',
            company: 'Connect1to1',
            status: 'active',
            lastActive: '2025-06-04T09:45:00',
            joinDate: '2024-03-22',
            avatar: '/profile-pics/maria.jpg',
            completionPercentage: 100
          }
        ];
        
        setUsers(mockUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => {
    // Filter by search query
    if (searchQuery && !user.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !user.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !user.company.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by role
    if (roleFilter && user.role !== roleFilter) {
      return false;
    }
    
    // Filter by status
    if (statusFilter && user.status !== statusFilter) {
      return false;
    }
    
    // Filter by tab
    if (activeTab === 'retailers' && user.role !== 'retailer') {
      return false;
    } else if (activeTab === 'vendors' && user.role !== 'vendor') {
      return false;
    } else if (activeTab === 'admins' && user.role !== 'admin') {
      return false;
    } else if (activeTab === 'pending' && user.status !== 'pending') {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'company') {
      return a.company.localeCompare(b.company);
    } else if (sortBy === 'joinDate') {
      return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
    } else if (sortBy === 'lastActive') {
      if (!a.lastActive) return 1;
      if (!b.lastActive) return -1;
      return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
    } else if (sortBy === 'completion') {
      return b.completionPercentage - a.completionPercentage;
    }
    return 0;
  });

  const getStatusBadge = (status: User['status']) => {
    switch (status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Active
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
        );
      case 'inactive':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Inactive
          </span>
        );
      case 'suspended':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Suspended
          </span>
        );
      default:
        return null;
    }
  };

  const getRoleBadge = (role: User['role']) => {
    switch (role) {
      case 'admin':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Admin
          </span>
        );
      case 'retailer':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Retailer
          </span>
        );
      case 'vendor':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1A4A4C]/20 text-[#1A4A4C]">
            Vendor
          </span>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatLastActive = (timestamp?: string) => {
    if (!timestamp) return 'Never';
    
    const date = new Date(timestamp);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      // Today - show time
      return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (diffInDays === 1) {
      // Yesterday
      return 'Yesterday';
    } else if (diffInDays < 7) {
      // Within a week - show day name
      return date.toLocaleDateString([], { weekday: 'long' });
    } else {
      // Older - show date
      return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">User Management</h1>
            <p className="text-gray-600 mt-1">
              Manage users, roles, and permissions
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="px-4 py-2 bg-[#1A4A4C] text-white rounded-md hover:bg-[#143638] transition-colors">
              Add New User
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4A4C]"></div>
          </div>
        ) : (
          <>
            {/* Filters and Tabs */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A4A4C] focus:border-[#1A4A4C] w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-3 top-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <select
                    className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                  >
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="retailer">Retailer</option>
                    <option value="vendor">Vendor</option>
                  </select>
                  
                  <select
                    className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2 w-full lg:w-auto">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select
                    className="pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1A4A4C] focus:border-[#1A4A4C] sm:text-sm rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="company">Company</option>
                    <option value="joinDate">Join Date</option>
                    <option value="lastActive">Last Active</option>
                    <option value="completion">Profile Completion</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6 border-b border-gray-200">
                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'all'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    All Users
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {users.length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('retailers')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'retailers'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Retailers
                    <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                      {users.filter(u => u.role === 'retailer').length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('vendors')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'vendors'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Vendors
                    <span className="ml-2 bg-[#1A4A4C]/20 text-[#1A4A4C] py-0.5 px-2 rounded-full text-xs">
                      {users.filter(u => u.role === 'vendor').length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('admins')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'admins'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Admins
                    <span className="ml-2 bg-purple-100 text-purple-600 py-0.5 px-2 rounded-full text-xs">
                      {users.filter(u => u.role === 'admin').length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('pending')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'pending'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Pending
                    <span className="ml-2 bg-yellow-100 text-yellow-600 py-0.5 px-2 rounded-full text-xs">
                      {users.filter(u => u.status === 'pending').length}
                    </span>
                  </button>
                </nav>
              </div>
            </div>
            
            {/* User Table */}
            {filteredUsers.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No users found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your filters or search criteria.</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Join Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Active
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Profile
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                {user.avatar ? (
                                  <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                                ) : (
                                  <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10 text-[#1A4A4C] font-bold">
                                    {user.name.charAt(0)}
                                  </div>
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                                <div className="text-xs text-gray-500">{user.company}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getRoleBadge(user.role)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getStatusBadge(user.status)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(user.joinDate)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatLastActive(user.lastActive)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className="bg-[#1A4A4C] h-2.5 rounded-full" 
                                  style={{ width: `${user.completionPercentage}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500">{user.completionPercentage}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <Link 
                                href={`/admin/users/${user.id}`}
                                className="text-[#1A4A4C] hover:text-[#143638]"
                              >
                                View
                              </Link>
                              <Link 
                                href={`/admin/users/${user.id}/edit`}
                                className="text-[#1A4A4C] hover:text-[#143638]"
                              >
                                Edit
                              </Link>
                              <button 
                                className="text-red-600 hover:text-red-900"
                                onClick={() => {
                                  if (confirm(`Are you sure you want to delete ${user.name}?`)) {
                                    // In a real app, this would call an API to delete the user
                                    alert('User would be deleted in a real app');
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of{' '}
                        <span className="font-medium">{filteredUsers.length}</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Previous</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button aria-current="page" className="z-10 bg-[#1A4A4C] border-[#1A4A4C] text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                          1
                        </button>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Next</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
