import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import InterestTag from '../components/InterestTag';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [videos, setVideos] = useState([]);
    const [featuredVideos, setFeaturedVideos] = useState([]);

    useEffect(() => {
        fetchFeaturedVideos();
    }, []);

    const fetchFeaturedVideos = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/video/featured', {
                query: 'latest tech trends'
            });

            // Ensure video objects have thumbnails
            const processedVideos = response.data.map(video => ({
                ...video,
                id: video.id.videoId,
                thumbnail: video.snippet.thumbnails.medium.url // Add thumbnail URL
            }));

            setFeaturedVideos(processedVideos);
        } catch (error) {
            console.error('Error fetching featured videos:', error);
        }
    };

    const handleSearch = (query) => {
        axios.get(`http://localhost:3001/api/video/search`, {
            params: { q: query }
        })
        .then(response => {
            setVideos(response.data);
        })
        .catch(error => {
            console.error('Failed to fetch search results:', error);
        });
    };

    const VideoCard = ({ video }) => (
        <Link to={`/video/${video.id}`}>
            <div className="border rounded-lg shadow pb-2 cursor-pointer h-80 bg-white left-8">
                <img
                    src={video.thumbnail}
                    alt={video.snippet.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold mt-2 p-2">{video.snippet.title}</h3>
                <p className="text-gray-600 pl-2 pt-2">{video.snippet.channelTitle}</p>
            </div>
        </Link>
    );

    return (
        <div className="Main bg-blue-100 h-screen">
            <div className='flex'>
                <div className='relative w-screen shadow-2xl'>    
                    <SearchBar onSearch={handleSearch} />
                </div>
                <div className='absolute right-16 top-16'>
                    <InterestTag/>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 ">
                <div>
                    <h2 className="text-xl font-bold mb-4 ml-10">Featured Content</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {featuredVideos.map(video => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
