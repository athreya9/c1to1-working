'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useAnalytics from '../utils/analyticsService';

// Enhanced component for user engagement through gamification and achievements
export default function UserEngagement() {
  const { trackEvent } = useAnalytics();
  const pathname = usePathname();
  const [achievements, setAchievements] = useState([]);
  const [showAchievementPopup, setShowAchievementPopup] = useState(false);
  const [newAchievement, setNewAchievement] = useState(null);
  const [progress, setProgress] = useState({
    profileCompletion: 65,
    connectionsGoal: 40,
    meetingsGoal: 30,
    messagesGoal: 75
  });

  // Simulate loading achievements
  useEffect(() => {
    // In a real app, this would be an API call
    const mockAchievements = [
      {
        id: 1,
        title: 'Profile Pro',
        description: 'Complete your profile to 100%',
        icon: '👤',
        progress: 65,
        completed: false,
        date: null
      },
      {
        id: 2,
        title: 'Networking Novice',
        description: 'Make your first 5 connections',
        icon: '🔗',
        progress: 100,
        completed: true,
        date: '2025-05-20'
      },
      {
        id: 3,
        title: 'Meeting Master',
        description: 'Schedule and complete 10 meetings',
        icon: '📅',
        progress: 30,
        completed: false,
        date: null
      },
      {
        id: 4,
        title: 'Conversation Champion',
        description: 'Exchange 50 messages with connections',
        icon: '💬',
        progress: 75,
        completed: false,
        date: null
      }
    ];
    
    setAchievements(mockAchievements);
    
    // Simulate unlocking a new achievement after 3 seconds
    const timer = setTimeout(() => {
      const newAchievement = {
        id: 5,
        title: 'Explorer',
        description: 'Visit 5 different sections of the platform',
        icon: '🧭',
        progress: 100,
        completed: true,
        date: new Date().toISOString().split('T')[0]
      };
      
      setNewAchievement(newAchievement);
      setShowAchievementPopup(true);
      setAchievements(prev => [...prev, newAchievement]);
      
      // Track achievement unlocked
      trackEvent('achievement_unlocked', {
        achievement_id: newAchievement.id,
        achievement_title: newAchievement.title
      });
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [trackEvent]);

  // Close achievement popup
  const handleClosePopup = () => {
    setShowAchievementPopup(false);
  };

  return (
    <div className="space-y-6">
      {/* Progress overview */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Your Progress</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProgressCard 
              title="Profile Completion" 
              value={progress.profileCompletion} 
              icon="👤"
              href="/profile"
            />
            <ProgressCard 
              title="Connections" 
              value={progress.connectionsGoal} 
              icon="🔗"
              href="/connections"
            />
            <ProgressCard 
              title="Meetings" 
              value={progress.meetingsGoal} 
              icon="📅"
              href="/meetings"
            />
            <ProgressCard 
              title="Messages" 
              value={progress.messagesGoal} 
              icon="💬"
              href="/messages"
            />
          </div>
        </div>
      </div>
      
      {/* Achievements */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Your Achievements</h3>
            <Link href="/achievements" className="text-sm font-medium text-primary-600 hover:text-primary-500">
              View all
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <AchievementCard 
                key={achievement.id}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                progress={achievement.progress}
                completed={achievement.completed}
                date={achievement.date}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Daily tips */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Daily Tips</h3>
          <div className="mt-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Pro Tip:</strong> Complete your profile to increase your match quality by up to 40%. Add your company logo, product categories, and detailed descriptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Achievement popup */}
      {showAchievementPopup && newAchievement && (
        <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transform transition-all sm:max-w-md">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-xl">
                    {newAchievement.icon}
                  </div>
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">
                    Achievement Unlocked!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    <strong>{newAchievement.title}</strong>: {newAchievement.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    onClick={handleClosePopup}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Progress card component
function ProgressCard({ title, value, icon, href }) {
  return (
    <Link href={href} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-primary-100 rounded-md p-3 text-2xl">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="mt-1">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div 
                        style={{ width: `${value}%` }} 
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                          value >= 100 
                            ? 'bg-green-500' 
                            : value >= 70 
                              ? 'bg-primary-500' 
                              : value >= 40 
                                ? 'bg-yellow-500' 
                                : 'bg-red-500'
                        }`}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div>
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          {value}%
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          Goal: 100%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Achievement card component
function AchievementCard({ title, description, icon, progress, completed, date }) {
  return (
    <div className={`bg-white overflow-hidden shadow rounded-lg border ${completed ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl">
            {icon}
          </div>
          {completed && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Completed
            </span>
          )}
        </div>
        <h4 className="mt-2 text-lg font-medium text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        
        {!completed && (
          <div className="mt-3">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div 
                  style={{ width: `${progress}%` }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                ></div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div>
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    {progress}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {completed && date && (
          <div className="mt-3 text-xs text-gray-500">
            Completed on {date}
          </div>
        )}
      </div>
    </div>
  );
}
