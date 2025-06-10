'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardLayout from '../components/layout/DashboardLayout';

interface Meeting {
  id: string;
  company: string;
  logo?: string;
  contactName: string;
  contactRole?: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'completed' | 'cancelled' | 'rescheduled';
  type: 'video' | 'in_person' | 'phone';
  location?: string;
  notes?: string;
  agenda?: string[];
}

export default function MeetingsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [activeTab, setActiveTab] = useState<string>('upcoming');
  
  useEffect(() => {
    // Simulate API call to get meetings
    const fetchMeetings = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        const mockMeetings: Meeting[] = [
          {
            id: '1',
            company: 'EcoShop',
            logo: '/company-logos/ecoshop.png',
            contactName: 'Sarah Johnson',
            contactRole: 'Purchasing Manager',
            date: '2025-06-10',
            time: '10:00 AM',
            duration: '45 minutes',
            status: 'upcoming',
            type: 'video',
            notes: 'Discuss inventory management solutions and integration possibilities.',
            agenda: [
              'Introduction and company overview',
              'Product demonstration',
              'Integration requirements',
              'Pricing and next steps'
            ]
          },
          {
            id: '2',
            company: 'GreenRetail',
            logo: '/company-logos/greenretail.png',
            contactName: 'Emma Wilson',
            contactRole: 'Sustainability Officer',
            date: '2025-06-12',
            time: '2:30 PM',
            duration: '60 minutes',
            status: 'upcoming',
            type: 'in_person',
            location: 'GreenRetail HQ, 123 Eco Street, San Francisco, CA',
            notes: 'Bring product samples and sustainability certification documents.',
            agenda: [
              'Sustainability initiatives overview',
              'Product demonstration',
              'Partnership opportunities',
              'Implementation timeline'
            ]
          },
          {
            id: '3',
            company: 'TechMart',
            logo: '/company-logos/techmart.png',
            contactName: 'Michael Chen',
            contactRole: 'Technology Director',
            date: '2025-06-05',
            time: '11:15 AM',
            duration: '30 minutes',
            status: 'completed',
            type: 'video',
            notes: 'Initial discussion about inventory management needs. They are interested in a follow-up demo.',
            agenda: [
              'Introduction and needs assessment',
              'High-level solution overview',
              'Q&A',
              'Schedule follow-up demo'
            ]
          },
          {
            id: '4',
            company: 'Urban Gadgets',
            logo: '/company-logos/urbangadgets.png',
            contactName: 'David Park',
            contactRole: 'Innovation Lead',
            date: '2025-06-15',
            time: '3:00 PM',
            duration: '45 minutes',
            status: 'upcoming',
            type: 'phone',
            notes: 'Focus on mobile integration capabilities and customer analytics features.',
            agenda: [
              'Mobile integration overview',
              'Customer analytics capabilities',
              'Implementation requirements',
              'Pricing discussion'
            ]
          },
          {
            id: '5',
            company: 'FutureMart',
            logo: '/company-logos/futuremart.png',
            contactName: 'Robert Taylor',
            contactRole: 'CTO',
            date: '2025-05-28',
            time: '1:00 PM',
            duration: '60 minutes',
            status: 'cancelled',
            type: 'in_person',
            location: 'FutureMart HQ, 456 Tech Avenue, New York, NY',
            notes: 'Meeting cancelled by client due to internal restructuring. Follow up in 2 weeks.'
          },
          {
            id: '6',
            company: 'NatureTech',
            logo: '/company-logos/naturetech.png',
            contactName: 'Lisa Rodriguez',
            contactRole: 'Partnerships Director',
            date: '2025-05-30',
            time: '10:30 AM',
            duration: '45 minutes',
            status: 'rescheduled',
            type: 'video',
            notes: 'Originally scheduled for May 25th. Rescheduled due to conflict with their board meeting.',
            agenda: [
              'Partnership model discussion',
              'Integration timeline',
              'Marketing collaboration',
              'Contract details'
            ]
          },
          {
            id: '7',
            company: 'TechHome',
            logo: '/company-logos/techhome.png',
            contactName: 'Jennifer Adams',
            contactRole: 'Product Manager',
            date: '2025-06-18',
            time: '9:00 AM',
            duration: '30 minutes',
            status: 'upcoming',
            type: 'video',
            notes: 'Initial discovery call to understand their smart home integration needs.',
            agenda: [
              'Introduction and company overview',
              'Needs assessment',
              'Potential solutions',
              'Next steps'
            ]
          }
        ];
        
        setMeetings(mockMeetings);
      } catch (error) {
        console.error('Error fetching meetings:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMeetings();
  }, []);

  const filteredMeetings = meetings.filter(meeting => {
    if (activeTab === 'upcoming') {
      return meeting.status === 'upcoming';
    } else if (activeTab === 'completed') {
      return meeting.status === 'completed';
    } else if (activeTab === 'cancelled') {
      return meeting.status === 'cancelled' || meeting.status === 'rescheduled';
    }
    return true;
  });

  const getStatusBadge = (status: Meeting['status']) => {
    switch (status) {
      case 'upcoming':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Upcoming
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Cancelled
          </span>
        );
      case 'rescheduled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Rescheduled
          </span>
        );
      default:
        return null;
    }
  };

  const getMeetingTypeIcon = (type: Meeting['type']) => {
    switch (type) {
      case 'video':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'in_person':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'phone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Meetings</h1>
            <p className="text-gray-600 mt-1">
              Schedule and manage your business meetings
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link 
              href="/meetings/schedule"
              className="px-4 py-2 bg-[#1A4A4C] text-white rounded-md hover:bg-[#143638] transition-colors"
            >
              Schedule New Meeting
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4A4C]"></div>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'all'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    All Meetings
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {meetings.length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'upcoming'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Upcoming
                    <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                      {meetings.filter(m => m.status === 'upcoming').length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('completed')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'completed'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Completed
                    <span className="ml-2 bg-green-100 text-green-600 py-0.5 px-2 rounded-full text-xs">
                      {meetings.filter(m => m.status === 'completed').length}
                    </span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('cancelled')}
                    className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'cancelled'
                        ? 'border-[#1A4A4C] text-[#1A4A4C]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Cancelled/Rescheduled
                    <span className="ml-2 bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs">
                      {meetings.filter(m => m.status === 'cancelled' || m.status === 'rescheduled').length}
                    </span>
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Meeting Cards */}
            <div className="space-y-6">
              {filteredMeetings.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No meetings found</h3>
                  <p className="mt-1 text-gray-500">
                    {activeTab === 'upcoming' 
                      ? "You don't have any upcoming meetings scheduled." 
                      : activeTab === 'completed'
                      ? "You don't have any completed meetings."
                      : activeTab === 'cancelled'
                      ? "You don't have any cancelled or rescheduled meetings."
                      : "You don't have any meetings."}
                  </p>
                  <div className="mt-6">
                    <Link 
                      href="/meetings/schedule"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                    >
                      Schedule a Meeting
                    </Link>
                  </div>
                </div>
              ) : (
                filteredMeetings.map((meeting) => (
                  <div key={meeting.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center mr-4 overflow-hidden">
                            {meeting.logo ? (
                              <img src={meeting.logo} alt={meeting.company} className="h-full w-full object-contain" />
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold text-gray-900">{meeting.company}</h2>
                            <div className="flex flex-wrap items-center mt-1">
                              <span className="text-gray-500 text-sm">{meeting.contactName}</span>
                              {meeting.contactRole && (
                                <>
                                  <span className="text-gray-500 text-sm mx-2">•</span>
                                  <span className="text-gray-500 text-sm">{meeting.contactRole}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 flex flex-col items-end">
                          <div>
                            {getStatusBadge(meeting.status)}
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            {getMeetingTypeIcon(meeting.type)}
                            <span className="ml-1">{meeting.type === 'video' ? 'Video Call' : meeting.type === 'in_person' ? 'In Person' : 'Phone Call'}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-500">Date</span>
                          <span className="mt-1 text-gray-900">{formatDate(meeting.date)}</span>
                        </div>
                        
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-500">Time</span>
                          <span className="mt-1 text-gray-900">{meeting.time} ({meeting.duration})</span>
                        </div>
                        
                        {meeting.location && (
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-500">Location</span>
                            <span className="mt-1 text-gray-900">{meeting.location}</span>
                          </div>
                        )}
                      </div>
                      
                      {meeting.notes && (
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-700">Notes:</h3>
                          <p className="mt-1 text-gray-600">{meeting.notes}</p>
                        </div>
                      )}
                      
                      {meeting.agenda && (
                        <div className="mt-4">
                          <h3 className="text-sm font-medium text-gray-700">Agenda:</h3>
                          <ul className="mt-1 text-sm text-gray-600 space-y-1 list-disc list-inside">
                            {meeting.agenda.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mt-6 flex flex-wrap gap-3">
                        {meeting.status === 'upcoming' && (
                          <>
                            <Link 
                              href={`/meetings/${meeting.id}`}
                              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              View Details
                            </Link>
                            
                            <Link 
                              href={`/meetings/join/${meeting.id}`}
                              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              Join Meeting
                            </Link>
                            
                            <Link 
                              href={`/meetings/edit/${meeting.id}`}
                              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              Edit
                            </Link>
                            
                            <button 
                              className="inline-flex items-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              Cancel Meeting
                            </button>
                          </>
                        )}
                        
                        {meeting.status === 'completed' && (
                          <>
                            <Link 
                              href={`/meetings/${meeting.id}`}
                              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              View Details
                            </Link>
                            
                            <button 
                              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              Add Notes
                            </button>
                            
                            <button 
                              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              Schedule Follow-up
                            </button>
                          </>
                        )}
                        
                        {(meeting.status === 'cancelled' || meeting.status === 'rescheduled') && (
                          <>
                            <Link 
                              href={`/meetings/${meeting.id}`}
                              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              View Details
                            </Link>
                            
                            <button 
                              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1A4A4C] hover:bg-[#143638] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A4A4C]"
                            >
                              Reschedule
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
