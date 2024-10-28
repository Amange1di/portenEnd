// Card.js
import React from "react";
import cardImage from "../../assets/card.png"; 
import "./card.css";
import { useNavigate } from "react-router-dom"; 

const Card = ({ post }) => {
    const navigate = useNavigate(); 

    const truncateText = (text) => {
        return text.split(' ').slice(0, 5).join(' ') + (text.split(' ').length > 5 ? '...' : '');
    };

    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className="card">
            <div className="cardimg">
                <img src={cardImage} alt="Card" />
            </div>
            {post ? (  // Conditional rendering
                <>
                    <h5 onClick={() => handleClick(post.id)}>{truncateText(post.title)}</h5>
                    <p>{truncateText(post.body)}</p>
                </>
            ) : (
                <p>No content available</p> 
            )}
        </div>
    );
};

export default Card;
