import React from 'react';
import Image from 'next/image';

// This component creates a video production plan for the demo video
export default function VideoProduction() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-[#1A4A4C]">Connect1to1 Demo Video Production</h3>
        <p className="mt-1 text-sm text-gray-500">Final video production plan and assets</p>
      </div>
      
      <div className="p-6">
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Video Production Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">Technical Specifications</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-32 font-medium">Resolution:</span>
                  <span>1920x1080 (Full HD)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Format:</span>
                  <span>MP4 (H.264)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Duration:</span>
                  <span>3:45</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Frame Rate:</span>
                  <span>30fps</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Audio:</span>
                  <span>AAC, 48kHz, Stereo</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">Production Assets</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-32 font-medium">Script:</span>
                  <a href="/demo-video-script.txt" download className="text-[#1A4A4C] hover:text-[#C99B2D]">Download Script</a>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Storyboard:</span>
                  <a href="/demo-video-storyboard.pdf" download className="text-[#1A4A4C] hover:text-[#C99B2D]">Download Storyboard</a>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Logo:</span>
                  <a href="/logo.png" download className="text-[#1A4A4C] hover:text-[#C99B2D]">Download Logo</a>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Music:</span>
                  <span>Corporate Inspiration (Royalty Free)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Voice Over:</span>
                  <span>Professional English Narrator</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Video Distribution</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <h5 className="font-medium text-gray-900">Website</h5>
                </div>
                <p className="text-sm text-gray-600">Embedded on How It Works page and dashboard</p>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <h5 className="font-medium text-gray-900">YouTube</h5>
                </div>
                <p className="text-sm text-gray-600">Uploaded to company channel for wider reach</p>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <h5 className="font-medium text-gray-900">Social Media</h5>
                </div>
                <p className="text-sm text-gray-600">Shared on LinkedIn, Twitter, and Facebook</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-900 mb-4">Final Video Preview</h4>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#1A4A4C]/10 to-[#C99B2D]/10 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#1A4A4C] text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Connect1to1: Match. Connect. Grow.</h3>
                <p className="mt-2 text-gray-600">Click to play the full demonstration video</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <a href="/demo-video.mp4" download className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#1A4A4C] hover:bg-[#143638]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Final Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
