'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/auth/authService'; // This now definitively points to auth/authService.js
import useAnalytics from '@/utils/analyticsService';
import FileUploader from '@/components/FileUploader'; // Keep if used in this component's logic

interface UploadedFile {
  name: string;
  size: string;
  type: string;
  date: string;
}

interface ProfilePictureUploaderProps {
  currentPictureUrl?: string;
  onUploadSuccess: (url: string) => void;
  userId: string;
}

const ProfilePictureUploader: React.FC<ProfilePictureUploaderProps> = ({ currentPictureUrl, onUploadSuccess, userId }) => {
  const { user } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentPictureUrl || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    if (currentPictureUrl) {
      setPreviewUrl(currentPictureUrl);
    }
  }, [currentPictureUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setError(null);
      trackEvent('profile_picture_selected');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const mockUploadUrl = `/uploads/<span class="math-inline">\{userId\}\_</span>{file.name}`;
      await new Promise(resolve => setTimeout(resolve, 1500));

      onUploadSuccess(mockUploadUrl);
      trackEvent('profile_picture_uploaded', { userId: userId, fileName: file.name });
      alert("Profile picture uploaded successfully! (Simulated)");
    } catch (err) {
      setError("Failed to upload picture. Please try again.");
      trackEvent('profile_picture_upload_failed', { userId: userId, error: (err as Error).message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Upload Profile Picture</h2>

      {previewUrl && (
        <div className="mb-4">
          <img 
            src={previewUrl} 
            alt="Profile Preview" 
            className="w-32 h-32 rounded-full object-cover border-2 border-primary-500" 
          />
        </div>
      )}

      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        className="mb-4 p-2 border rounded"
      />

      <button 
        onClick={handleUpload} 
        disabled={!file || isLoading}
        className={`px-6 py-2 rounded-lg text-white font-medium transition-colors duration-200 
                    ${!file || isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'}`}
      >
        {isLoading ? 'Uploading...' : 'Upload Picture'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ProfilePictureUploader;