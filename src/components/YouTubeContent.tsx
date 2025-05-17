import React, { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';

const categories = [
  'All Content',
  'Email Tips',
  'Visa & Immigration',
  'Funding',
  'Application Process'
];

const videos = [
  {
    id: '1',
    title: 'How to Write a Statement of Purpose for Graduate School',
    thumbnail: 'https://i.ytimg.com/vi/XQYH_ldWdPg/maxresdefault.jpg',
    duration: '12:47',
    category: 'Application Process',
    url: 'https://www.youtube.com/watch?v=XQYH_ldWdPg'
  },
  {
    id: '2',
    title: 'Things that Annoy Professors in Student Emails',
    thumbnail: 'https://i.ytimg.com/vi/_bfn-edXLNU/maxresdefault.jpg',
    duration: '8:15',
    category: 'Email Tips',
    url: 'https://www.youtube.com/watch?v=_bfn-edXLNU'
  },
  {
    id: '3',
    title: 'How to Send Cold Emails to Professors',
    thumbnail: 'https://i.ytimg.com/vi/WFNNUJo8Omc/maxresdefault.jpg',
    duration: '10:30',
    category: 'Email Tips',
    url: 'https://www.youtube.com/watch?v=WFNNUJo8Omc'
  },
  {
    id: '4',
    title: '11 Strategies to Secure Scholarship/Funding After Admission',
    thumbnail: 'https://i.ytimg.com/vi/WKLnkKYhmqc/maxresdefault.jpg',
    duration: '15:20',
    category: 'Funding',
    url: 'https://www.youtube.com/watch?v=WKLnkKYhmqc'
  },
  {
    id: '5',
    title: 'How I Got My Visa Approved Under One Minute',
    thumbnail: 'http://i3.ytimg.com/vi/fEe5IRl3rNc/hqdefault.jpg',
    duration: '7:45',
    category: 'Visa & Immigration',
    url: 'https://www.youtube.com/watch?v=fEe5IRl3rNc'
  },
  {
    id: '6',
    title: 'How to Request Application Fee Waiver',
    thumbnail: 'https://i.ytimg.com/vi/poadx_-Icgg/maxresdefault.jpg',
    duration: '9:15',
    category: 'Application Process',
    url: 'https://www.youtube.com/watch?v=poadx_-Icgg'
  },
  {
    id: '7',
    title: 'How to Apply for Graduate Assistantships in the US',
    thumbnail: 'https://i.ytimg.com/vi/KZqicMpLPxY/maxresdefault.jpg',
    duration: '11:30',
    category: 'Funding',
    url: 'https://www.youtube.com/watch?v=KZqicMpLPxY'
  }
];

const YouTubeContent = () => {
  const [activeCategory, setActiveCategory] = useState('All Content');
  
  const filteredVideos = activeCategory === 'All Content' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Free YouTube Resources
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our library of helpful videos covering various aspects of the graduate school application process.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map(video => (
            <div key={video.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary-600 bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">
                    {video.title}
                  </h3>
                  <div className="mt-4">
                    <span className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                      Watch Video <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/@evagasonline" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeContent;