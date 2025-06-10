import React from 'react';

// This component creates a video thumbnail with play button for the demo video
export default function VideoThumbnail() {
  return (
    <div className="relative">
      {/* Video Thumbnail */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
          {/* Connect1to1 Logo Watermark */}
          <div className="absolute top-4 left-4 opacity-30">
            <img src="/logo.png" alt="Connect1to1 Logo" className="h-8 w-auto" />
          </div>
          
          {/* Play Button */}
          <div className="relative z-10">
            <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-[#1A4A4C] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white">How Connect1to1 Works</h3>
            <p className="mt-2 text-white/80">Click to watch our platform demo</p>
          </div>
          
          {/* Visual Elements */}
          <div className="absolute inset-0 z-0">
            {/* Abstract Connection Lines */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1A4A4C" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C99B2D" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M0,100 Q150,50 300,200 T600,100" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path d="M0,200 Q250,150 400,250 T800,150" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path d="M100,0 Q200,150 300,100 T500,300" stroke="url(#grad1)" strokeWidth="2" fill="none" />
            </svg>
            
            {/* Dots representing connections */}
            <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-[#C99B2D]/60"></div>
            <div className="absolute top-3/4 left-2/3 h-3 w-3 rounded-full bg-[#C99B2D]/60"></div>
            <div className="absolute top-1/3 left-3/4 h-3 w-3 rounded-full bg-[#1A4A4C]/60"></div>
            <div className="absolute top-2/3 left-1/3 h-3 w-3 rounded-full bg-[#1A4A4C]/60"></div>
          </div>
        </div>
      </div>
      
      {/* Video Duration */}
      <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-xs text-white">
        3:45
      </div>
    </div>
  );
}
