'use client';

import React, { useState, useEffect, useRef } from 'react';

interface DemoVideoProps {
  videoUrl?: string;
  title?: string;
  description?: string;
  videoId?: string;
}

const DemoVideo: React.FC<DemoVideoProps> = ({ 
  videoUrl = '/demo-video.mp4',
  title,
  description,
  videoId
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isYouTubeUrl, setIsYouTubeUrl] = useState(false);
  const [youtubeEmbedUrl, setYoutubeEmbedUrl] = useState('');

  // Check if URL is a YouTube URL and format it for embedding
  useEffect(() => {
    if (videoUrl) {
      const isYoutube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
      setIsYouTubeUrl(isYoutube);
      
      if (isYoutube) {
        let embedUrl = '';
        if (videoUrl.includes('youtube.com/watch')) {
          const videoIdMatch = videoUrl.match(/v=([^&]+)/);
          if (videoIdMatch && videoIdMatch[1]) {
            embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
          }
        } else if (videoUrl.includes('youtu.be')) {
          const videoIdMatch = videoUrl.match(/youtu\.be\/([^?]+)/);
          if (videoIdMatch && videoIdMatch[1]) {
            embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
          }
        }
        setYoutubeEmbedUrl(embedUrl || videoUrl);
      }
    }
  }, [videoUrl]);

  // Set up video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isYouTubeUrl) return;
    
    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };
    
    const handleDurationChange = () => {
      setDuration(video.duration);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      if (video) {
        video.currentTime = 0;
      }
    };
    
    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('ended', handleEnded);
    
    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('durationchange', handleDurationChange);
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, [isYouTubeUrl]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video || isYouTubeUrl) {
        return;
    }
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || isYouTubeUrl) return;
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-black">
      {isYouTubeUrl ? (
        <iframe
          className="w-full aspect-video"
          src={youtubeEmbedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-auto"
          poster="/demo-video-thumbnail.jpg" // Corrected path based on your files
          preload="metadata"
          controls
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {!isYouTubeUrl && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="bg-primary-600 bg-opacity-75 hover:bg-opacity-100 text-white rounded-full p-4 transition-all duration-200 transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={togglePlay}
                className="text-white"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              <div className="text-white text-xs">
                {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
              </div>
              <div
                className="flex-1 h-2 bg-gray-700 rounded-full cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-primary-600 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DemoVideo;
