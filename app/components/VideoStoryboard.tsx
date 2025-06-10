import React from 'react';
import Image from 'next/image';

// This component creates a video storyboard for the demo video
export default function VideoStoryboard() {
  const scenes = [
    {
      title: "Introduction",
      description: "Welcome to Connect1to1, the exclusive B2B matchmaking platform",
      image: "intro-scene.jpg"
    },
    {
      title: "Registration Process",
      description: "Vendors and retailers register privately on the platform",
      image: "registration-scene.jpg"
    },
    {
      title: "Profile Completion",
      description: "Complete your profile with business details and preferences",
      image: "profile-scene.jpg"
    },
    {
      title: "AI Matchmaking",
      description: "Our algorithm analyzes multiple factors to find compatible partners",
      image: "matching-scene.jpg"
    },
    {
      title: "Match Notification",
      description: "Receive notifications when a match is found",
      image: "notification-scene.jpg"
    },
    {
      title: "Dashboard Overview",
      description: "View your matches, meetings, and notifications",
      image: "dashboard-scene.jpg"
    },
    {
      title: "Meeting Scheduling",
      description: "Schedule meetings directly through the platform",
      image: "meeting-scene.jpg"
    },
    {
      title: "Call to Action",
      description: "Sign up today and transform how you connect with business partners",
      image: "cta-scene.jpg"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-[#1A4A4C]">Connect1to1 Demo Video Storyboard</h3>
        <p className="mt-1 text-sm text-gray-500">Preview of our platform demonstration video</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scenes.map((scene, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <div className="w-full h-full bg-gradient-to-br from-[#1A4A4C]/10 to-[#C99B2D]/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#1A4A4C] text-white text-sm font-bold mb-2">
                      {index + 1}
                    </div>
                    <h4 className="text-sm font-medium text-gray-900">{scene.title}</h4>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500">{scene.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span className="font-medium">Duration:</span> 3:45
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-[#1A4A4C] text-white text-sm font-medium rounded hover:bg-[#143638]">
              Preview
            </button>
            <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50">
              Download Script
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Connect1to1 Logo" 
              width={100} 
              height={30} 
              className="h-6 w-auto"
            />
            <span className="ml-2 text-sm text-gray-500">© 2025 Connect1to1</span>
          </div>
          <a href="/demo-video.mp4" download className="text-sm text-[#1A4A4C] hover:text-[#C99B2D] font-medium">
            Download Full Video
          </a>
        </div>
      </div>
    </div>
  );
}
