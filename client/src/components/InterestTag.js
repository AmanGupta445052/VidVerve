import React from 'react';
import { useNavigate } from 'react-router-dom';

const InterestTag = ({ onClick }) => {
    const tags = [
        { name: 'Technology', imgSrc: '/images/tech.webp' },
        { name: 'Fitness', imgSrc: '/images/fitness.webp' },
        { name: 'Travel', imgSrc: '/images/tech.webp' },  
        { name: 'Entertainment', imgSrc: '/images/fitness.webp' },
    ];

    const navigate = useNavigate();

    const handleClick = (tag) => {
        navigate(`/categories/${tag}`);  
    };

    return (
        <div className="flex space-x-4">
            {tags.map((tag) => (
                <button
                    key={tag.name}
                    className="flex flex-col items-center hover:text-blue-700"
                    onClick={() => handleClick(tag.name)}
                >
                    <img
                        src={tag.imgSrc}
                        alt={tag.name}
                        className="w-24 h-24 rounded-full mx-2 mb-4 hover:text-blue-700 mt-2 hover:h-20 hover:w-20 border-2 shadow-custom-black border-x-white"
                    />
                    <div className="text-white font-bold text-sm px-2 rounded">
                        {tag.name}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default InterestTag;
