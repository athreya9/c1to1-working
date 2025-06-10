/**
 * MatchCard Component for Connect1to1 Platform
 * 
 * This component displays match information with functional action buttons.
 * It fixes the issue where match view buttons are non-functional.
 */

import { useState } from 'react';
import ActionButton from './ActionButton';
import { useRouter } from 'next/router';
import { useAuth } from '../../auth/authService';

export default function MatchCard({ match, onViewMatch }) {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  
  // Handle view match button click
  const handleViewMatch = () => {
    setLoading(true);
    if (onViewMatch) {
      onViewMatch(match.id);
    } else {
      // Default behavior if no custom handler provided
      router.push(`/${user.role}/matches/${match.id}`);
    }
  };
  
  // Format match score for display
  const formatMatchScore = (score) => {
    return `${Math.round(score)}%`;
  };
  
  // Determine match status color
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'new match':
        return 'bg-blue-100 text-blue-800';
      case 'meeting scheduled':
        return 'bg-green-100 text-green-800';
      case 'pending response':
        return 'bg-yellow-100 text-yellow-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-purple-100 text-purple-800';
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
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition hover:shadow-md">
      <div className="flex items-start">
        {/* Company Avatar */}
        <div className="h-12 w-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {getCompanyInitials(match.companyName)}
        </div>
        
        {/* Match Info */}
        <div className="ml-4 flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{match.companyName}</h3>
              <p className="text-sm text-gray-500">{match.industry || match.category}</p>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-teal-600">{formatMatchScore(match.matchScore || match.score)}</span>
              <span className="ml-1 text-xs text-gray-500">match</span>
            </div>
          </div>
          
          <div className="mt-2 flex flex-wrap gap-2">
            {match.tags && match.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
            
            {match.category && !match.tags && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                {match.category}
              </span>
            )}
          </div>
          
          <div className="mt-3 flex justify-between items-center">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(match.status)}`}>
              {match.status}
            </span>
            <ActionButton
              variant="primary"
              size="sm"
              onClick={handleViewMatch}
              loading={loading}
            >
              View
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
