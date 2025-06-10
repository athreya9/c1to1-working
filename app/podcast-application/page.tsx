'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/auth/authService'; // This now definitively points to auth/authService.js
import DemoVideo from '@/components/DemoVideo';
import FileUploader from '@/components/FileUploader';
import ProfilePictureUploader from '@/components/ProfilePictureUploader';
import useAnalytics from '@/utils/analyticsService';

interface UploadedFile {
  name: string;
  size: string;
  type: string;
  date: string;
}

export default function PodcastApplicationPage() {
  // useAuth returns an object with user, loading, login, logout, etc.
  // Based on auth/authService.js, it returns: user, loading, login, demoLogin, logout, hasRole, hasPermission
  const { user, login, logout } = useAuth();
  const { trackEvent } = useAnalytics();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [showAuthMessage, setShowAuthMessage] = useState(false);

  useEffect(() => {
    trackEvent('page_view', { page: 'podcast_application' });
  }, [trackEvent]);

  const handleUploadSuccess = (url: string) => {
    const newFile: UploadedFile = {
      name: url.split('/').pop() || 'uploaded-file',
      size: 'N/A',
      type: 'N/A',
      date: new Date().toLocaleDateString(),
    };
    setUploadedFiles((prev) => [...prev, newFile]);
    console.log('File uploaded successfully:', url);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setShowAuthMessage(true);
      trackEvent('podcast_form_submission_failed', { reason: 'not_authenticated' });
      return;
    }
    setShowAuthMessage(false);
    trackEvent('podcast_form_submitted', { userId: user.id });
    alert('Podcast application submitted! (Simulated)');
  };

  const demoVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center my-6">Podcast Application</h1>

      <p className="text-lg text-center mb-8">
        Apply to be featured on our Connect1to1 podcast and share your industry insights with our community.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <DemoVideo
          videoUrl={demoVideoUrl}
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          description="A classic example of video content."
        />
        <h2 className="text-2xl font-semibold mt-6 mb-4">Connect1to1 Podcast Examples</h2>
        <p className="text-gray-600 mb-4">
          Watch examples of previous podcast episodes to get a feel for our format and style.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Podcast Application Form</h2>
        <p className="text-gray-600 mb-4">
          Please provide the following information to apply for our podcast.
        </p>
        {!user && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
            <p className="font-bold">Authentication Required</p>
            <p>Please <Link href="/login" className="text-yellow-800 underline">log in</Link> or <Link href="/signup" className="text-yellow-800 underline">sign up</Link> to submit your application.</p>
          </div>
        )}
        {showAuthMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p className="font-bold">Error</p>
            <p>You must be logged in to submit a podcast application.</p>
          </div>
        )}

        <form onSubmit={handleSubmitForm} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First name</label>
            <input type="text" id="firstName" name="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last name</label>
            <input type="text" id="lastName" name="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div>
            <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">Proposed Topic</label>
            <textarea id="topic" name="topic" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>

          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Upload Supplementary Materials</h3>
            <FileUploader onUploadSuccess={handleUploadSuccess} />
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <p className="text-gray-700 font-semibold">Uploaded Files:</p>
                <ul className="list-disc list-inside">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="text-gray-600">{file.name} - {file.date}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {user && (
            <div className="border p-4 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-2">Upload Profile Picture (Optional)</h3>
              <ProfilePictureUploader onUploadSuccess={(url) => console.log('Profile picture uploaded:', url)} userId={user.id || 'guest-user-id'} />
            </div>
          )}

          <button
            type="submit"
            disabled={!user}
            className={`w-full px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200 
                        ${!user ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}