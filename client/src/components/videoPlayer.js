import React from 'react';
import { useParams } from 'react-router-dom';

function VideoPlayer() {
  const { videoId } = useParams();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;
