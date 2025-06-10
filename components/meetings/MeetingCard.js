/**
 * MeetingCard Component for Connect1to1 Platform
 * 
 * This component displays meeting information with functional action buttons.
 * It fixes the issue where meeting action buttons (Join, Reschedule, Cancel) are non-functional.
 */

import { useState } from 'react';
import ActionButton from '../buttons/ActionButton';
import { useRouter } from 'next/router';
import { useAuth } from '../../auth/authService';

export default function MeetingCard({ meeting, onJoin, onReschedule, onCancel, onViewNotes }) {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState({
    join: false,
    reschedule: false,
    cancel: false,
    viewNotes: false
  });
  
  // Handle join meeting button click
  const handleJoin = () => {
    setLoading({ ...loading, join: true });
    if (onJoin) {
      onJoin(meeting.id);
    } else {
      // Default behavior if no custom handler provided
      window.open(meeting.meetingUrl || `https://meet.connect1to1.com/${meeting.id}`, '_blank');
      setTimeout(() => {
        setLoading({ ...loading, join: false });
      }, 1000);
    }
  };
  
  // Handle reschedule meeting button click
  const handleReschedule = () => {
    setLoading({ ...loading, reschedule: true });
    if (onReschedule) {
      onReschedule(meeting.id);
    } else {
      // Default behavior if no custom handler provided
      router.push(`/${user.role}/meetings/${meeting.id}/reschedule`);
    }
  };
  
  // Handle cancel meeting button click
  const handleCancel = () => {
    setLoading({ ...loading, cancel: true });
    if (onCancel) {
      onCancel(meeting.id);
    } else {
      // Default behavior if no custom handler provided
      router.push(`/${user.role}/meetings/${meeting.id}/cancel`);
    }
  };
  
  // Handle view notes button click
  const handleViewNotes = () => {
    setLoading({ ...loading, viewNotes: true });
    if (onViewNotes) {
      onViewNotes(meeting.id);
    } else {
      // Default behavior if no custom handler provided
      router.push(`/${user.role}/meetings/${meeting.id}/notes`);
    }
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  // Format time for display
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };
  
  // Determine meeting status color
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get company initials for avatar
  const getCompanyInitials = (name) => {
    if (!name) return 'CO';
    
    const words = name.split(' ');
    if (words.length === 1) {
      return name.substring(0, 2).toUpperCase();
    }
    
    return (words[0][0] + words[1][0]).toUpperCase();
  };
  
  // Render appropriate action buttons based on meeting status
  const renderActionButtons = () => {
    switch (meeting.status.toLowerCase()) {
      case 'upcoming':
        return (
          <div className="flex space-x-2">
            <ActionButton
              variant="primary"
              size="sm"
              onClick={handleJoin}
              loading={loading.join}
            >
              Join
            </ActionButton>
            <ActionButton
              variant="secondary"
              size="sm"
              onClick={handleReschedule}
              loading={loading.reschedule}
            >
              Reschedule
            </ActionButton>
            <ActionButton
              variant="danger"
              size="sm"
              onClick={handleCancel}
              loading={loading.cancel}
              confirmMessage="Are you sure you want to cancel this meeting?"
            >
              Cancel
            </ActionButton>
          </div>
        );
      case 'pending':
        return (
          <div className="flex space-x-2">
            <ActionButton
              variant="primary"
              size="sm"
              onClick={handleJoin}
              loading={loading.join}
            >
              Accept
            </ActionButton>
            <ActionButton
              variant="danger"
              size="sm"
              onClick={handleCancel}
              loading={loading.cancel}
              confirmMessage="Are you sure you want to decline this meeting?"
            >
              Decline
            </ActionButton>
          </div>
        );
      case 'completed':
        return (
          <ActionButton
            variant="secondary"
            size="sm"
            onClick={handleViewNotes}
            loading={loading.viewNotes}
          >
            View Notes
          </ActionButton>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition hover:shadow-md">
      <div className="flex items-start">
        {/* Company Avatar */}
        <div className="h-12 w-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {getCompanyInitials(meeting.companyName)}
        </div>
        
        {/* Meeting Info */}
        <div className="ml-4 flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{meeting.companyName}</h3>
              <p className="text-sm text-gray-500">{meeting.topic || meeting.description}</p>
            </div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`}>
              {meeting.status}
            </span>
          </div>
          
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formatDate(meeting.date || meeting.startTime)}</span>
            <span className="mx-1">•</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatTime(meeting.date || meeting.startTime)}</span>
            <span className="mx-1">•</span>
            <span>{meeting.duration} min</span>
          </div>
          
          <div className="mt-3 flex justify-end">
            {renderActionButtons()}
          </div>
        </div>
      </div>
    </div>
  );
}
