
'use client';

import React, { useState, useEffect } from 'react';

// Mock news data (replace with actual API call in a real app)
const mockNews = [
  { id: 1, title: 'Retail Trends: Adapting to Post-Pandemic Consumer Behavior', source: 'Retail Gazette', date: '2025-06-02', url: '#' },
  { id: 2, title: 'Supply Chain Disruptions Continue: Strategies for Vendors', source: 'Supply Chain Dive', date: '2025-06-01', url: '#' },
  { id: 3, title: 'E-commerce Growth Slows But Remains Strong', source: 'Digital Commerce 360', date: '2025-05-31', url: '#' },
  { id: 4, title: 'Sustainability in Retail: What Vendors Need to Know', source: 'Green Retail World', date: '2025-05-30', url: '#' },
  { id: 5, title: 'New Tech Transforming In-Store Experiences', source: 'TechCrunch', date: '2025-05-29', url: '#' },
];

export default function TrendingNews() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching news data
    const fetchNews = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 700)); // Simulate network delay
      setNewsItems(mockNews);
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-c1to1-teal">Industry News & Trends</h2>
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-4">
          {newsItems.map((item) => (
            <li key={item.id} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50 p-2 -m-2 rounded-md transition-colors duration-150">
                <h3 className="text-sm font-medium text-gray-800 hover:text-c1to1-teal truncate">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {item.source} - {item.date}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-right">
         <a href="#" className="text-sm font-medium text-c1to1-teal hover:text-c1to1-teal/80">View More News &rarr;</a>
      </div>
    </div>
  );
}

