// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from '../components/SearchBar';
// import InterestTag from '../components/InterestTag';

// function Dashboard() {
//   const [videos, setVideos] = useState([]);
//   const [featuredVideos, setFeaturedVideos] = useState([]);
  

//   useEffect(() => {
//     fetchFeaturedVideos();
//     // Uncomment if you need a personalized feed function
//     // fetchPersonalizedFeed();
//   }, []);

//   const fetchFeaturedVideos = async () => {
//     try {
//       const response = await axios.post('http://localhost:3001/api/video/featured', {
//         query: 'latest tech trends'
//       });
  
//       const processedVideos = response.data.map(video => ({
//         ...video,
//         id: video.id.videoId 
//       }));
  
//       setFeaturedVideos(processedVideos);
//     } catch (error) {
//       console.error('Error fetching featured videos:', error);
//     }
//   };
  
//   // Remove or adjust fetchPersonalizedFeed if not needed
//   // const fetchPersonalizedFeed = async () => {
//   //   try {
//   //     const response = await axios.get('http://localhost:3001/api/video/personalized');
//   //     setVideos(response.data);
//   //   } catch (error) {
//   //     console.error('Failed to fetch personalized feed:', error);
//   //   }
//   // };

//   const handleSearch = (query) => {
//     axios.get(`http://localhost:3001/api/video/search`, {
//       params: { q: query }
//     })
//     .then(response => {
//       setVideos(response.data);
//     })
//     .catch(error => {
//       console.error('Failed to fetch search results:', error);
//     });
//   };

//   const handleTagClick = (tag) => {
//     axios.get(`http://localhost:3001/api/video/tag/${tag}`)
//     .then(response => {
//       setVideos(response.data);
//     })
//     .catch(error => {
//       console.error('Failed to fetch videos by tag:', error);
//     });
//   };

//   const VideoCard = ({ video }) => (
//     <div className="border rounded shadow p-4">
//       <iframe
//         width="100%"
//         height="auto"
//         src={`https://www.youtube.com/embed/${video.id}`}
//         title={video.snippet.title}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         loading='lazy'
//       ></iframe>
//       <h3 className="text-lg font-semibold mt-2">{video.snippet.title}</h3>
//       <p className="text-gray-600">{video.snippet.description}</p>
//     </div>
//   );
  
  

//   return (
//     <div className="">
//       <SearchBar onSearch={handleSearch} />

//       <div className="flex flex-col gap-4 mt-4">
//         <div>
//           <h2 className="text-xl font-bold mb-4">Featured Content</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {featuredVideos.map(video => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



// /////////////////////////////////////////










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from '../components/SearchBar';
// import InterestTag from '../components/InterestTag';
// import { Link } from 'react-router-dom';

// function Dashboard() {
//     const [videos, setVideos] = useState([]);
//     const [featuredVideos, setFeaturedVideos] = useState([]);

//     useEffect(() => {
//         fetchFeaturedVideos();
//     }, []);

//     const fetchFeaturedVideos = async () => {
//         try {
//             const response = await axios.post('http://localhost:3001/api/video/featured', {
//                 query: 'latest tech trends'
//             });

//             const processedVideos = response.data.map(video => ({
//                 ...video,
//                 id: video.id.videoId 
//             }));

//             setFeaturedVideos(processedVideos);
//         } catch (error) {
//             console.error('Error fetching featured videos:', error);
//         }
//     };

//     const handleSearch = (query) => {
//         axios.get(`http://localhost:3001/api/video/search`, {
//             params: { q: query }
//         })
//         .then(response => {
//             setVideos(response.data);
//         })
//         .catch(error => {
//             console.error('Failed to fetch search results:', error);
//         });
//     };

//     const handleTagClick = (tag) => {
//         axios.get(`http://localhost:3001/api/video/tags/${tag}`)
//         .then(response => {
//             console.log('Fetched videos by tag:', response.data); 
//             setVideos(response.data);
//         })
//         .catch(error => {
//             console.error('Failed to fetch videos by tag:', error);
//         });
//     };

//     const VideoCard = ({ video }) => (
//         <Link to={`/video/${video.id}`}>
//             <div className="border rounded-lg shadow pb-2 cursor-pointer h-80">
//                 <iframe
//                     width="100%"
//                     height="200"
//                     src={`https://www.youtube.com/embed/${video.id}`}
//                     title={video.snippet.title}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     loading="lazy"
//                     className="rounded-lg"
//                 ></iframe>
//                 <h3 className="text-lg font-semibold mt-2">{video.snippet.title}</h3>
//                 <p className="text-gray-600 pl-2 pt-2">{video.snippet.channelTitle}</p>
//             </div>
//         </Link>
//     );

//     return (
//         <div className="Main bg-blue-100 ">
//             <div className='flex'>
//                 <div className='relative w-screen shadow-2xl'>    
//                     <SearchBar onSearch={handleSearch} />
//                 </div>
//                 <div className='absolute  right-16 top-16'>
//                     <InterestTag onClick={handleTagClick}/>
//                 </div>
//             </div>
//             <div className="flex flex-col gap-4 mt-4 ">
//                 <div>
//                     <h2 className="text-xl font-bold mb-4 ">Featured Content</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                         {featuredVideos.map(video => (
//                             <VideoCard key={video.id} video={video} />
//                         ))}
//                     </div>
//                 </div>
//                 <div>
//                     <h2 className="text-xl font-bold mb-4">Videos by Tags</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                         {videos.map(video => (
//                             <VideoCard key={video.id} video={video} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;

